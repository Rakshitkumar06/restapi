const mongoose = require("mongoose");
const Scehma = mongoose.Schema;

let Course = new Scehma(
    {
    courseId: { type: String, required: true },
    title: { type: String, required: true, minlength: 4 },
    duration: { type: String, required: true},
    mode: { type: String, required: true},
    price: { type: String, unique: true, required: true},
    trainerId: { type: Number },
    modules: { type: Array},
    syllabus: { type: String },
    createdAt: { type: Date, default: Date.now },
}, 
{ collection: "course" }
);

module.exports = mongoose.model("Course", Course);