const {model} = require("mongoose")

const mongoose = require = require("mongoose")

const ListSchema = new mongoose.Schema({
    title:String,
    description:String
    // tags:{ ["work", "study", "entatainment", "family" ] }
    
})

const ListModel = mongoose.model("list",ListSchema)
model.exports = ListModel