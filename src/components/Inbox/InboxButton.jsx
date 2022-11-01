import React from 'react'
import {MdOutlineQuestionAnswer} from 'react-icons/md'
import CloseQuicksButton from '../CloseQuicksButton'

const InboxButton = () => {
  return (
    <CloseQuicksButton>
      <div className='bg-indicator-purple fab absolute left-[15px] z-10'>
        <MdOutlineQuestionAnswer className='w-6 h-6 text-white'/>
      </div>
    </CloseQuicksButton>
  )
}

export default InboxButton