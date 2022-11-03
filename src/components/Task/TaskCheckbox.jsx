import React from 'react'
import {MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox} from 'react-icons/md'

const TaskCheckbox = (props) => {
  const handleClick = () => {
    // check/uncheck
    props.setIsChecked(!props.isChecked)
  }

  return (
    <a href="#!" onClick={handleClick} className='text-secondary hover:text-primary'>
      {
        props.isChecked ? <MdOutlineCheckBox className='w-6 h-6'/> : <MdOutlineCheckBoxOutlineBlank className='w-6 h-6'/>
      }
    </a>
  )
}

export default TaskCheckbox