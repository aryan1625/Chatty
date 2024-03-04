import React, { useEffect,useState } from 'react'
import Buffer from 'buffer'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { setAvatarRoute } from '../utils/APIRoutes'


export default function SetAvatar() {
  const [showLoader,setShowLoader] = useState(true)
  const navigate = useNavigate()
  const [avatars,setAvatars] = useState([])
  const [selectedAvatar,setSelectedAvatar] = useState(undefined)
  const toastOptions =
      {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      }

useEffect(
  ()=>{
  const localy = async()=>{
  if(!localStorage.getItem('chat-app-user')){
    navigate('/login');
  }
}
localy();
},[])
const setProfilePicture = async()=>{
  // console.log(selectedAvatar)
  if(selectedAvatar === undefined){
    toast.error("Please select an Avatar!",toastOptions)
  }
  else{
    // console.log(localStorage.getItem('chat-app-user'))
    const user = await JSON.parse(localStorage.getItem("chat-app-user"))
    const {data} = await axios.post(`${setAvatarRoute}/${user._id}`,{
      image: avatars[selectedAvatar]
    })
    if(data.isSet){
      // console.log("hello")
      user.isAvatarImageSet = true;
      user.avatarImage = data.image;
      localStorage.setItem("chat-app-user",JSON.stringify(user));
      navigate('/');
    }else{
      toast.error("Error setting Avatar! Please try again!",toastOptions)
    }
  }
}
const api = "https:/api.multiavatar.com/123489"

useEffect(()=>{
      const fetchData = async()=>{
        try {
          const data = [];
          for(let i=0;i<4;i++){
            //api call to the images api 
            const response = await axios.get(`${api}/${Math.floor(Math.random()*1000)}`)
            // const blob = response.data
            const blob = new Blob([response.data], { type: 'image/png' })
            const reader = new FileReader()
            reader.onload=()=>{
              const base64String = reader.result.split(',')[1]
              data.push(base64String)
              if (data.length === 4) {
                setAvatars(data);
                setShowLoader(false);
              }
            }
          reader.readAsDataURL(blob);
        }
        } catch (error) {
          console.error("Error fetching data...",error)
        }
    }
    
  fetchData() 
},[])

  return (
    <div className='bg-[#131324] w-full h-screen overflow-x-hidden '>
        {showLoader?(<img src='loader.gif' className='mx-auto w-[50%] my-auto'/>):
        (<div className='flex flex-col text-white mx-auto mt-28'>
            <div className='text-center font-bold md:text-2xl'>Pick an Avatar as your profile picture</div>
            <div className='flex flex-col mx-auto gap-y-3 mt-10 justify-between md:flex-row md:gap-y-0 md:gap-x-8 md:mt-16'>
              {avatars.map((avatar,index)=>{
                return (
                  <a href="#" className='focus:outline-none rounded-full focus:ring-4 focus:ring-[#4e0eff]' key={index}>
                  <img className='rounded-full w-16 cursor-pointer border-4 border-[#131324] md:w-32' src={`data:image/svg+xml;base64,${avatar}`} alt='Logo' onClick={()=>
                    setSelectedAvatar(index)
                  }></img>
                </a>
                )
              })}
                 {/* <a href="#" className='focus:outline-none rounded-full focus:ring-4 focus:ring-[#4e0eff]'>
                  <img className='rounded-full w-16 cursor-pointer border-4 border-[#131324] md:w-32' src={`${api}/${num}`} alt='Logo'></img>
                </a>
                <a href="#" className='focus:outline-none rounded-full focus:ring-4 focus:ring-[#4e0eff]'>
                  <img className='rounded-full w-16 cursor-pointer border-4 border-[#131324] md:w-32' src={`${api}/${num}`} alt='Logo'></img>
                </a>
                <a href="#" className='focus:outline-none rounded-full focus:ring-4 focus:ring-[#4e0eff]'>
                  <img className='rounded-full w-16 cursor-pointer border-4 border-[#131324] md:w-32' src={img3} alt='Logo'></img>
                </a>
                <a href="#" className='focus:outline-none rounded-full focus:ring-4 focus:ring-[#4e0eff]'>
                  <img className='rounded-full w-16 cursor-pointer border-4 border-[#131324] md:w-32' src={img4} alt='Logo'></img>
                </a> */}
            </div>
            <button type='submit' onClick={setProfilePicture} className='cursor-pointer bg-[#4e0eff] px-3 py-1.5 mt-10 hover:opacity-85 rounded-md w-44 mx-auto font-semibold md:mt-16'>Set as Profile Picture</button>

        </div>)
        }
        <ToastContainer/>
    </div>
  )
}
