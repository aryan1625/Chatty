import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"
import {ToastContainer,toast} from "react-toastify"
import { useState } from 'react'
import "react-toastify/dist/ReactToastify.css"
import { loginRoute } from '../utils/APIRoutes'

function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const submitMe = async(e)=>{
      try {
        e.preventDefault()
        if(handleValidation()){
          console.log("validations ",loginRoute)
          const {data} = await axios.post(loginRoute,{username,password})
          if(data.status===false){
            toast.error(data.msg,toastOptions)
          }
          if(data.status===true){
            // console.log("it is true")
            localStorage.setItem('chat-app-user',JSON.stringify(data.user))
            navigate('/chat')
          }
        }

      } catch (error) {
        console.log(error)
      }

    }
    const toastOptions =
    {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    }
    const handleValidation = ()=>{
      if(username===""){
        toast.error("Username is required!!",toastOptions)
        return false;
      }
      else if(password===""){
        toast.error("Password is required!!",toastOptions)
        return false;
      }
      return true;
    }
  return (
    <div className='bg-[#131324] w-full h-screen overflow-x-hidden'>
      <div className='bg-black/75 w-[60%] mt-32 rounded-xl mx-auto my-auto flex flex-col text-white px-1 py-3'>
        <div className='flex justify-center mt-12 relative '>
            <img src="logo2.png" alt="" className='w-12 mr-2 md:w-28'/>
            <div className='text-3xl mt-1.5 md:text-5xl md:mt-6'>Chatty</div>
        </div>
        <input type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)} 
        placeholder='Username'
        className='rounded-lg mt-7 w-[75%] mx-auto bg-transparent border-2 border-indigo-700 py-2 pl-2 md:py-3 md:mt-16 '/>
        <input type="password"
        value={password}
        placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)} 
        className='rounded-lg mt-3 w-[75%] mx-auto bg-transparent border-2 border-indigo-700 py-2 pl-2 md:py-3 md:mt-5' />
        <button type = "submit" onClick={submitMe} className='cursor-pointer mt-5 text-sm w-[75%] mx-auto rounded-lg bg-purple-400 px-3 py-1 hover:opacity-80 transition-colors duration-500 ease-in-out hover:bg-indigo-700 md:mt-16 md:py-3 md:text-xl md:font-bold md:rounded-2xl'>LOGIN</button>
        <div className='mt-5 mx-auto w-[75%] text-center text-sm pb-5 md:mt-16'>DON'T HAVE AN ACCOUNT? <Link to="/register" className='text-indigo-700 cursor-pointer hover:text-indigo-500'>REGISTER</Link></div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login