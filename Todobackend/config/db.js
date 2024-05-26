import mongoose from "mongoose";
const dbconnect=async ()=>{
try{
    const conn=await mongoose.connect("mongodb+srv://harshupadhyay7786:mnbvcxz@cluster0.ypptwdf.mongodb.net/todo",{
    })
    console.log('MongoDB connected',conn.connection.host)
}
catch(e){
    process.exit(1);
}
}
export default dbconnect;