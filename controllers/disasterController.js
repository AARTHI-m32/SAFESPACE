const Volunteer = require('../models/volunteerModel')
const Disaster = require('../models/disasterModel')
const { v4 : uuidv4 } = require('uuid')

const addDisaster = async(req,res) => {
    try{
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
    try{
       const disaster = await Disaster.find()
      res.status(200).json({
        message : "Fetched successfully",
        Disaster : disaster
    })}
    catch(error){
        res.status(500).json(error.message)
        console.error(error)
    }
}

const editDisaster = async(req,res) => {
    const did = req.params.disasterid
     try{
        const editdisaster = await Disaster.findOneAndUpdate({id:did},
           { $set : {
            name : req.body.name,
            disastertype : req.body.disastertype,
            city : req.body.city,
            location: {
                type: 'Point',
                coordinates: req.body.coordinates,
              },
            description : req.body.description,
            contactinfo : req.body.contact,
            date : req.body.date,
            time : req.body.time,
            verify : req.body.verify,
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