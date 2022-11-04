import React from 'react'
import {MdClose} from 'react-icons/md'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { messageIsEditOrReply, messageText } from '../../../quick_recoil'

const EditReplyMessage = () => {
  const [isEditOrReply, setIsEditOrReply] = useRecoilState(messageIsEditOrReply)
  const setMessageText = useSetRecoilState(messageText)

  const handleClose = () => {
    setIsEditOrReply({...isEditOrReply, status: false})
    setMessageText('')
  }

  return (
    <div className='flex items-start w-full gap-3 p-3 border border-b-0 rounded-t-[5px] bg-secondary-white border-secondary text-secondary-dark'>
      <div className='flex flex-col flex-1 gap-2'>
        <div className='text-sm font-bold'>{isEditOrReply.type === 'edit' ? 'Edit Message' : `Replying to ${isEditOrReply.user}`}</div>
        <div className='text-sm'>{isEditOrReply.text}</div>
      </div>
      <a href="#!" onClick={handleClose}>
        <MdClose className='w-5 h-5'/>
      </a>
    </div>
  )
}

export default EditReplyMessage