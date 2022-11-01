import React from 'react'

const NewMessageText = () => {
  return (
    <div className='flex items-center gap-5'>
      <div className='flex-1 h-px bg-indicator-red'></div>
      <div className='text-sm font-bold text-indicator-red'>New Message</div>
      <div className='flex-1 h-px bg-indicator-red'></div>
    </div>
  )
}

export default NewMessageText