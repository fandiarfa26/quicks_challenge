import React from 'react'

const InboxAvatar = ({title}) => {
  return (
    <div className='bg-primary avatar'>
      <span className="font-bold text-white">{title.charAt(0).toUpperCase()}</span>
    </div>
  )
}

export default InboxAvatar