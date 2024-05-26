import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Task = () => {
    const navigate =useNavigate();
    const [title,settitle]=useState("");
    const [discri,setdiscri]=useState("");
    const [date,setdate]=useState("");

    async function handleclick(){
        if(title=="" || discri=="" || date==""){
            alert("Fill data properly");
            return;
        }
        let url=import.meta.env.VITE_URL;
        const {data}=await axios.post(url,{title,discription:discri,duedate:date});
        console.log(data);
        if(data=="allok"){
          navigate("/Alltask");
        }
        else {
            alert("Try again");
        }
    };



    return (
    <div>
    <div className='mt-10 w-[100%] flex justify-center items-center'>
    <div className='flex  flex-col justify-center items-center border-4 sm:w-3/6 border-pink-200 p-10 bg-cyan-300 w-6/6' >
      <div className='sm:w-5/6 w-[98%]'>
        <input placeholder='Title' value={title} className='border-2 border-pink-300 m-3 p-5 w-full '
        onChange={(e)=>{
            settitle(e.target.value);
                    }} />
      </div>
      <div className='sm:w-5/6 w-[98%]'>
        <input placeholder='Discription' value={discri} className='border-2 border-pink-300 m-3 p-5 w-full' 
        onChange={(e)=>{
            setdiscri(e.target.value);
                    }}/>
      </div>
      <div className='sm:w-5/6 w-[98%]'>
        <input type="date" className='border-2 border-pink-300 m-3 p-5 w-full ' value={date} onChange={(e)=>{
     setdate(e.target.value);
        }} />
      </div>
      <div className='sm:w-5/6 w-[98%]'>
        <button  className='border-2 border-pink-300 m-3 p-5 w-full bg-pink-300 text-white' onClick={handleclick}> Add new task</button>
      </div>
    </div>

    </div>
    </div>
    )
}

export default Task