const express = require('express')
const Route = express.Router()
const auth = require('../middleware/auth')
const disastercontroller = require('../controllers/disasterController')

Route.post("/adddisaster",auth,disastercontroller.addDisaster)
Route.delete("/deletedisaster/:disasterid",auth,disastercontroller.deletedisaster)
Route.get("/getalldisaster",auth,disastercontroller.getAllDisaster)
Route.put("/editdisaster/:disasterid",auth,disastercontroller.editDisaster)

module.exports = Route