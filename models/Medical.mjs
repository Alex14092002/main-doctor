import mongoose from "mongoose";
const MedicalSchma = mongoose.Schema (
    {
        idPatient : {
            type : String,
            require : true
        },
        symptom : {
            type : String,
            require : true
        },
        status : {
            type : Boolean,
            default : false,
            require : true
        }
    },
    { timestamps: true }
)
export default  mongoose.model('Medical', MedicalSchma);