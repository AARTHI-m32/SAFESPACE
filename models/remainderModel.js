const mongoose = require('mongoose')

const remainderSchema = new mongoose.Schema({
    remainder : [ 
       { 
    disasterid : {
        type : String
    }}],
    userid : {
        type : String
    }
    
})

const Remainder = mongoose.model('remainder',remainderSchema)
module.exports  =Remainder