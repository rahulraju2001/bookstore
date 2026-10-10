const express = require("express")
const userController = require("../controllers/userController")
const authMiddleware = require("../middlewares/authMiddleware")
const multerMiddleware = require("../middlewares/multerMiddleware")

//creating object for router class in express
const router =  new express.Router()

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//google login
router.post('/google-login',userController.googleLoginController)

//edit user
router.put('/user/:id',authMiddleware,multerMiddleware.single('picture'),userController.userEditController)





module.exports = router

