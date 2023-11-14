const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({mssg:"Primary route"})
})

//dashboard - assignments

router.get('/dashboard',(req,res)=>{
    res.json({mssg:"dashboard"})
})

router.post('/login',(req,res)=>{
    res.json()
})
module.exports = router    