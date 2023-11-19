const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Student = require("../models/studentSchema")

router.post("/login", async (req, res) => {
  try {
    let getStudent = await Student.findOne({ username: req.body.username });

    if (!getStudent) {
      return res.status(401).send("Invalid username or password");
    }

    const result = await bcrypt.compare(req.body.password, getStudent.password);

    if (result) {
      const token = jwt.sign({ userId: getStudent._id }, "primary-key");
      res.json({ token, userId: getStudent._id, username: getStudent.username });
    } else {
      res.status(400).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/signup",async(req,res)=>{
  const existingUser = await Student.findOne({
    $or: [
        { username: req.body.username },
        { mail: req.body.mail }
    ]
});

  if (existingUser) {
    return res.status(400).send("Username or email already exists");
  }
  req.body.password = await bcrypt.hash(req.body.password,10)
  let student = new Student({
      username: req.body.username,
      password: req.body.password,
      mail: req.body.mail,
      name: req.body.name
  })
  try{
    let savedStudent = await student.save()
    const token = jwt.sign({userId: savedStudent._id},"primary-key")
    res.status(200).send({token,userId:savedStudent._id,username:savedStudent.username,mail:savedStudent.mail})
  }
  catch(err){
    return res.status(401).send("Invalid username or password")
  }
})

module.exports = router;