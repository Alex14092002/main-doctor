import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
        unique: true,
      },
      username: {
        type: String,
        unique: true,
        minLength: 3,
        maxLength: 30,
      },
      phone: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 11,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        minLength: 6,
       
      },
      role: {
        type: String,
        required: true,
      },
      admin: {
        type: Boolean,
        default: false,
      },
      avatar: {
        type: String, // Lưu đường dẫn hoặc tên tệp ảnh
      },
    },
    { timestamps: true }
  );

export default mongoose.model('User', userSchema);