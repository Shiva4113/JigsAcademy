//Requiring all packages
require('dotenv').config()
const express = require("express")
const mainRouter = require("./routes/mainRoutes")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")


const app = express();
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

const connectToDb = async() => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to DB");
    }
    catch (error) {
        console.log("Error connecting to DB:",error);
    }
};
connectToDb();

//middleware
app.use(express.json())
express.json()
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

app.use(bodyParser.json())
app.use('/api',mainRouter)

// listen for requests
app.listen(PORT,()=>{
    console.log("listening on port:",PORT)
})