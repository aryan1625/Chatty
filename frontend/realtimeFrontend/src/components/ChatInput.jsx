import React,{useState} from 'react'
import Picker from 'emoji-picker-react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
function ChatInput({handleSendMsg}) {
  const [showEmojiPicker,setShowEmojiPicker] = useState(false);
  const [msg,setMsg] = useState("");
  const handleEmojiPickerHideShow = (e)=>{
  //   // if(showEmojiPicker){
  //   //   setShowEmojiPicker(false)
  //   // }
  //   // else{
  //   //   setShowEmojiPicker(true)
  //   // }
  //   setShowEmojiPicker((prev)=>!prev)
  setShowEmojiPicker((prev)=>!prev)
  }
  const handleEmojiClick = (emojiObj,event)=>{
    let message = msg;
    message += emojiObj.emoji;
    setMsg(message)
  }

  const sendMsg = (e)=>{
    e.preventDefault()
    if(msg.length>0){
      handleSendMsg(msg);
      setMsg('')
    }

  }
  return (
    <div className='flex flex-col relative '>
        {showEmojiPicker&&<Picker className='absolute' height={300} width="100%" onEmojiClick={handleEmojiClick} theme='dark'/>}
        <div className='grid grid-cols-12 relative'>
        <IconButton className='mx-auto mr-3 mt-1.5' onClick={handleEmojiPickerHideShow}>
          <InsertEmoticonIcon className='cursor-pointer text-purple-400 '/>
        </IconButton>
        <div className='bg-[#ffffff34] col-span-11 flex justify-between rounded-3xl'>
            {/* <input className='grow'/> */}
            <textarea className=' overflow-y-auto resize-none bg-transparent rounded-3xl grow outline-none px-3 pt-2 min-h-5 max-h-10 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-[#ffffff34] scrollbar-track-gray-700 scrollbar-thin' placeholder='type your message here' value={msg}
            onChange={(e)=>setMsg(e.target.value)}
            />
            <button className='bg-purple-400 w-16 h-10 rounded-full text-white hover:opacity-80 hover:bg-indigo-700' onClick={(e)=>sendMsg(e)}>
                <SendIcon/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default ChatInput