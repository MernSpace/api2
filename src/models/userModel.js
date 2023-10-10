const monsgoos = require('mongoose')
const DataSchema = monsgoos.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    mobile:{type:String},
    pass:{type:String}
},{versionKey:false})

const userModel = monsgoos.model('users',DataSchema)
module.exports= userModel