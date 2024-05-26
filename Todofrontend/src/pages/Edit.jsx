import React, { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
const Edit = () => {
    
    const [title,settitle]=useState("");
    const [discri,setdiscri]=useState("");
    const [date,setdate]=useState("");
     const {id}=useParams();
     const navigate =useNavigate()

    async function handledata(){
      let url=import.meta.env.VITE_URL;
  const {data}=await axios.get(url+"/"+id);
  if(data=="No data found"){
    alert("NO data to edit");
    navigate("/Alltask");
    return
  }
else{
  settitle(data.title);
  setdiscri(data.discription)
  setdate(data.duedate);
}
    };

async function handleclick(){
  let url=import.meta.env.VITE_URL;
  const {data}=await axios.put(url+"/"+id,{
    title,discription:discri,duedate:date
  });
  if(data.updated=="true"){
    navigate("/Alltask");
  }
 }

useEffect(()=>{
handledata();
},[]);


  return (
    <div className='m-10 w-full flex justify-center items-center'>
    <div className='flex  flex-col justify-center items-center border-4 sm:w-3/6 border-pink-200 p-10 bg-cyan-300' >
      <div className='sm:w-5/6'>
        <input placeholder='Title' value={title} className='border-2 border-pink-300 m-3 p-5 w-full '
        onChange={(e)=>{
            settitle(e.target.value);
                    }} />
      </div>
      <div className='sm:w-5/6'>
        <input placeholder='Discription' value={discri} className='border-2 border-pink-300 m-3 p-5 w-full' 
        onChange={(e)=>{
            setdiscri(e.target.value);
                    }}/>
      </div>
      <div className='sm:w-5/6'>
        <input type="date" className='border-2 border-pink-300 m-3 p-5 w-full ' value={date} onChange={(e)=>{
setdate(e.target.value);
        }} />
      </div>
      <div className='sm:w-5/6'>
        <button  className='border-2 border-pink-300 m-3 p-5 w-full bg-pink-300 text-white' onClick={handleclick}> Edit it</button>
      </div>
    </div>


    </div>
  )
}

export default Edit