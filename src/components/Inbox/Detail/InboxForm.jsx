import React, { useState } from 'react'
import { uid } from 'uid'
import { useRecoilState } from 'recoil'
import { inboxDetailData } from '../../../quick_recoil'
import moment from 'moment/moment'

const InboxForm = ({bottomRef}) => {
  const [text, setText] = useState('')
  const [data, setData] = useRecoilState(inboxDetailData)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim() === '') {
      alert('Please type a message!')
      setText('')
      return false
    }
    
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
    setText('')
    setTimeout(function() {
      bottomRef.current.scrollIntoView({bottom: 0, behavior: 'smooth'});
    }, 100);
  }

  return (
    <div className='px-8 pt-3 pb-6 bg-white rounded'>
      <form action="#!" onSubmit={handleSubmit} className='flex items-center gap-3'>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='flex-1 border border-secondary rounded-[5px] focus:ring-0' placeholder='Type a new message'/>
        <button type="submit" className="rounded-[5px] bg-primary text-white py-2 px-4">
          Send
        </button>
      </form>
    </div>
  )
}

export default InboxForm