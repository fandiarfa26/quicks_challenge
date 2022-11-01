import React from 'react'
import InboxItem from './InboxItem'
import loading from '../../assets/loading-gray.svg'

const InboxList = () => {
  return (
    
    <div className="flex-1 px-8 overflow-y-auto divide-y divide-secondary">
      <InboxItem/>
      <InboxItem/>
      <InboxItem/>
      <InboxItem/>
    </div>
  )
}

export default InboxList