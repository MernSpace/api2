const postModel= require('../models/postModel');
var jwt = require('jsonwebtoken');
const userModel = require("../models/userModel");


exports.createpost = async (req, res)=>{


    try {
        let reqBody = req.body;
        let email = req.headers['email']
        let createdate = Date.now()
        let name = reqBody['name']
        let ctagory= reqBody['ctagory']
        let content=  reqBody['content']
        let postBody = {
            email:email,
            createdate:createdate,
            name:name,
            ctagory:ctagory,
            content:content
        }
        const data = await postModel.create(postBody);
        return res.status(200).json({ status: "success", data: data });
    } catch (e) {
        return res.status(500).json({ status: "fail", data: e });
    }
}




exports.select = async (req, res) => {
    const userEmail = req.headers['email'];
    const data = await postModel.find({ email: userEmail });
    res.status(200).json({ status: "success", data });

};



//update post

exports.update = async (req, res)=>{


    try {
        let reqBody = req.body;
        let createdate = Date.now()
        let name = reqBody['name']
        let ctagory= reqBody['ctagory']
        let content=  reqBody['content']
        let id = reqBody["id"]
        let postBody = {
            createdate:createdate,
            name:name,
            ctagory:ctagory,
            content:content
        }
        const data = await postModel.updateOne({ _id: id }, { $set: postBody }, { upsert: true });
        return res.status(200).json({ status: "success", data: data });
    } catch (e) {
        return res.status(500).json({ status: "fail", data: e });
    }
}