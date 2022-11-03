import React, { useState } from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'

const TaskSelect = () => {
  const [isShow, setIsShow] = useState(false)

  const handleChoose = () => {
    // choose
    setIsShow(false)
  }

  return (
    <div className='relative'>
      <a href="#!" onClick={() => setIsShow(!isShow)} className='flex items-center gap-3 px-4 py-2 border rounded-[5px] border-secondary'>
          <span>My Task</span>
          <MdKeyboardArrowDown className='w-5 h-5'/>
      </a>
      <div className={`mt-2 z-20 absolute py-1 flex flex-col w-48 bg-white shadow divide-y divide-secondary-light rounded border border-secondary ${isShow ? '':'hidden'}`}>
        <a href="#!" onClick={handleChoose} className='px-3 py-1 hover:bg-gray-50'>Personal Errands</a>
        <a href="#!" onClick={handleChoose} className='px-3 py-1 hover:bg-gray-50'>Urgent To-Do</a>
      </div>
    </div>
  )
}

export default TaskSelect