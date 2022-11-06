import React, { useState } from 'react'
import { MdOutlineBookmarks } from 'react-icons/md' 
import { useRecoilState } from 'recoil'
import { taskListData, taskTagsOpenId } from '../../quick_recoil'

const TaskItemTags = ({taskItem}) => {
  const [showId, setShowId] = useRecoilState(taskTagsOpenId)
  const [data, setData] = useRecoilState(taskListData)

  const stickersData = [
    {label: 'Important ASAP', color: 'bg-[#E5F1FF]'},
    {label: 'Offline Meeting', color: 'bg-[#FDCFA4]'},
    {label: 'Virtual Meeting', color: 'bg-[#F9E9C3]'},
    {label: 'ASAP', color: 'bg-[#AFEBDB]'},
    {label: 'Client Related', color: 'bg-[#CBF1C2]'},
    {label: 'Self Task', color: 'bg-[#CFCEF9]'},
    {label: 'Appointments', color: 'bg-[#F9E0FD]'},
    {label: 'Court Related', color: 'bg-[#9DD0ED]'},
  ]

  const handleShow = () => {
    if (showId === taskItem.id) {
      setShowId('')
    } else {
      setShowId(taskItem.id)
    }
  }

  const handleSelect = (label) => {
    let newData = data.map(obj => {
      if (obj.id === taskItem.id) {
        if (obj.tags.includes(label)) {
          return {...obj, tags: obj.tags.filter(d => d !== label)}
        } else {
          return {...obj, tags: [...obj.tags, label]}
        }
      }
      return obj
    })

    setData(newData)
    setShowId('')
  }

  const loadTags = () => {
    if (taskItem.tags.length > 0) {
      return taskItem.tags.map((tag, i) => {
        let sticker = stickersData.find(s => s.label === tag)
        return <span key={i} className={`rounded px-2 py-1 text-sm ${sticker.color}`}>{tag}</span>
      })
    } else {
      return <span className='text-secondary'>No Sticker</span>
    }
  }

  return (
    <div className="relative p-2 mt-3 rounded bg-[#f9f9f9]" onClick={handleShow}>
      <div className='flex items-start gap-4 '>
        <MdOutlineBookmarks className={`w-5 h-5 ${taskItem.tags.length > 0 ? 'text-primary' : 'text-secondary-dark' }`}/>
        <div className="flex flex-wrap w-11/12 gap-2">
          {loadTags()}
        </div>
      </div>
      <div className={`z-20 mt-1 left-10 absolute p-3 flex flex-col gap-2 w-60 bg-white shadow rounded border border-secondary ${showId === taskItem.id ? '':'hidden'}`}>
        {
          stickersData.map((obj, i) => (
            <div 
              key={i} 
              className={`rounded px-2 py-1 text-sm cursor-pointer border ${taskItem.tags.includes(obj.label) ? 'border-primary' : 'border-white'} ${obj.color}`}
              onClick={() => handleSelect(obj.label)}
              >
                {obj.label}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TaskItemTags