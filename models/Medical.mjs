import mongoose from "mongoose";

const MedicalSchema = mongoose.Schema({
    idPatient: {
        type: String,
        required: true
    },
    symptom: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false,
        required: true
    },
    idDoctor: {
        type: String, // Thêm trường idDoctor để lưu ID của bác sĩ
    },
    idNurse: {
        type: String, // Thêm trường idNurse để lưu ID của y tá
    },
    namePatient : {
        type: String,
    },
    medicine: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Medicine', // Thêm một mảng để lưu ID của các thuốc
        }
    ],
    totalBill: {
        type: Number, // Thêm trường tổng tiền đơn thuốc
    }
},
{ timestamps: true }
);

export default mongoose.model('Medical', MedicalSchema);
