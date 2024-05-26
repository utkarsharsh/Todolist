import mongoose from "mongoose";
const tasks= new mongoose.Schema({
    id:{
type:Number,
require:true
    },
title:{
    type:String,
    require:true
},
discription:{
    type:String,
    require:true
},
duedate:{
    type:String,
    require:true
}
,status:{
    type:String
}
});
export default  mongoose.model("task",tasks);