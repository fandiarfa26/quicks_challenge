import React from 'react'
import { MdOutlineSchedule } from 'react-icons/md'
import TaskDatepicker from './TaskDatepicker'
import TaskItemDesc from './TaskItemDesc'
import TaskItemTags from './TaskItemTags'

const TaskItemDetail = (props) => {
  return (
    <div className={props.isExpanded ? '' : 'hidden'}>
      <div className='flex items-center gap-4 px-2 mt-3 '>
        <a href="#!">
          <MdOutlineSchedule className='w-5 h-5 text-primary'/>
        </a>
        <TaskDatepicker dateValue={props.date} setDateValue={props.setDate}/>
      </div>
      <TaskItemDesc taskItem={props.taskItem}/>
      <TaskItemTags taskItem={props.taskItem}/>
    </div>
  )
}

export default TaskItemDetail