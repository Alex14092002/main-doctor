
import User from "../models/User.mjs";
import bcrypt from 'bcrypt' 
const userController = {
  getAllusers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Xoa thanh cong");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getOneuser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateUser: async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    try {
      // Kiểm tra nếu trường 'password' được cập nhật
      if (req.body.password) {
        // Băm mật khẩu mới trước khi lưu vào cơ sở dữ liệu
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
      }
  
    
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
  
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

};
export default userController
