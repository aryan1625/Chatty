import React, { useEffect, useState } from 'react'
function Contacts({contacts,currentUser,changeChat}) {
  const [currentUserName, setCurrentUserName] = useState(undefined)
  const [currentUserImage, setCurrentUserImage] = useState(undefined)
  const [currentSelected,setCurrentSelected] = useState(undefined)
  useEffect(()=>{
    if(currentUser){
      setCurrentUserImage(currentUser.avatarImage)
      setCurrentUserName(currentUser.username)
    }
  },[currentUser])
  const changeCurrentChat = (index,contact)=>{
    setCurrentSelected(index);
    changeChat(contact);
  }
  return (
    <>
    {currentUserImage&& currentUserName&&
    <div className='flex flex-col justify-around h-full'>
      <div className='flex justify-center mt-3 relative '>
            <img src="logo2.png" alt="" className='w-10 mr-2 md:w-16'/>
            <div className='text-sm truncate mt-1.5 md:text-2xl md:mt-6'>Chatty</div>
        </div>
        <div className='flex flex-col mt-2 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-[#ffffff34] scrollbar-track-gray-700 scrollbar-thin h-44 grow py-2 gap-y-2 md:h-80 '>
          {contacts.map((contact,index)=>{
            return (
              <div className={`rounded-lg mx-2 cursor-pointer flex ${index===currentSelected? 'bg-purple-500 ' : 'bg-[#ffffff34] hover:bg-purple-800'}  text-white px-1 py-1 md:px-3`} key={index} onClick={()=>{changeCurrentChat(index,contact)}}>
                <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="" className='rounded-full w-8 cursor-pointer border-4 border-[#131324] md:w-16' />
                <div className='text-sm truncate ml-1 mt-2 md:text-2xl md:mt-4 md:ml-2'>{contact.username}</div>
              </div>
            )
          })}
        </div>
        <div className='flex justify-around mx-4 mt-3 relative'>
            <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="" className='rounded-full w-10 cursor-pointer border-4 border-[#131324] md:w-20' />
            <div className='text-lg truncate mt-1.5 md:text-2xl md:mt-6'>{currentUserName}</div>
        </div>
      
    </div>
    }
    </>
  )
}

export default Contacts