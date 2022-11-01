import React from 'react'
import InboxList from './InboxList'
import InboxSearch from './InboxSearch'

const InboxBody = () => {
  return (
    <div className='flex flex-col max-h-full'>
      <InboxSearch/>
      <InboxList/>
    </div>
  )
}

export default InboxBody