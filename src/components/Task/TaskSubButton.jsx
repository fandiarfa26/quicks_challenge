import React, { useState } from 'react'
import {useRecoilValue, useRecoilState} from 'recoil'
import { quicksActive, quicksOpen } from '../../quick_recoil'
import {MdOutlineChromeReaderMode} from 'react-icons/md'

const TaskSubButton = () => {
  const isQuicksOpen = useRecoilValue(quicksOpen)
  const [currentActive, setCurrentActive] = useRecoilState(quicksActive)
  const [labelShow, setLabelShow] = useState(false)

  let classList = ''

  if (isQuicksOpen) {
    if (currentActive === 'task') {
      classList = 'z-10 order-first bg-indicator-orange fab'
    }else if(currentActive === '') {
      classList = 'order-2 bg-secondary-white fab-sm mr-8'
    }else {
      classList = 'order-1 bg-secondary-white fab-sm mr-8'
    }
  } else {
    classList = 'order-2 bg-secondary-white fab-sm translate-x-16 mr-1'
  }

  return (
    
      <div 
        className={`transition-all ease-in-out ${classList}`} 
        onMouseEnter={() => setLabelShow(true)} 
        onMouseLeave={() => setLabelShow(false)}
        onClick={() => setCurrentActive('task')}
        >
        <div className={`absolute text-sm font-bold -top-6 text-secondary-white ${labelShow ? '' : 'hidden'}`}>Task</div>
        <MdOutlineChromeReaderMode className={`w-6 h-6 ${currentActive == 'task' ? 'text-white' : 'text-indicator-orange'} `}/>
      </div>
  )
}

export default TaskSubButton