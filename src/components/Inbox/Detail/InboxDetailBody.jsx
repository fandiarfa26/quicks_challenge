import React from 'react'
import InboxMessages from './InboxMessages'
import InboxForm from './InboxForm'
import InboxTopbar from './InboxTopbar'
import WaitConnectText from './WaitConnectText'

const InboxDetailBody = () => {
  return (
    <div className='flex flex-col h-full'>
      <InboxTopbar/>
      <InboxMessages/>
      <WaitConnectText/>
      <InboxForm/>
    </div>
  )
}

export default InboxDetailBody