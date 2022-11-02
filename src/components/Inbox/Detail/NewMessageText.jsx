import React from 'react'

const NewMessageText = () => {

  return (
    <div id="new-message-text" className='absolute inset-x-0 z-10 flex items-center w-full gap-5 px-8 py-2 bg-white'>
      <div className='flex-1 h-px bg-indicator-red'></div>
      <div className='text-sm font-bold text-indicator-red'>New Message</div>
      <div className='flex-1 h-px bg-indicator-red'></div>
    </div>
  )
}

export default NewMessageText