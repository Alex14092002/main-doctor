import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/User.mjs";
const authController = {
  registerUser: async (req, res) => {
    try {
      const message = [];
      const existingUser = await User.findOne({
        $or: [{ email: req.body.email }, { phone: req.body.phone }],
      });
      if (existingUser) {
        message.push("Tên người dùng hoặc số điện thoại đã tồn tại.");
      }

      if (message.length > 0) {
        // Nếu có lỗi, trả về danh sách lỗi cụ thể
        return res.status(400).json({ message });
      }

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        email: req.body.email,
        password: hashed,
        phone: req.body.phone,
        role: req.body.role,
      });

      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi máy chủ." });
    }
  },
  login : async(req , res) =>{
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(404).json("User không tồn tại");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(401).json("Sai password");
      }
      if (user && validPassword) {
        res.status(200).json(user);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi máy chủ." });
    }
  }
};
export default authController;
