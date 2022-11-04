import React from 'react'
import {MdMoreHoriz} from 'react-icons/md'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { inboxDetailData, messageIsEditOrReply, messageMoreHorizOpenId, messageText } from '../../../quick_recoil'

const MoreHorizButton = ({messageItem}) => {
  const [showId, setShowId] = useRecoilState(messageMoreHorizOpenId)
  const [data, setData] = useRecoilState(inboxDetailData)
  const setIsEditOrReply = useSetRecoilState(messageIsEditOrReply)
  const setInputText = useSetRecoilState(messageText)

  const handleShare = () => {
    // share message
    alert('share message')
    setShowId('')
  }

  const handleReply = () => {
    // reply message
    setIsEditOrReply({
      id: messageItem.id,
      user: messageItem.user,
      text: messageItem.text,
      type: 'reply', // edit or reply
      status: true,
    })
    setShowId('')
  }

  const handleEdit = () => {
    // edit message
    setIsEditOrReply({
      id: messageItem.id,
      user: messageItem.user,
      text: messageItem.text,
      type: 'edit', // edit or reply
      status: true,
    })
    setInputText(messageItem.text)
    setShowId('')
  }

  const handleDelete = () => {
    // delete message
    let newData = {...data}

    let messages_by_date = [...data.messages_by_date]
    newData.messages_by_date = messages_by_date.map(obj => {
      return {...obj, messages: obj.messages.filter(msg => msg.id !== messageItem.id)}
    })

    setData(newData)
    setShowId('')
  }

  const handleShow = () => {
    if (showId === messageItem.id) {
      setShowId('')
    } else {
      setShowId(messageItem.id)
    }
  }

  
  return (
    <div className='relative'>
      <a href="#!" onClick={handleShow}>
        <MdMoreHoriz className='w-4 h-4'/>
      </a>
      <div className={`z-20 absolute py-1 flex flex-col w-24 bg-white shadow divide-y divide-secondary-light rounded border border-secondary ${showId === messageItem.id ? '':'hidden'}`}>
        <a href="#!" onClick={handleShare} className='px-3 py-1 text-primary hover:bg-gray-50'>Share</a>
        <a href="#!" onClick={handleReply} className='px-3 py-1 text-primary hover:bg-gray-50'>Reply</a>
        { messageItem.user === 'You' && [
          <a href="#!" key='edit' onClick={handleEdit} className='px-3 py-1 text-primary hover:bg-gray-50'>Edit</a>,
          <a href="#!" key='delete' onClick={handleDelete} className='px-3 py-1 text-indicator-red hover:bg-gray-50'>Delete</a>
        ]}
      </div>
    </div>
  )
}

export default MoreHorizButton