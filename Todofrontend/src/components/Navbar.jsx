import React from 'react'
import {useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate();
   
  return (
    <div>
    <div className=' w-[100%] flex justify-around bg-cyan-500 p-7 shadow-sm shadow-cyan-200'>
 <div>
    <button className='p-3 bg-pink-500 text-white rounded-md' onClick={()=>{navigate("/")}}>Add TASK</button>
 </div>
 <div>
    <button className='p-3 bg-pink-500 text-white rounded-md' onClick={()=>{navigate("/Alltask")}} >Go to the task</button>
 </div>
    </div>
    </div>
  )
}

export default Navbar