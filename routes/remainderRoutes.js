const express = require('express')
const Route = express.Router()
const auth = require('../middleware/auth')
const remaindercontroller = require('../controllers/remainderController')

Route.post("/addremainder",auth,remaindercontroller.addRemainder)
Route.delete("/deleteremainder/:disasterid",auth,remaindercontroller.deleteRemainder)
Route.get("/getallremainder",auth,remaindercontroller.getallremainder)


module.exports = Route