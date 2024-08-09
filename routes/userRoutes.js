const express = require('express')
const Router = express.Router()
const auth = require('../middleware/auth')
const usercontroller = require('../controllers/userController')

Router.post("/register",usercontroller.register)
Router.post("/login",usercontroller.login)
Router.get("/getprofile",auth,usercontroller.getProfile)

module.exports = Router