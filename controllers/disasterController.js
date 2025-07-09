const Volunteer = require('../models/volunteerModel')
const Disaster = require('../models/disasterModel')
const User =require('../models/userModel')
const { v4 : uuidv4 } = require('uuid')
const nodemailer = require("nodemailer");
require("dotenv").config();

//console.log(process.env.EMAIL_USER)

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,  // Your email
        pass: process.env.EMAIL_PASS,  // App password (not regular password)
    },
});

const sendDisasterAlert = async (toEmail, disaster) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: toEmail,  // Recipient email
        subject: "🚨 New Disaster Alert! from SAFESPACE",
        text: `A new disaster (${disaster.name}) has been reported in ${disaster.city}.\n\nDescription: ${disaster.description}\n\nStay safe!`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent to ${toEmail}`);
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
};


const addDisaster = async(req,res) => {
    try{

        const users=await User.find({})

        const newDisaster = await Disaster.create({
            id : uuidv4(),
            userid : req.user.id,
            name : req.body.name,
            disastertype : req.body.disastertype,
            city : req.body.city,
            location: {
                type: 'Point',
                coordinates: req.body.coordinates,  // Expecting [longitude, latitude]
            },
            description : req.body.description,
            date : req.body.date,
            time : req.body.time,
            contactinfo : req.body.contact
        })

        users.forEach((user) => {
            sendDisasterAlert(user.email, newDisaster);
        });
        res.status(201).json({
            message : "disaster created",
            Disaster : newDisaster
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({ error : error.message})
    }
}

const getAllDisaster = async(req,res) => {

    const show = req.params.value;
    try{
       const disaster = await Disaster.find({process : show}).sort({ _id: -1 })
      res.status(200).json({
        message : "Fetched successfully",
        show : show,
        Disaster : disaster
    })}
    catch(error){
        res.status(500).json(error.message)
        console.error(error)
    }
}

const editDisaster = async(req,res) => {
    const did = req.params.disasterid
    const [lng , lat] = req.body.coordinates;
     try{
        const editdisaster = await Disaster.findOneAndUpdate({id:did},
           { $set : {
            name : req.body.name,
            disastertype : req.body.disastertype,
            city : req.body.city,
            location: {
                type: 'Point',
                coordinates:[lat,lng]
              },
            description : req.body.description,
            contactinfo : req.body.contact,
            date : req.body.date,
            time : req.body.time,
            verify : req.body.verify,
            process : req.body.process,
           }},
           {new : true}
        )
          res.status(200).json({
            message : "edited successfully",
            updated : editdisaster
          })
     }
     catch(error){
        console.log(error)
        res.status(500).json(error.message)
     }
}



const deletedisaster = async(req,res) => {
    try{
    const did = req.params.disasterid
    const deleteddisaster = await Disaster.findOneAndDelete({id:did})
    const volunteerdelete = await Volunteer.deleteMany({disasterid : did})
    res.status(200).json({
        message : "deleted successfully",
        disaster : deleteddisaster
    })}
    catch(error){
        res.status(500).json(error.message)
        console.error(error)
    }
}

module.exports = { addDisaster,deletedisaster,getAllDisaster,editDisaster }