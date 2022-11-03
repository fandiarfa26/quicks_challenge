import React from 'react'
import MessageDateText from './MessageDateText'
import FromOtherBubble from './FromOtherBubble'
import FromYouBubble from './FromYouBubble'
import NewMessageText from './NewMessageText'
import NewMessageButton from './NewMessageButton'

const InboxMessages = ({messages, isGroup}) => {

  const loadMessages = () => {
    let list = []

    
    for (const message of messages) {
      list.push(<MessageDateText key={message.date_text} text={message.date_text}/>)
      
      for (const item of message.messages) {
        if (item.user === 'You') {
          list.push(<FromYouBubble key={item.id} item={item}/>)
        } else {
          if (item.is_new) {
            list.push(<NewMessageText key='new_message_text'/>)
            list.push(<NewMessageButton key='new_message_button'/>)
          }
          list.push(<FromOtherBubble key={item.id} item={item} isGroup={isGroup}/>)
        }
      }
    }

    return list
  }

  return (
    <div className='relative flex-1 w-full px-8 py-3 overflow-y-auto'>
      {loadMessages()}
    </div>
  )
}

export default InboxMessages