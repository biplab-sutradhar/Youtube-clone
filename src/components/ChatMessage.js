import React from 'react'
import { FaUserCircle } from 'react-icons/fa';


const ChatMessage = ({_,name, message}) => {
  return (
    
       <div className='flex items-start py-1'>
      <div className=' text-lg my-1 mx-2'><FaUserCircle/></div>
      <span className=' text-sm'>
        <span className='font-medium mr-1'>{name}</span>
        <span>{message}</span>
      </span>
      </div>
     
  )
}

export default ChatMessage
