const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(bodyparser.json())
//app.use(cors())
app.use(cors({
  origin: ['http://localhost:5173', 'https://safespace-aarthi-ms-projects.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));


const userRoutes = require('./routes/userRoutes')
const disasterroutes = require("./routes/disasterRoutes")
const volunteerroutes = require('./routes/volunteerRoutes')
const remainderRoutes  =require('./routes/remainderRoutes')

app.set('view engine','ejs');

mongoose.connect(process.env.mongouri)
.then(() => {
    console.log("Mongodb connected")
})

app.use("/",userRoutes)
app.use("/disaster",disasterroutes)
app.use("/volunteer",volunteerroutes)
app.use("/remainder",remainderRoutes)

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})