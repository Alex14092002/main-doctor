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
  deleteMedical: async (req, res) => {
    try {
      const medical = await Medical.findByIdAndDelete(req.params.id);
      res.status(200).json("Xoa thanh cong");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
export default MedicalController;
