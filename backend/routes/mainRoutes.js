const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Student = require("../models/studentSchema")

// router.get('/',(req,res)=>{
//     res.json({mssg:"Primary route"})
// })

// //dashboard - assignments

// router.get('/dashboard',(req,res)=>{
//     res.json({mssg:"dashboard"})
// })

router.post('/login', async (req,res)=>{
    console.log(req.body)
    try{
        // let studentId = await 
        console.log("studentModel",Student)
        let getStudent=await Student.findById('6554991cf87962c93aa2fa7d')
        console.log(getStudent)
        // if(!getStudent){
        //     return res.status(401).send("Invalid username or password")
        // }
        // const result = await bcrypt.compare(req.body.password,getStudent.password)
        // if(result){
        //     const token = jwt.sign({studId:getStudent.id},"primary-key")
        //     res.json({token, studId:getStudent._id,username:getStudent.username})
        // }
        // else{
        //     res.status(400).json({error:"Invalid username or password"})
        // }
        res.status(200).json({mssg:"ok",user:getStudent})
    }
    catch(err){
        console.log("error",err)
        res.status(400).json({err})
    }
})
module.exports = router    