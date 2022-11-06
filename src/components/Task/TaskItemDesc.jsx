import React, { useState } from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { taskEditDescId, taskListData } from '../../quick_recoil'

const TaskItemDesc = ({taskItem}) => {
  const [data, setData] = useRecoilState(taskListData)
  const [editDescId, setEditDescId] = useRecoilState(taskEditDescId)

  const handleEdit = (e) => {
    let newData = data.map(obj => {
      if (obj.id === taskItem.id) {
        return {...obj, description: e.target.value}
      }
      return obj
    })

    setData(newData)
  }

  return (
    <div className='flex items-start gap-4 px-2 mt-3'>
      <a href="#!" onClick={() => setEditDescId(editDescId !== '' ? '' : taskItem.id )}>
        <MdOutlineEdit className={`w-5 h-5 ${taskItem.description.trim() !== '' ? 'text-primary' : 'text-secondary-dark' }`}/>
      </a>
      <div className="w-11/12">
        {
          editDescId === taskItem.id
          ? <textarea 
              onChange={handleEdit} 
              className='rounded-[5px] border border-secondary w-full' 
              rows="4" 
              value={taskItem.description}></textarea> 
          : <div 
              className={`w-full ${taskItem.description === '' ?'text-secondary' :'text-black'}`} 
              onClick={() => setEditDescId(taskItem.id)}>
                {taskItem.description === '' ? 'No Description' : taskItem.description}
              </div> 
        }
      </div>
    </div>
  )
}

export default TaskItemDesc