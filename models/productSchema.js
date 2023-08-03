const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Products = new Schema({
    id:{
        type: Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model("Products",Products)