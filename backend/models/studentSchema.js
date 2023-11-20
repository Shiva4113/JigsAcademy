const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  file: {
    filename: {
      type: String,
      default: null,
    },
  },
});

const Student = mongoose.model("students", studentSchema);

module.exports = Student;
