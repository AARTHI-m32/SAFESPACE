const volunteercontroller = require('../controllers/volunteerController')
const express = require('express')
const Router = express.Router()
const auth = require('../middleware/auth')

Router.post("/addvolunteer/:disasterid",auth,volunteercontroller.addvolunteer)
Router.delete("/deletevolunteer/:volunteerid",auth,volunteercontroller.deleteVolunteer)
Router.put("/editvolunteer/:volunteerid",auth,volunteercontroller.editvolunteer)
Router.get("/getvolunteer/:disasterid",auth,volunteercontroller.getallvolunteer)

module.exports = Router