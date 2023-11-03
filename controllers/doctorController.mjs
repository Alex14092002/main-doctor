import MedicalRecord from "../models/MedicalRecord.mjs";
import Medicine from "../models/Medical.mjs"; // Import MedicineSchema

const doctorController = {
  prescription: async (req, res) => {
    const idPatient = req.params.id;

    try {
      const { symptom, medicineName } = req.body; // Đảm bảo rằng bạn có tên thuốc từ req.body
      // Tìm thông tin thuốc dựa trên tên
      const selectedMedicine = await Medicine.findOne({ name: medicineName });

      if (!selectedMedicine) {
        return res.status(404).json({ message: "Không tìm thấy thuốc" });
      }

      // Tạo một bản ghi mới trong medicalRecord và gán thông tin thuốc
      const newRecord = new MedicalRecord({
        idPatient: idPatient,
        symptom: symptom,
        medicine: selectedMedicine._id, // Gán ID của thuốc từ MedicineSchema
      });

      // Lưu bản ghi medicalRecord
      const savedRecord = await newRecord.save();

      res.status(200).json(savedRecord);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
export default doctorController