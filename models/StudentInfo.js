import mongoose from "mongoose";

// Defining Schema.
const StudentInfoSchema = new mongoose.Schema({
    rollNo: {type: Number, required: true, unique: true},
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    branch: {type: String, required: true},
    percent: {type: mongoose.Decimal128, validate: (p) => { return p >= 50 && p <= 100}},
});

// Creating Model.
const StudentInfoModel = mongoose.model("StudentInfo", StudentInfoSchema);

export default StudentInfoModel;
