const userSchema = require('../models/user')
const JWT = require('../MiddleWare/authentication')


async function Login (req,res) {
    console.log("email",req.body.email);
    console.log("password",req.body.password);
    let user = await userSchema.findOne({email:req.body.email,password:req.body.password});

   try{
    if (user){
    let token =   JWT.CreateJWTToken(user.id)
    return res.status(200).json({ 
        message: token
    });
    }
    }
     catch (err) {
        res.status(500).json({ message: err.message });
      }
}

module.exports={Login}//export api's