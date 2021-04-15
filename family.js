const mongoose = require("mongoose")
const familySchema = mongoose.Schema({
lastname: String,
address: String,
phoneNumber: Number
})
module.exports = mongoose.model("family", familySchema)