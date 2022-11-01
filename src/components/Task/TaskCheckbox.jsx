import React from 'react'
import {MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox} from 'react-icons/md'

const TaskCheckbox = () => {
  return (
    <a href="#!" className='text-secondary hover:text-primary'>
      {/* <MdOutlineCheckBoxOutlineBlank className='w-6 h-6'/> */}
      <MdOutlineCheckBox className='w-6 h-6'/>
    </a>
  )
}

export default TaskCheckbox