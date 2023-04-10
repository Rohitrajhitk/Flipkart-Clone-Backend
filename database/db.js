import mongoose from "mongoose";

mongoose.set('strictQuery', false);
export const Connection = async (username , password) => {
  const URL= `mongodb+srv://${username}:rohit%40123@ecommerce.3kb4qfe.mongodb.net/?retryWrites=true&w=majority`;
  try{
    await mongoose.connect(URL,{useNewUrlParser:true });
    console.log("Successsfully connected to the database");
  }
  catch(error){
    console.log("Unable to connect to the database" , error.message);
  }
}
export default Connection;