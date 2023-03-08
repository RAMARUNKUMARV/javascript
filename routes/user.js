const router=require('express').Router()//import express

const user=require("../controller/user")//import blog controllers
const Login=require("../controller/login")//import blog controllers


//Api's
router.post('/user',user.createUser)
router.get('/user/:id',user.getUserById)
router.get('/user',user.getAllUser)
router.delete('/user/:id',user.deleteUser)
router.put('/user/:id',user.updateUser)
router.post('/login',Login.Login)
router.get('/current-user',user.CurrentUser)

module.exports=router//export router