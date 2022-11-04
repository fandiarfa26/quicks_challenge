import React, { useState } from 'react'
import TaskCheckbox from './TaskCheckbox'
import TaskCollapseItemButton from './TaskCollapseItemButton'
import TaskMoreHoriz from './TaskMoreHoriz'
import {MdOutlineSchedule, MdOutlineEdit} from 'react-icons/md'
import TaskDatepicker from './TaskDatepicker'
import TaskDaysLeftText from './TaskDaysLeftText'
import { DateObject } from 'react-multi-date-picker'
import TaskItemTags from './TaskItemTags'

const TaskItem = ({item}) => {
  const [isExpanded, setIsExpanded] = useState(!item.is_checked)
  const [isChecked, setIsChecked] = useState(item.is_checked)
  const [isEditDesc, setIsEditDesc] = useState(false)
  const [isEditTitle, setIsEditTitle] = useState(false)
  const [title, setTitle] = useState(item.title)
  const [desc, setDesc] = useState(item.description)
  let initialDate = item.date !== null ? new DateObject({date: item.date, format: 'DD/MM/YYYY'}) : null
  const [date, setDate] = useState(initialDate)

  const handleEditTitleDone = (e) => {
    if(e.key === 'Enter'){
      if (title !== '') {
        setIsEditTitle(false)
      }
    }
  }

  const loadTitle = () => {
    if (isEditTitle || title.trim() === '') {
      return (
        <div className='w-1/2'>
          <input 
            type="text" 
            className='rounded-[5px] border border-secondary w-full' 
            placeholder='Type Task Title' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleEditTitleDone}
            />
        </div>
      )
    }
    return (
      <div 
        onClick={() => setIsEditTitle(true)}
        className={`w-1/2 font-bold ${isChecked ? 'line-through text-secondary' : ''}`}>
        {title}
      </div>
    )
  }

  return (
    <div className='py-[22px] flex gap-3 items-start'>
      <TaskCheckbox isChecked={isChecked} setIsChecked={setIsChecked}/>
      <div className='flex flex-col w-full'>
        <div className='flex items-start'>
          {loadTitle()}
          <div className='flex items-center justify-end w-1/2 gap-3'>
            { !isChecked && date !== null && <TaskDaysLeftText date={date}/> }
            { date !== null && <div className='text-sm '>{date.toString()}</div>}
            <TaskCollapseItemButton isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
            <TaskMoreHoriz taskItem={item}/>
          </div>
        </div>
        {/* Detail */}
        <div className={isExpanded ? '' : 'hidden'}>
          <div className='flex items-center gap-4 px-2 mt-3 '>
            <a href="#!">
              <MdOutlineSchedule className='w-5 h-5 text-primary'/>
            </a>
            <TaskDatepicker dateValue={date} setDateValue={setDate}/>
          </div>
          <div className='flex items-start gap-4 px-2 mt-3'>
            <a href="#!" onClick={() => setIsEditDesc(!isEditDesc)}>
              <MdOutlineEdit className='w-5 h-5 text-primary'/>
            </a>
            <div className="w-11/12">
              {
                isEditDesc 
                ? <textarea 
                    onChange={(e) => setDesc(e.target.value)} 
                    className='rounded-[5px] border border-secondary w-full' 
                    rows="4" 
                    value={desc}></textarea> 
                : <span className={item.description === '' ?'text-secondary' :'text-black'} onClick={() => setIsEditDesc(true)}>{desc === '' ? 'No Description' : desc}</span> 
              }
            </div>
          </div>
          <TaskItemTags taskItem={item}/>
        </div>
      </div>
    </div>
  )
}

export default TaskItem