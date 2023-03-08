 
const userSchema = require('../models/user')
const JWT = require('../MiddleWare/authentication')

//create User
async function createUser (req, res) {
let user = await userSchema.findOne({email:req.body.email});
try {
    if(user){
    return res.status(500).json({ error: "email already exits" });
    }else{
      const blog = await userSchema.create(req.body);
      return res.json({ data: blog, status: "success" });
    } 
 }
 catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


//get all users
async function getAllUser (req, res) {
    //try will execute successful
  try {
    const blogs = await userSchema.find();
    res.json({ data: blogs, status: "success" });
  } 
  
  // catch will return error
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 

 
//get user by id
async function getUserById (req, res) {
  try {
    const blog = await userSchema.findById(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 

//update user
async function  updateUser  (req, res)  {
  try {
    const blog = await userSchema.updateOne(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 

//delete user
async function deleteUser (req, res) {
  try {
    const blog = await userSchema.deleteOne(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

async function CurrentUser(req,res){

    let userID = await JWT.verifyToken(req,res)
   return res.status(200).json({ message: userID });
   
}

module.exports={createUser,updateUser,getAllUser,getUserById,deleteUser,CurrentUser}//export api's