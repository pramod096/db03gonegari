const mongoose = require("mongoose")
const familySchema = mongoose.Schema({
    lastName:String,
    address:{
        type:String,
        minLength: 7,
        maxLength: 400
    }   


    phoneNumber:{
        type:Number,
        min:1,
        max:400
    }
})
module.exports = mongoose.model("family", familySchema)