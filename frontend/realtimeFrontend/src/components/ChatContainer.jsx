import React,{useState,useEffect,useRef} from 'react'
import Logout from './Logout'
import ChatInput from './ChatInput'
import axios from 'axios'
import {v4 as uuidv4} from "uuid" 
import { addMessageRoute, getAllMessagesRoute } from '../utils/APIRoutes'
function ChatContainer({currentChat,currentUser,socket}) {
    const [currentContactName, setCurrentContactName] = useState(undefined)
    const [currentContactImage, setCurrentContactImage] = useState(undefined)
    const [messages,setMessages] = useState([])
    const [arrivalMessage,setArrivalMessage] = useState(null)
    const scrollRef = useRef()
    useEffect(()=>{
        if(currentChat){
            setCurrentContactImage(currentChat.avatarImage)
            setCurrentContactName(currentChat.username)
        }
    },[currentChat])

    useEffect(()=>{
        const fetching = async()=>{
            if(currentChat){
            const response = await axios.post(getAllMessagesRoute,{
                from: currentUser._id,
                to: currentChat._id
            })
            // console.log(response.data)
            setMessages(response.data)
        }
        }
        fetching()
    },[currentChat])

    const handleSendMsg = async(msg)=>{
        await axios.post(addMessageRoute,{
            from: currentUser._id,
            to: currentChat._id,
            message: msg,
        })
        socket.current.emit("send-msg",{
            to: currentChat._id,
            from: currentUser._id,
            message: msg,
        })
        const msgs = [...messages]
        msgs.push({fromSelf: true,message: msg})
        setMessages(msgs)
    }
    useEffect(()=>{
        if(socket.current){
            socket.current.on("msg-recieve",(msg)=>{
                setArrivalMessage({fromSelf: false,message: msg})
            })
        }
    },[])

    useEffect(()=>{
        arrivalMessage&& setMessages((prev)=>[...prev,arrivalMessage])
    },[arrivalMessage])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behaviour: "smooth"})
    },[messages])
  return (
    //three sections
    //chat header
    //chat message /input 
    //functionality to send a message 
    <>
    {currentContactImage && currentContactName&&
    <div className='w-[60%] md:w-[70%] ml-5 backdrop-blur-[15px] bg-gray-900 bg-opacity-30  rounded-2xl flex flex-col justify-between'>
        {/* chat header */}
        <div className='mt-3 flex mr-2 md:ml-2 justify-between '>
            <div className='flex flex-row'>
                <img src={`data:image/svg+xml;base64,${currentContactImage}`} alt="" className='rounded-full w-10 cursor-pointer border-4 border-[#131324] md:w-20' />
                <div className='text-sm md:ml-2 mt-2 md:text-2xl md:mt-6'>{currentContactName}</div>
            </div>
            <Logout/>
        </div>
        <div className='flex flex-col px-2 py-1 overflow-auto gap-4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-[#ffffff34] scrollbar-track-gray-700 scrollbar-thin '>
            {
                messages.map((message)=>{
                    return (
                        <div ref={scrollRef} key={uuidv4()}>
                            {/* {console.log(message.message)} */}
                            <div className = {`flex flex-row items-center ${message.fromSelf?"justify-end":" justify-start"}`}>
                                <div className={`break-words px-3 py-1.5 md:px-3.5 md:py-2.5 rounded-2xl text-sm md:text-lg text-[#d1d1d1] ${message.fromSelf?" bg-[#4f04ff21]":"bg-[#9900ff20]"}`}>
                                    <p>
                                        {message.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>


        <ChatInput handleSendMsg = {handleSendMsg} />
    </div>
    }
    </>

  )
}

export default ChatContainer