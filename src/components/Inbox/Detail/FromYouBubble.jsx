import React from 'react'
import MoreHorizButton from './MoreHorizButton'

const FromYouBubble = ({item}) => {
  return (
    <div className='flex flex-col items-end gap-1 py-3'>
      <div className='text-xs font-bold text-chats-purple-dark'>You</div>
      <div className='flex items-start max-w-md gap-2'>
        <MoreHorizButton/>
        <div className='flex-1 p-3 text-xs rounded bg-chats-purple-light'>
          <div className='mb-2'>{item.text}</div> 
          <div>{item.time}</div>
        </div>
        
      </div>
    </div>
  )
}

export default FromYouBubble