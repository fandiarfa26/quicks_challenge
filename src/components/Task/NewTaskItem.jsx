import React from 'react'
import TaskCheckbox from './TaskCheckbox'
import TaskCollapseItemButton from './TaskCollapseItemButton'
import TaskMoreHoriz from './TaskMoreHoriz'
import {MdOutlineSchedule, MdOutlineEdit} from 'react-icons/md'
import TaskDatepicker from './TaskDatepicker'

const NewTaskItem = () => {
  return (
    <div className='py-[22px] flex gap-3 items-start'>
      <TaskCheckbox/>
      <div className='flex flex-col w-full'>
        <div className='flex items-start'>
          <div className='w-1/2'>
            <input type="text" className='rounded-[5px] border border-secondary w-full' placeholder='Type Task Title'/>
          </div>
          <div className='flex items-center justify-end w-1/2 gap-3'>
            <TaskCollapseItemButton/>
            <TaskMoreHoriz/>
          </div>
        </div>
        {/* Detail */}
        <div>
          <div className='flex items-center gap-4 mt-3'>
            <a href="#!">
              <MdOutlineSchedule className='w-5 h-5 text-secondary'/>
            </a>
            <TaskDatepicker/>
          </div>
          <div className='flex items-start gap-4 mt-3'>
            <a href="#!">
              <MdOutlineEdit className='w-5 h-5 text-secondary'/>
            </a>
            <div className="w-11/12">
              <span>No Description</span>
              <textarea className='rounded-[5px] border border-secondary w-full' rows="4" onChange={() => console.log()} value="No Description"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewTaskItem