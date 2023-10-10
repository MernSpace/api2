const userModel = require('../models/userModel')
var jwt = require('jsonwebtoken');

exports.createuser = async (req, res) => {
    try {
      const userData = req.body;
      const user = await userModel.create(userData);
      return res.status(200).json({ status: "success", data: user });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ status: "fail", data: e });
    }
  };



//login
exports.login = async(req, res)=>{
    
    try{
        let reqBody = req.body
        let result = await userModel.find(reqBody).count();
        if (result ===1){
            // Create Token
            let Payload={
                exp:Math.floor(Date.now()/1000)+(24*60*60),
                data:reqBody['email']
            }
            let token=jwt.sign(Payload,"SecretKey123456789");
            res.status(200).json({status:"success",data:token})
            
        }
        else{
            // Login fail
            res.status(200).json({status:"fail",data:"No User Found"})
        }

    }
    catch(e){
        res.status(401).json({status:"fail to login",data:"user not found"})
    }
}



//scelect profile

exports.select = async (req, res) => {
    const userEmail = req.headers['email'];

    const user = await userModel.findOne({ email: userEmail });

    if (user) {
        return res.status(200).json({ status: "success", data: user });
    } else {
        return res.status(401).json({ status: "fail", data: "User not found" });
    }
};



exports.update = async (req, res) => {
    const userEmail = req.headers['email'];
    const userData = req.body;
    const user = await userModel.updateOne({ email: userEmail },userData);

    if (user) {
        return res.status(200).json({ status: "success", data: user });
    } else {
        return res.status(401).json({ status: "fail", data: "User not found" });
    }
};