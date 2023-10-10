const express = require('express')
const router = express.Router();
const useController = require('../controlllers/userController')
const postController = require("../controlllers/postController")
const auth = require('../midllwere/authmiddlewere')

//user control
router.post("/createuser", useController.createuser)
router.post("/login", useController.login)


//after login
router.post("/detail",auth,useController.select)
router.post("/update",auth,useController.update)

//after login new task create post
router.post("/createpost", auth, postController.createpost)
//select post
router.get("/selectpost",auth,postController.select)
//update post
router.post("/updatepost", auth, postController.update)





module.exports= router