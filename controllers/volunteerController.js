const Volunteer = require('../models/volunteerModel')
const {v4:uuidv4} = require('uuid')

const addvolunteer = async(req,res) => {
    const did = req.params.disasterid
    try{
        const newVolunteer = await Volunteer.create({
            userid : req.user.id,
            disasterid : did,
            id :uuidv4(),
            name : req.body.name,
            age : req.body.age,
            phoneno : req.body.phoneno,
            role : req.body.role,
            agreement : "true"
        })
        res.status(200).json({
            message : "volunteer created",
            volunteer : newVolunteer
        })
    }
    catch(error){
        res.status(500).json({
        "error" : error.message},
        console.error(error))
    }
}

const getallvolunteer = async (req,res) => {
    const did = req.params.disasterid
    try{
        const volunteerdetails = await Volunteer.find({disasterid : did})
        res.status(200).json({
            message : "fetched",
            deleted : volunteerdetails
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json(error.message)
    }
}

const editvolunteer = async(req,res) => {
    const vid = req.params.volunteerid
    try{
        const edited = await Volunteer.findOneAndUpdate({id:vid},
            {  $set : {
                name : req.body.name,
            age : req.body.age,
            phoneno : req.body.phoneno,
            role : req.body.role
            }
            },{new : true}
        )
        res.status(200).json({
            message : "edited",
            editedvolunteer : edited
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json(error.message)
    }
}

const deleteVolunteer = async(req,res) => {
   try {
    const vid = req.params.volunteerid
    const deleted = await Volunteer.findOneAndDelete({ id : vid})
    res.status(200).json({
        "message" : "deleted successfully",
        "deleted" : deleted
    })}
    catch(error){
        console.log(error)
        res.status(500).json(error.message)
    }
}

module.exports = {addvolunteer,deleteVolunteer,getallvolunteer,editvolunteer }