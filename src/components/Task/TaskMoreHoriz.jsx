import React, { useState } from 'react'
import {MdMoreHoriz} from 'react-icons/md'

const TaskMoreHoriz = () => {
  const [isShow, setIsShow] = useState(false)

  const handleDelete = () => {
    // delete task
    setIsShow(false)
  }

  return (
    <div className='relative'>
      <a href="#!" onClick={() => setIsShow(!isShow)} className='text-secondary'>
          <MdMoreHoriz className='w-5 h-5'/>
        </a>
        <div className={`z-20 mt-1 right-0 absolute py-1 flex flex-col w-24 bg-white shadow rounded border border-secondary ${isShow ? '':'hidden'}`}>
        <a href="#!" onClick={handleDelete} className='px-3 py-1 text-indicator-red hover:bg-gray-50'>Delete</a>
      </div>
    </div>
  )
}

export default TaskMoreHoriz