import mongoose from "mongoose";

const PayPalSchema = mongoose.Schema({
  // Định nghĩa các trường của mô hình PayPal ở đây
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

});

const PayPal = mongoose.model("PayPal", PayPalSchema);

export default PayPal;
