import React from 'react'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'

const TaskCollapseItemButton = () => {
  return (
    <a href="#!" className='text-secondary '>
      <MdKeyboardArrowUp className='w-6 h-6'/>
      {/* <MdKeyboardArrowDown className='w-6 h-6'/> */}
    </a>
  )
}

export default TaskCollapseItemButton