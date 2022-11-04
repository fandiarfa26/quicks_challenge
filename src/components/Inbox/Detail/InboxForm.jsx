import React from 'react'
import { uid } from 'uid'
import { useRecoilState } from 'recoil'
import { inboxDetailData, messageIsEditOrReply, messageText,  } from '../../../quick_recoil'
import moment from 'moment/moment'
import EditReplyMessage from './EditReplyMessage'

const InboxForm = ({bottomRef}) => {
  const [text, setText] = useRecoilState(messageText)
  const [data, setData] = useRecoilState(inboxDetailData)
  const [isEditOrReply, setIsEditOrReply] = useRecoilState(messageIsEditOrReply)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim() === '') {
      alert('Please type a message!')
      setText('')
      return false
    }

    // update message
    if (isEditOrReply.type === 'edit' && isEditOrReply.status) {
      let newData = {...data}

      let messages_by_date = [...data.messages_by_date]
      newData.messages_by_date = messages_by_date.map(obj => {
        return {...obj, messages: obj.messages.map(message => {
          if (message.id === isEditOrReply.id) {
            return { ...message, text: text}
          }
          return message
        })}
      })

      setData(newData)
      setIsEditOrReply({...isEditOrReply, status: false})
      setText('')
      return false
    } 
    
    // insert message
    let messages_by_date = [...data.messages_by_date]
    const last = messages_by_date.at(-1)
    const nowDate = moment().format('MMMM DD, YYYY')
    
    const newMessage = {
      id: uid(),
      user: 'You',
      text: text,
      time: moment().format('HH:mm'),
      is_new: false,
    }

    if (isEditOrReply.type === 'reply' && isEditOrReply.status) {
      newMessage.reply_text = isEditOrReply.text
    }

    let newData = {...data}
    newData.has_read = true
    if (last.date_text === nowDate) {
      let messages = [...last.messages]
      messages.push(newMessage)
      
      newData.messages_by_date = messages_by_date.map(obj => {
        if (obj.date_text === nowDate) {
          return {...obj, messages: messages}
        }
        return obj
      })
    } else {
      messages_by_date.push({
        date_text: nowDate,
        messages: [newMessage]
      })
      newData.messages_by_date = messages_by_date
    }
    
    setData(newData)
    setIsEditOrReply({...isEditOrReply, status: false})
    setText('')
    setTimeout(function() {
      bottomRef.current.scrollIntoView({bottom: 0, behavior: 'smooth'});
    }, 100);
  }

  return (
    <div className={`px-8 pb-6 ${isEditOrReply.status ? '' : 'pt-3'}`}>
      
      <form action="#!" onSubmit={handleSubmit} className='flex items-end gap-3 '>
        <div className='flex-1'>
          {isEditOrReply.status && <EditReplyMessage/>}
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={`w-full border border-secondary  focus:ring-0 ${isEditOrReply.status ? 'rounded-b-[5px]' : 'rounded-[5px]'}`} placeholder='Type a new message'/>
        </div>
        <button type="submit" className="rounded-[5px] bg-primary text-white py-2 px-4 border border-primary">
          Send
        </button>
      </form>
    </div>
  )
}

export default InboxForm