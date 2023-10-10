const mongoose = require('mongoose')
const DataSchema = mongoose.Schema({
    name:{type:String,unique:true},
    email:{type:String},
    ctagory:{type:String},
    content:{type:String},
    createdate:{type:Date,default:Date.now()},
    updatedate:{type:Date, default: Date.now()}
},{versionKey:false})

const postModel = mongoose.model('posts',DataSchema)

module.exports = postModel