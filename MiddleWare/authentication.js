
var UserSchema = require("../models/user");
const jwt = require("jsonwebtoken");

const express = require("express");

 function CreateJWTToken(id){
  console.log(process.env.JWT_SECRET_KEY);
  console.log("id",id)
  const token = jwt.sign(
    { id: id },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );
  // save user token
   return token;
} 


async function verifyToken (req, res) {

    console.log(req.headers.authorization);
    const bearerToken =req.headers.authorization;
    console.log("auth",req.headers.authorization);
    if(bearerToken){

      var bearer=bearerToken.split(" ")
      var token=bearer[1]
      let jwtSecretKey =  process.env.JWT_SECRET_KEY;

      if (!token) {
        return res.status(403).json({message:"A token is required for authentication"});
      }

    const decode = await jwt.verify(token, jwtSecretKey);
    const user = await UserSchema.findById(decode.id);

    if(user){
        console.log("user",user);
        let id=decode.id
        return id
      }else{
        return res.status(403).json({message:"user not found"});
      }
    }
    
 
  }

  module.exports = {verifyToken ,CreateJWTToken}