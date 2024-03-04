import React from 'react'

function Welcome({currentUser}) {
  return (
    <div className='flex flex-col gap-y-2 w-[65%] mx-auto my-auto'>
        <img src="bot.gif" className='mx-auto w-28 md:w-60' alt="" />
        <h1 className='mx-auto text-xl font-bold md:text-3xl'>Welcome <span className='text-blue-700 font-extrabold'>{currentUser&&currentUser.username?currentUser.username: 'Guest'}!</span></h1>
        <h2 className='mx-auto text-center text-base md:text-lg'>Please select a Person to chat with!</h2>

    </div>
  )
}

export default Welcome