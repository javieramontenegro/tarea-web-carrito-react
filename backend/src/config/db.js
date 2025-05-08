import mongoose from "mongoose";
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("Base de datos MongoDB conectada...");
    }catch(error) {
        console.error("Error al conectar la base de datos");
    }  
    
};
export default connectDB;