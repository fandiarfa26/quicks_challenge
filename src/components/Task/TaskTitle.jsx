import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { taskEditTitleId, taskListData } from '../../quick_recoil'

const TaskTitle = ({taskItem}) => {
  const [data, setData] = useRecoilState(taskListData)
  const [editTitleId, setEditTitleId] = useRecoilState(taskEditTitleId)

  const handleEdit = (e) => {
    let newData = data.map(obj => {
      if (obj.id === taskItem.id) {
        return {...obj, title: e.target.value}
      }
      return obj
    })

    setData(newData)
  }

  const handleKeyDown = (e) => {
    setEditTitleId(taskItem.id)
    if(e.key === 'Enter'){
      if (taskItem.title !== '') {
        setEditTitleId('')
      }
    }
  }

  if (editTitleId === taskItem.id || taskItem.title.trim() === '') {
    return (
      <div className='w-1/2'>
        <input 
          type="text" 
          className='rounded-[5px] border border-secondary w-full' 
          placeholder='Type Task Title' 
          value={taskItem.title}
          onChange={handleEdit}
          onKeyDown={handleKeyDown}
          />
      </div>
    )
  }
  return (
    <div 
      onClick={() => setEditTitleId(taskItem.id)}
      className={`w-1/2 font-bold ${taskItem.is_checked ? 'line-through text-secondary' : ''}`}>
      {taskItem.title}
    </div>
  )
}

export default TaskTitle