import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  phone: String,
});
const User = new mongoose.model('user',userSchema);
export default User;