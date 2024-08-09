const mongoose = require('mongoose')

const volunteerSchema = new mongoose.Schema({
        userid : {
            type : String,
            required : true
        } ,
        disasterid : {
            type : String,
            required :true
        },
        id : {
            type : String,
            required : true
        },
        name : {
            type : String
        },
        phoneno : {
            type :String
        },
        age : {
            type : Number,
            min : 18,
            max : 50,
        },
        role: 
        { type: String,
          required: true 
        },
        agreement:
         { type: Boolean, 
           default : false 
        },
})

const Volunteer = mongoose.model("volunteers",volunteerSchema)
module.exports = Volunteer;