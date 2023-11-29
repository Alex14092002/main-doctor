import Medical from "../models/Medical.mjs";

const MedicalController = {
  getAllMedical: async (req, res) => {
    try {
      const medical = await Medical.find();
      res.status(200).json(medical);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getMedicalById: async (req, res) => {
    try {
      const medical = await Medical.findById(req.params.id);
      res.status(200).json(medical);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteMedical: async (req, res) => {
    try {
      const medical = await Medical.findByIdAndDelete(req.params.id);
      res.status(200).json("Xoa thanh cong");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateMedical: async (req, res) => {
    try {
      // Tiến hành cập nhật với ID đã lấy được
      const medical = await Medical.findById(req.params.id);
      // Kiểm tra xem bản ghi y tế có tồn tại không
      if (!medical) {
        return res.status(404).json({ success: false, message: 'Không tìm thấy bản ghi y tế' });
      }
      // Cập nhật các trường dữ liệu tùy thuộc vào dữ liệu mới từ req.body
      if (req.body.diagnostic) {
        medical.diagnostic = req.body.diagnostic;
      }
      if (req.body.totalBill) {
        medical.totalBill = req.body.totalBill;
      }
      if (req.body.advice) {
        medical.advice = req.body.advice;
      }
      if (req.body.medicines && Array.isArray(req.body.medicines)) {
        medical.medicine = req.body.medicines;
      }

      // Lưu bản ghi y tế đã cập nhật
      await medical.save();
      res.status(200).json({ success: true, message: 'Cập nhật bản ghi y tế thành công', updatedMedical: medical });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};
export default MedicalController;
