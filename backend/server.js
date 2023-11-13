//Requiring all packages

const express = require("express")
const mainRouter = require("./routes/mainRoutes")
//express app
const app = express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routing
app.use(mainRouter)


//listen for requests
app.listen(3000,()=>{
    console.log("listening on port 3000")
})