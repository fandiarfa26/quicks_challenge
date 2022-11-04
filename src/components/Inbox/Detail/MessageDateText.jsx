import moment from 'moment'
import React from 'react'

const MessageDateText = ({text}) => {
  const isToday = () => {
    const now = moment().format('MMMM DD, YYYY')
    return now === text ? 'Today ' : ''
  }

  return (
    <div className='flex items-center gap-5'>
      <div className='flex-1 h-px bg-secondary-dark'></div>
      <div className='text-sm font-bold'>{isToday()}{text}</div>
      <div className='flex-1 h-px bg-secondary-dark'></div>
    </div>
  )
}

export default MessageDateText