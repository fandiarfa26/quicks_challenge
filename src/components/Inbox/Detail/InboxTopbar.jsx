import React from 'react'
import {MdArrowBack, MdClose} from 'react-icons/md'
import { useSetRecoilState } from 'recoil'
import { inboxOpen } from '../../../quick_recoil'

const InboxTopbar = () => {
  const setDetailInboxOpen = useSetRecoilState(inboxOpen)

  const handleClose = () => {
    setDetailInboxOpen(false)
  }
  return (
    <div className='flex items-center gap-4 px-8 py-4 border-b border-secondary-light'>
      <a href="#!" onClick={handleClose}>
        <MdArrowBack className='w-5 h-5'/>
      </a>
      <div className='flex-1 w-full'>
        <div className=' text-primary'>I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</div>
        <div className='mt-1 text-xs'>3 Participants</div>
      </div>
      <a href="#!" onClick={handleClose}>
        <MdClose className='w-5 h-5'/>
      </a>
    </div>
  )
}

export default InboxTopbar