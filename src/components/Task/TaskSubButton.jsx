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
      classList = 'z-10 bg-indicator-orange fab bottom-0 right-0'
    }else if(currentActive === '') {
      classList = 'bg-secondary-white fab-sm bottom-1 right-48'
    }else {
      classList = 'bg-secondary-white fab-sm bottom-1 right-24'
    }
  } else {
    classList = 'bg-secondary-white fab-sm bottom-1 right-0'
  }

  return (
    
      <div 
        className={`absolute  duration-500  transition-all ease-in-out ${classList}`} 
        onMouseEnter={() => setLabelShow(true)} 
        onMouseLeave={() => setLabelShow(false)}
        onClick={() => setCurrentActive('task')}
        >
        <div className={`absolute text-sm font-bold -top-6 text-secondary-white ${labelShow && currentActive !== 'task' ? '' : 'hidden'}`}>Task</div>
        <MdOutlineChromeReaderMode className={`w-6 h-6 ${currentActive === 'task' ? 'text-white' : 'text-indicator-orange'} `}/>
      </div>
  )
}

export default TaskSubButton