const express = require('express')
const router = require('./src/routers/api')
const app = new express();
const bodyParser =require('body-parser')



//secqurity middleware

const es = require('express-mongo-sanitize');
const rt = require('express-rate-limit')
const cors = require('cors');
const hpp = require('hpp')
const helmet = require('helmet')
const xss = require('xss-clean')


//datadase 

const monsgoos = require('mongoose')

//secqurity impilment
app.use(es());
app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(xss());
app.use(bodyParser.json())


const limiter = rt({windowMs:15*60*1000, max:3000})
app.use(limiter)



//database connection
let URL = "mongodb+srv://<user>:<password>@cluster0.g7zuc4b.mongodb.net/sifatadmin"
let OPTIONS = {user:'', pass:'', autoIndex:true}
monsgoos.connect(URL, OPTIONS)



app.use("/api/v1",router)


app.use("*",(req, res)=>{
res.status(401).json({status:"fali",data:"not found"})
})


module.exports=app