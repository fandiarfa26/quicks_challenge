import React from 'react'
import InboxItem from './InboxItem'
import InboxListLoading from './InboxListLoading'

const InboxList = () => {
  let loading = false

  if (loading) {
    return <InboxListLoading/>
  }
  return (
    
    <div className="flex-1 px-8 pb-6 overflow-y-auto divide-y divide-secondary">
      <InboxItem/>
      <InboxItem/>
      <InboxItem/>
      <InboxItem/>
    </div>
  )
}

export default InboxList