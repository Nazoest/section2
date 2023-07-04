const express=require('express')
const app=express()
const mongoose=require("mongoose")
const morgan=require("morgan")
const dotenv=require("dotenv")

//bring in routes

const postRoutes = require('./routes/post')

dotenv.config()

app.use(morgan("dev"))
app.use("/",postRoutes)

//db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("db connected")
})
mongoose.connect.on('error',err=>{
  console.log(`DB connection error:${err.message}`)
})
const port =process.env.PORT||8080;

app.listen(port,()=>{
    console.log(`App from my${port}`)
});

