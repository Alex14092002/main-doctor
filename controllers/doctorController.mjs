import MedicalRecord from "../models/MedicalRecord.mjs";
import Medicine from "../models/Medical.mjs"; // Import MedicineSchema
import PayPal from "../models/PayPal.mjs"; // Import PayPalSchema (nếu có)

const doctorController = {
  prescription: async (req, res) => {
    const idPatient = req.params.id;
    const idDoctor = req.params.id;
    try {
      const { symptom, medicineName } = req.body; // Đảm bảo rằng bạn có tên thuốc từ req.body
      // Tìm thông tin thuốc dựa trên tên
      const selectedMedicine = await Medicine.findOne({ name: medicineName });

      if (!selectedMedicine) {
        return res.status(404).json({ message: "Không tìm thấy thuốc" });
      }

      // Tạo một bản ghi mới trong medicalRecord và gán thông tin thuốc
      const newRecord = new MedicalRecord({
        idDoctor: idDoctor,
        idPatient: idPatient,
        symptom: symptom,
        medicine: selectedMedicine._id, // Gán ID của thuốc từ MedicineSchema
      });

      // Lưu bản ghi medicalRecord
      const savedRecord = await newRecord.save();

      // Tìm giá của thuốc từ bảng PayPal
      if (PayPal) { // Kiểm tra nếu bạn đã import PayPalSchema
        const paypalInfo = await PayPal.findOne({ medicine: selectedMedicine._id });
        if (paypalInfo) {
          // Lấy giá từ paypalInfo
          const medicinePrice = paypalInfo.price;

          // Tạo một đối tượng response để trả về kết quả với giá của thuốc
          const response = {
            ...savedRecord.toObject(),
            medicinePrice: medicinePrice,
          };

          return res.status(200).json(response);
        }
      }

      // Nếu không tìm thấy thông tin giá, trả về kết quả mà không có giá
      res.status(200).json(savedRecord);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};

export default doctorController;
