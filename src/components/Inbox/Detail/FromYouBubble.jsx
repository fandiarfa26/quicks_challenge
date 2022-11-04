import React from 'react'
import MoreHorizButton from './MoreHorizButton'

const FromYouBubble = ({item}) => {
  return (
    <div className='flex flex-col items-end gap-1 py-3'>
      <div className='text-sm font-bold text-chats-purple-dark'>You</div>
      {item.reply_text !== undefined && <div className='max-w-lg p-3 text-sm border rounded bg-secondary-white border-secondary'>{item.reply_text}</div>}
      <div className='flex items-start max-w-lg gap-2'>
        <MoreHorizButton messageItem={item}/>
        <div className='flex-1 p-3 rounded bg-chats-purple-light'>
          <div className='mb-2 text-sm'>{item.text}</div> 
          <div className='text-xs'>{item.time}</div>
        </div>
        
      </div>
    </div>
  )
}

export default FromYouBubble