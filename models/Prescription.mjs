import mongoose from "mongoose";
const PrescriptionSchema = mongoose.Schema (
    {
        idPatient : {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        },
        listMedicine : {
            type: mongoose.Schema.Types.ObjectId, ref: "MedicineSchema"
        }
    }
    { timestamps: true }
)
export default  mongoose.model('Prescription', PrescriptionSchema);