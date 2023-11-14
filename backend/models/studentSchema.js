const mongoose = require("mongoose")
const Schema = mongoose.Schema

let studentSchema = new Schema({
    name:{type: String,
         required:true},
    mail:{
        type: String,
        required:true},
    password:{
        type: String,
        required:true},
    class:{
        type:String,
        required:false}
})

const Student = mongoose.model("Students",studentSchema)

module.exports = Student