const mongoose = require("mongoose")
const familySchema = mongoose.Schema({
costumetype: String,
size: String,
cost: Number
})
module.exports = mongoose.model("family", familySchema)