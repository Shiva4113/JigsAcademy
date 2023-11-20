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
      res.json({ token, userId: getStudent._id, username: getStudent.username, mail: getStudent.mail, name: getStudent.name, section: getStudent.section });
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
      name: req.body.name,
      section:req.body.section
  })
  try{
    let savedStudent = await student.save()
    const token = jwt.sign({userId: savedStudent._id},"primary-key")
    res.status(200).send({token,userId:savedStudent._id,username:savedStudent.username,mail:savedStudent.mail,name:savedStudent.name,section:savedStudent.section})
  }
  catch(err){
    return res.status(401).send("Invalid username or password")
  }
})

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {

    cb(null, true);
  },
});


router.post("/upload", upload.single("file"), (req, res) => {
  try {
    if (req.file) {
      console.log('File uploaded successfully:', req.file.originalname);

      res.status(200).json({ filename: req.file.originalname });
    } else {
      console.log('No file uploaded');
      res.status(400).send("No file uploaded");
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send("Internal server error");
  }
});


module.exports = router;