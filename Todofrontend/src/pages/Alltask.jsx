import React, { useEffect,useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Alltask = () => {
 const [datas,setdatas]=useState([]);
 const navigate =useNavigate();

 async function handledata (){
  let url=import.meta.env.VITE_URL;
  const {data}=await axios.get(url);
 console.log(data);
  setdatas(data);
 }
async function handledel(x){
  let url=import.meta.env.VITE_URL;
  const {data}=await axios.delete(url+"/"+x);
  console.log(data);
  if(data.deleted=="true"){
    handledata();
  }
  else {
    alert("something went wrong")
  }
}
async function handlestatus(x,y){
  let url=import.meta.env.VITE_URL;
  const {data}=await axios.put(url+"/status/"+x,{status:y});
  if(data.updated=="true"){
    handledata();
  }
}




useEffect(()=>{
handledata();
},[]);




  return (
    <>

    <div className='w-full justify-center flex m-10  '>
        <div className='sm:w-[80%] w-[97%] flex flex-wrap justify-center gap-7'>
{datas.map((e)=>{
  const id=e.id;
  const status=e.status;
  return(

<div className='w-[400px] bg-cyan-300 relative '>
  <div className=' absolute top-0 '>
    {status == "true" ? <>
    <input type="checkbox" checked={true} className='h-5 w-5' onChange={(e)=>{
      
      if(status=="true"){
       handlestatus(id,"false");
      
      }
      else{
       handlestatus(id,"true");
      
      }
     }}/>
    
    </>:<> <input type="checkbox" checked={false} className='h-5 w-5' onChange={(e)=>{
      
      if(status=="true"){
       handlestatus(id,"false");
      
      }
      else{
       handlestatus(id,"true");
      
      }
     }}/></>}



  </div>
        <div>
            <h1 className='bg-pink-300 text-center text-gray-600 text-2xl font-extrabold pt-3 pb-3'>{e.title}</h1>
        </div>
        <div className='w-[400px] bg-green-300 '>
        <p className='  text-slate-700 text-center pt-3 pb-3 h-40 overflow-hidden'>
           {e.discription}

        </p>
        </div>
        <div className='flex justify-center items-center '>
         <button className=' bg-yellow-500 text-white p-3 rounded-md m-2'>{e.duedate}</button>
        <button className=' bg-purple-500 text-white p-3 rounded-md m-2' onClick={()=>{
          let x="/edit/"+id;
          navigate(x);
        }}> EDIT</button>
        <button className=' bg-red-500 text-white p-3 rounded-md m-2' onClick={()=>{
        handledel(id);
        }}> DELETE</button>
        <button className=' bg-gray-500 text-white p-3 rounded-md m-2' > {status == "true" ? "Done" : "Pending"}</button>
        </div>
       </div>
  )
})}
       




        </div>



        </div>
        </>
  )
}

export default Alltask