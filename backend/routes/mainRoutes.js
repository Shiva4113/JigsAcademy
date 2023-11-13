const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({mssg:"Primary route"})
})

//dashboard - assignments

router.get('/')

module.exports = router    