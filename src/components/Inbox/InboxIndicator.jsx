import React from 'react'

const InboxIndicator = ({hasRead}) => {
  return (
    <div className={`w-2.5 h-2.5 rounded-full ${hasRead ? 'invisible' : 'bg-indicator-red'} `}></div>
  )
}

export default InboxIndicator