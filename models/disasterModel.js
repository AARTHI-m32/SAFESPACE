const mongoose = require('mongoose')

const disasterSchema = new mongoose.Schema({
    id : {
        type :String
    },
    userid : {
        type : String
    },
    name : {
        type:String,
    },
    disastertype : {
        type :String
    },
    city : {
        type : String
    },
    location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true },
      },
    description  : {
        type : String,
    },
    contactinfo : {
        type : String
    },
    date : {
        type : Date
    },
    status : {
        type : String,
        default : "Emergency"
    }
})

const Disaster = mongoose.model("disaster",disasterSchema)
module.exports = Disaster