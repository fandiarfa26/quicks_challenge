import React, { useState } from 'react'
import { DateObject } from 'react-multi-date-picker'
import TaskCheckbox from './TaskCheckbox'
import TaskCollapseItemButton from './TaskCollapseItemButton'
import TaskMoreHoriz from './TaskMoreHoriz'
import TaskDaysLeftText from './TaskDaysLeftText'
import TaskTitle from './TaskTitle'
import TaskItemDetail from './TaskItemDetail'

const TaskItem = ({item}) => {
  const [isExpanded, setIsExpanded] = useState(!item.is_checked)
  const [isChecked, setIsChecked] = useState(item.is_checked)
  
  let initialDate = item.date !== null ? new DateObject({date: item.date, format: 'DD/MM/YYYY'}) : null
  const [date, setDate] = useState(initialDate)

  return (
    <div className='py-[22px] flex gap-3 items-start'>
      <TaskCheckbox isChecked={isChecked} setIsChecked={setIsChecked}/>
      <div className='flex flex-col w-full'>
        <div className='flex items-start'>
          <TaskTitle taskItem={item} isChecked={isChecked}/>
          <div className='flex items-center justify-end w-1/2 gap-3'>
            { !isChecked && date !== null && <TaskDaysLeftText date={date}/> }
            { date !== null && <div className='text-sm '>{date.toString()}</div>}
            <TaskCollapseItemButton isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
            <TaskMoreHoriz taskItem={item}/>
          </div>
        </div>
        <TaskItemDetail 
          taskItem={item} 
          isExpanded={isExpanded} 
          date={date} 
          setDate={setDate}/>
      </div>
    </div>
  )
}

export default TaskItem