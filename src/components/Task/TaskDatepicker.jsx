import React from 'react'
import {MdCalendarToday} from 'react-icons/md'

const TaskDatepicker = () => {
  return (
    <div>
      <a href="#!" className="px-2 py-1 rounded-[5px] border border-secondary flex gap-10 items-center">
        <span>14/06/2021</span>
        <MdCalendarToday className="w-4 h-4 text-secondary-dark"/>
      </a>
    </div>
  )
}

export default TaskDatepicker