const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(bodyparser.json())
app.use(cors())

const userRoutes = require('./routes/userRoutes')
const disasterroutes = require("./routes/disasterRoutes")
const volunteerroutes = require('./routes/volunteerRoutes')

app.set('view engine','ejs');

mongoose.connect('mongodb+srv://aarthi32:Aarthi32@cluster0.grrieqs.mongodb.net/Disaster?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("Mongodb connected")
})

app.use("/",userRoutes)
app.use("/disaster",disasterroutes)
app.use("/volunteer",volunteerroutes)

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})