import React from 'react'
import {MdOutlineChromeReaderMode} from 'react-icons/md'
import CloseQuicksButton from '../CloseQuicksButton'

const TaskButton = () => {
  return (
    <CloseQuicksButton>
      <div className='bg-indicator-orange fab absolute left-[15px] z-10'>
        <MdOutlineChromeReaderMode className='w-6 h-6 text-white'/>
      </div>
    </CloseQuicksButton>
    
  )
}

export default TaskButton