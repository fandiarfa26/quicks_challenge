import React from 'react'

const MessageDateText = ({text}) => {
  return (
    <div className='flex items-center gap-5'>
      <div className='flex-1 h-px bg-secondary-dark'></div>
      <div className='text-sm font-bold'>{text}</div>
      <div className='flex-1 h-px bg-secondary-dark'></div>
    </div>
  )
}

export default MessageDateText