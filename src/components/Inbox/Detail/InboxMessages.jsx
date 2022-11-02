import React from 'react'
import MessageDateText from './MessageDateText'
import FromOtherBubble from './FromOtherBubble'
import FromYouBubble from './FromYouBubble'
import NewMessageText from './NewMessageText'
import NewMessageButton from './NewMessageButton'

const InboxMessages = () => {
  

  return (
    <div className='relative flex-1 w-full px-8 py-3 overflow-y-auto'>
      <MessageDateText/>
      <FromOtherBubble/>
      <FromYouBubble/>
      <MessageDateText/>
      <FromOtherBubble/>
      <FromYouBubble/>
      <NewMessageText/>
        
      <NewMessageButton/>
      <FromOtherBubble/>
    </div>
  )
}

export default InboxMessages