import React from 'react'
import MoreHorizButton from './MoreHorizButton'


const FromOtherBubble = () => {
  return (
    <div className='flex flex-col items-start gap-1 py-3'>
      <div className='text-xs font-bold text-chats-orange-dark'>Mary Hilda</div>
      <div className='flex items-start max-w-md gap-2'>
        <div className='flex-1 p-3 text-xs rounded bg-chats-orange-light'>
          <div className='mb-2'>Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.</div> 
          <div>19:32</div>
        </div>
        <MoreHorizButton/>
      </div>
    </div>
  )
}

export default FromOtherBubble