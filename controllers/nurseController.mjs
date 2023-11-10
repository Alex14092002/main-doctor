import Medical from "../models/Medical.mjs";
const nurseController = {
    getAllmedical : async (req , res) => {
      try {
        const medical = await Medical.find();
        res.status(200).json(medical);
      } catch (error) {
        res.status(500).json(error);
      }
    },
    updateMedical: async (req, res) => {
      const medicalId = req.params.id;

      try {
          // Tìm bản ghi lịch khám bệnh theo medicalId và cập nhật trạng thái thành true
          const updatedMedical = await Medical.findByIdAndUpdate(medicalId, { status: true });
          console.log(updatedMedical);
          if (!updatedMedical) {
              return res.status(404).json({ message: "Không tìm thấy thông tin lịch khám bệnh" });
          }

          // Sau khi cập nhật lịch khám bệnh, bạn có thể lấy thông tin medicalId của Nurse từ request hoặc thông tin khác
          const nurseId = req.body.nurseId; // Giả sử bạn đã truyền nurseId trong request body

          // Cập nhật trường medicalId trong schema của Nurse
          const updatedNurse = await Nurse.findByIdAndUpdate(nurseId, { medicalId: medicalId });
          if (!updatedNurse) {
              return res.status(404).json({ message: "Không tìm thấy thông tin y tá" });
          }

          res.status(200).json(updatedNurse);
      } catch (error) {
          res.status(500).json({ message: error });
      }
  }
      
}
export default nurseController