
var UserSchema = require("../models/user");
const jwt = require("jsonwebtoken");

const express = require("express");

 function CreateJWTToken(id){
  console.log("id",id)
  const token = jwt.sign(
    { id: id },
    "OGIxZjQ1MWU4MWUzZDVjOTA0ZGJmODFkODc2OTE3OWJlZDUwMTIwNjE5MmMwNmVkN2E4YTQ3NzI0NjdlZTdjMA==",
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
      let jwtSecretKey = "OGIxZjQ1MWU4MWUzZDVjOTA0ZGJmODFkODc2OTE3OWJlZDUwMTIwNjE5MmMwNmVkN2E4YTQ3NzI0NjdlZTdjMA==";

      if (!token) {
        return res.status(403).json({message:"A token is required for authentication"});
      }

    const decode = await jwt.verify(token, jwtSecretKey);
      // console.log("-----------------------");
     console.log("decoded",decode);
    const user = await UserSchema.findById(decode.id);
    console.log("user",user);

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