
import express from "express";
import mongoose from "mongoose";
import task from "../models/Task.js"

export const sendalltask= async(req,res)=>{
const data=await task.find();
res.send(data);
}
export const sendonetask= async(req,res)=>{
   const {id}=req.params;
   
    try{
    const data =await task.findOne({id});
  
    if(data)
    res.send(data);
else  res.send("No data found");
    }
    catch(err){
  res.send("Something went wrong")
    }
}
export const addtask= async(req,res)=>{
const {title,discription,duedate}=req.body;
if(title=="" || discription=="" || duedate==""  ){
    res.send("Give proper info");
}
try{
let id=Math.random()*10000;
console.log(id);
const newtask= task({
id,title,discription,duedate,status:"false"
});
await newtask.save();
res.send("allok");
}
catch(err){
    res.send(err);
}

}
export const updatetask= async(req,res)=>{
    const {id}=req.params;
    const {title,discription,duedate}=req.body;
     
    try{
    const data =await task.findOneAndUpdate({id},{
        id,title,discription,duedate,status:"false"
    });
  
    if(data)
    res.send(
{
    updated:"true"
});

else  res.send("No data found");
    }
    catch(err){
  res.send("Something went wrong")
    }


}
export const deletetask= async(req,res)=>{



    const {id}=req.params;
    
     
    try{
    const data =await task.findOneAndDelete(id);
  
    if(data)
    res.send(
{
    deleted:"true"
});

else  res.send("No data found");
    }
    catch(err){
  res.send("Something went wrong")
    }
}
export const statusupdate=async (req,res)=>{
const {id}=req.params;
const {status}=req.body;
try{
    const data =await task.findOneAndUpdate({id},{
        status
    });
  
    if(data)
    res.send(
{
    updated:"true"
});

else  res.send("No data found");
}
catch(err){
    res.send("No data found");
}
}