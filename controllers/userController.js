const User = require('../models/userModel')
const Disaster = require('../models/disasterModel')
const Volunteer = require('../models/volunteerModel')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {v4:uuidv4} = require('uuid')

const register = async(req,res) => {
    try{
    const user = await User.findOne({username : req.body.username})
    const email = await User.findOne({email : req.body.email})
    if(user)
    {
        return res.status(404).json({
            message : "User already exists"
        })
    }
    if(email){
        return res.status(404).json({
            message : "Email already Exists"
        })
    }
   
    const rolee = (req.body.password === "3456")? 'admin' : 'user'
        const newuser = await User.create({
            id : uuidv4(),
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            role :req.body.role
        })
        return res.status(200).json({
            message : "Registration Success",
            
        })
    }
    catch(error){
        console.log(error)
           return res.status(500).json({
            message : error.message
           })
    }
}

const login = async(req,res) => {
    try{
        const user = await User.findOne({email : req.body.email})
            
        if(!user){
            return res.status(404).json({message : "user does not exist"})
        }
        const validpassword = await bcrypt.compare( req.body.password , user.password)
        
        if(!validpassword)
            return res.status(404).json({message : "Invalid password"})
        if(user.role===req.body.role)
        {
        const token =jwt.sign({id:user.id , name:user.username , role:user.role} , "secret_key" , { expiresIn : '3h' })
     
       return res.status(200).json({
             token : token,
             name : user.username,
             role : user.role,
            message : "Login Successfully"
        })}
        else
        {
          return  res.status(404).json({message :"Choose the correct role"})
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message : error.message})
    }
}

const getProfile = async(req,res) => {
    try{
        
        const user = await User.findOne({id : req.user.id})
        const disaster = await Disaster.find({userid : req.user.id}).sort({ date: -1 })
        var volunteer = await Volunteer.find({userid : req.user.id}).sort({ date: -1 })


        volunteer = await Promise.all(volunteer.map(async (vol) => {
            const disasterDetails = await Disaster.findOne({ id: vol.disasterid });
            console.log("Found disaster details:", vol.disasterid);
            return {
                ...vol._doc,  // Keep the original volunteer details
                disasterDetails: disasterDetails ? disasterDetails._doc : null ,
                // Include the disaster details
            };
            
        }));

        const result = { user,disaster,volunteer}

        res.status(200).json({
            messase : "fetched successfully",
            Profile : result
        })
    }
    catch(error){
        console.error(error)
        res.status(500).json(error.messasge)
    }
}

module.exports = { register , login , getProfile }