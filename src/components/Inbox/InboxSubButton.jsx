import React, { useState } from 'react'
import {useRecoilValue, useRecoilState} from 'recoil'
import { quicksOpen, quicksActive } from '../../quick_recoil'
import {MdOutlineQuestionAnswer} from 'react-icons/md'

const InboxSubButton = () => {
  const isQuicksOpen = useRecoilValue(quicksOpen)
  const [currentActive, setCurrentActive] = useRecoilState(quicksActive)
  const [labelShow, setLabelShow] = useState(false)

  let classList = ''

  if (isQuicksOpen) {
    if (currentActive === 'inbox') {
      classList = 'z-10 bg-indicator-purple fab bottom-0 right-0'
    }else {
      classList = 'bg-secondary-white fab-sm bottom-1 right-24'
    }
  } else {
    classList = 'bg-secondary-white fab-sm bottom-1 right-0'
  }

  return (
      <div 
        className={`absolute  transition-all ease-in-out ${classList}`}
        onMouseEnter={() => setLabelShow(true)} 
        onMouseLeave={() => setLabelShow(false)}
        onClick={() => setCurrentActive('inbox')}
        >
        <div className={`absolute text-sm font-bold -top-6 text-secondary-white ${labelShow ? '' : 'hidden'}`}>Inbox</div>
        <MdOutlineQuestionAnswer className={`w-6 h-6 ${currentActive === 'inbox' ? 'text-white' : 'text-indicator-purple'}`}/>
      </div>
  )
}

export default InboxSubButton