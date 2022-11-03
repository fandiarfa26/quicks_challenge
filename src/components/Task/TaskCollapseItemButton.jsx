import React from 'react'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'

const TaskCollapseItemButton = (props) => {
  const handleClick = () => {
    props.setIsExpanded(!props.isExpanded)
  }

  return (
    <a href="#!" className='text-secondary' onClick={handleClick}>
      {
        props.isExpanded ? <MdKeyboardArrowUp className='w-6 h-6'/> : <MdKeyboardArrowDown className='w-6 h-6'/>
      }
    </a>
  )
}

export default TaskCollapseItemButton