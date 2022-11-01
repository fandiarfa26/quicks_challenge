import React from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'

const TaskSelect = () => {
  return (
    <div>
      <a href="#!" className='flex items-center gap-3 px-4 py-2 border rounded-[5px] border-secondary'>
          <span>My Task</span>
          <MdKeyboardArrowDown className='w-5 h-5'/>
          </a>
    </div>
  )
}

export default TaskSelect