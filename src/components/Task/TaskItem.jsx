import React from 'react'
import TaskCheckbox from './TaskCheckbox'
import TaskCollapseItemButton from './TaskCollapseItemButton'
import TaskMoreHoriz from './TaskMoreHoriz'
import {MdOutlineSchedule, MdOutlineEdit} from 'react-icons/md'
import TaskDatepicker from './TaskDatepicker'

const TaskItem = () => {
  return (
    <div className='py-[22px] flex gap-3 items-start'>
      <TaskCheckbox/>
      <div className='flex flex-col'>
        <div className='flex items-start'>
          <div className='w-1/2 font-bold line-through text-secondary'>
            Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203
          </div>
          <div className='flex items-center justify-end w-1/2 gap-3'>
            <div className='text-sm text-indicator-red'>2 Days left</div>
            <div className='text-sm '>12/06/2021</div>
            <TaskCollapseItemButton/>
            <TaskMoreHoriz/>
          </div>
        </div>
        {/* Detail */}
        <div>
          <div className='flex items-center gap-4 mt-3'>
            <a href="#!">
              <MdOutlineSchedule className='w-5 h-5 text-primary'/>
            </a>
            <TaskDatepicker/>
          </div>
          <div className='flex items-start gap-4 mt-3'>
            <a href="#!">
              <MdOutlineEdit className='w-5 h-5 text-primary'/>
            </a>
            <div className="w-11/12">
              <span>
                Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!
              </span>
              <textarea onChange={() => console.log()} className='rounded-[5px] border border-secondary w-full' rows="4" value="Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskItem