import React from 'react'
import {MdArrowBack, MdClose} from 'react-icons/md'
import { useSetRecoilState } from 'recoil'
import { inboxOpen, quicksActive, quicksOpen } from '../../../quick_recoil'

const InboxTopbar = ({title, participants}) => {
  const setIsOpen = useSetRecoilState(quicksOpen)
  const setCurrentActive = useSetRecoilState(quicksActive)
  const setDetailInboxOpen = useSetRecoilState(inboxOpen)

  const handleBack = () => {
    setDetailInboxOpen(false)
  }

  const handleClose = () => {
    setCurrentActive('')
    setIsOpen(false)
    setDetailInboxOpen(false)
  }

  return (
    <div className='flex items-center gap-4 px-8 py-4 border-b border-secondary-light'>
      <a href="#!" onClick={handleBack}>
        <MdArrowBack className='w-5 h-5'/>
      </a>
      <div className='flex-1 w-full'>
        <div className=' text-primary'>{title}</div>
        {participants > 2 && <div className='mt-1 text-xs'>{`${participants} Participants`}</div>}
      </div>
      <a href="#!" onClick={handleClose}>
        <MdClose className='w-5 h-5'/>
      </a>
    </div>
  )
}

export default InboxTopbar