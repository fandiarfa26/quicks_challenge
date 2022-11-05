import React, { useState } from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { taskListData } from '../../quick_recoil'

const TaskItemDesc = ({taskItem}) => {
  const [data, setData] = useRecoilState(taskListData)
  const [desc, setDesc] = useState(taskItem.description)
  const [isEditDesc, setIsEditDesc] = useState(false)

  const handleEdit = (e) => {
    setDesc(e.target.value)
    let newData = data.map(obj => {
      if (obj.id === taskItem.id) {
        obj.description = desc
      }
      return obj
    })

    setData(newData)
  }

  return (
    <div className='flex items-start gap-4 px-2 mt-3'>
      <a href="#!" onClick={() => setIsEditDesc(!isEditDesc)}>
        <MdOutlineEdit className='w-5 h-5 text-primary'/>
      </a>
      <div className="w-11/12">
        {
          isEditDesc 
          ? <textarea 
              onChange={handleEdit} 
              className='rounded-[5px] border border-secondary w-full' 
              rows="4" 
              value={desc}></textarea> 
          : <span 
              className={desc === '' ?'text-secondary' :'text-black'} 
              onClick={() => setIsEditDesc(true)}>
                {desc === '' ? 'No Description' : desc}
              </span> 
        }
      </div>
    </div>
  )
}

export default TaskItemDesc