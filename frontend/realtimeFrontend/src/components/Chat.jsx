import React from 'react'
import { useEffect,useState,useRef } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import { allUsersRoute,host } from '../utils/APIRoutes';
import Contacts from './Contacts';
import Welcome from './Welcome'
import ChatContainer from './ChatContainer';
import {io} from "socket.io-client"

function Chat() {
    const socket = useRef()
    const navigate = useNavigate()
    const [contacts,setContacts] = useState([]);
    const [currentUser,setCurrentUser] = useState(undefined);   
    const [currentChat,setCurrentChat] = useState(undefined);
    const [isLoaded,setIsLoaded] = useState(false)

    useEffect(()=>{
        const fetching = async()=>{
            if(!localStorage.getItem("chat-app-user")){
                navigate('/login')
            }else{
                setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")))
                setIsLoaded(true)
            }
        }
        fetching()
    },[])
    useEffect(()=>{
        const fetching = async()=>{
            if(currentUser){
                if(currentUser.isAvatarImageSet){
                    const data = await axios.get(`${allUsersRoute}/${currentUser._id}`)
                    setContacts(data.data)
                }
                else{
                    navigate('/setAvatar')
                }
            }
        }
        fetching()
    },[currentUser])
    const handleChatChange = (chat)=>{
        setCurrentChat(chat)
    }
    useEffect(()=>{
        if(currentUser){
            socket.current = io(host)
            socket.current.emit("add-user", currentUser._id)
        }
    },[currentUser])
  return (
    <div className='bg-[#131324] w-full h-screen overflow-x-hidden'>
        <div className='bg-black/75 w-[90%] h-[85%] mt-10 rounded-xl mx-auto flex text-white px-1 py-3 md:h-[100%]'>
            <div className='ml-5 w-[35%] md:w-[25%] backdrop-blur-[15px] bg-gray-700 bg-opacity-30  rounded-2xl'>
                <Contacts contacts={contacts} currentUser = {currentUser} changeChat = {handleChatChange}/>
                {/* {console.log(currentChat)} */}
            </div>
            {(isLoaded&&currentChat===undefined)?
            <Welcome currentUser={currentUser}/>:
            <ChatContainer currentChat={currentChat} currentUser = {currentUser} socket = {socket}/>}
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Chat