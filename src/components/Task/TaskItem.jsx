import React, { useState } from 'react'

import TaskCheckbox from './TaskCheckbox'
import TaskCollapseItemButton from './TaskCollapseItemButton'
import TaskMoreHoriz from './TaskMoreHoriz'
import TaskDaysLeftText from './TaskDaysLeftText'
import TaskTitle from './TaskTitle'
import TaskDatepicker from './TaskDatepicker'
import TaskItemDesc from './TaskItemDesc'
import TaskItemTags from './TaskItemTags'

const TaskItem = ({item}) => {
  
  return (
    <div className='py-[22px] flex gap-3 items-start'>
      <TaskCheckbox taskItem={item}/>
      <div className='flex flex-col w-full'>
        <div className='flex items-start'>
          <TaskTitle taskItem={item}/>
          <div className='flex items-center justify-end w-1/2 gap-3'>
            { !item.is_checked && item.date !== null && <TaskDaysLeftText taskItem={item}/> }
            { item.date !== null && <div className='text-sm'>{item.date}</div>}
            <TaskCollapseItemButton taskItem={item}/>
            <TaskMoreHoriz taskItem={item}/>
          </div>
        </div>

        <div className={item.is_expanded ? '' : 'hidden'}>
          <TaskDatepicker taskItem={item}/>
          <TaskItemDesc taskItem={item}/>
          <TaskItemTags taskItem={item}/>
        </div>

      </div>
      
    </div>
  )


  // const [isExpanded, setIsExpanded] = useState(!item.is_checked)
  // const [isChecked, setIsChecked] = useState(item.is_checked)
  
  // let initialDate = item.date !== null ? new DateObject({date: item.date, format: 'DD/MM/YYYY'}) : null
  // const [date, setDate] = useState(initialDate)

  // return (
  //   <div className='py-[22px] flex gap-3 items-start'>
  //     <TaskCheckbox isChecked={isChecked} setIsChecked={setIsChecked}/>
  //     <div className='flex flex-col w-full'>
  //       <div className='flex items-start'>
  //         <TaskTitle taskItem={item} isChecked={isChecked}/>
  //         <div className='flex items-center justify-end w-1/2 gap-3'>
  //           { !isChecked && date !== null && <TaskDaysLeftText date={date}/> }
  //           { date !== null && <div className='text-sm '>{date.toString()}</div>}
  //           <TaskCollapseItemButton isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
  //           <TaskMoreHoriz taskItem={item}/>
  //           <a href="#!" onClick={() => handleDelete(item.id)}>Hapus</a>
  //         </div>
  //       </div>
  //       <TaskItemDetail 
  //         taskItem={item} 
  //         isExpanded={isExpanded} 
  //         date={date} 
  //         setDate={setDate}/>
  //     </div>
  //   </div>
  // )
}

export default TaskItem