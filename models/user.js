const mongoose =  require('mongoose')//mongodb file path import


//schema
User = mongoose.Schema;
 
userSchema = new User({
  name: String,
  email: String,
  password: String,
  country:String,
  image: Array
});
 
const user = mongoose.model('users', userSchema)
module.exports = user//export user schema with table name
