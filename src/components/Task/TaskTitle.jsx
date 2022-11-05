import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { taskListData } from '../../quick_recoil'

const TaskTitle = ({taskItem, isChecked}) => {
  const [data, setData] = useRecoilState(taskListData)
  const [title, setTitle] = useState(taskItem.title)
  const [isEditTitle, setIsEditTitle] = useState(false)

  const handleEdit = (e) => {
    setTitle(e.target.value)
    let newData = data.map(obj => {
      if (obj.id === taskItem.id) {
        obj.title = title
      }
      return obj
    })

    setData(newData)
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      if (title !== '') {
        setIsEditTitle(false)
      }
    }
  }

  if (isEditTitle || title.trim() === '') {
    return (
      <div className='w-1/2'>
        <input 
          type="text" 
          className='rounded-[5px] border border-secondary w-full' 
          placeholder='Type Task Title' 
          value={title}
          onChange={handleEdit}
          onKeyDown={handleKeyDown}
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

export default TaskTitle