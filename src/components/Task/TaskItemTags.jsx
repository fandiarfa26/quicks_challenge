import React, { useState } from 'react'
import { MdOutlineBookmarks } from 'react-icons/md' 
import { useRecoilState } from 'recoil'
import { taskTagsOpenId } from '../../quick_recoil'

const TaskItemTags = ({taskItem}) => {
  const [showId, setShowId] = useRecoilState(taskTagsOpenId)
  const [selected, setSelected] = useState(taskItem.tags)

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
    let data = [...selected]
    if (data.includes(label)) {
      let filteredData = data.filter(d => d !== label)
      setSelected(filteredData)
    } else {
      data.push(label)
      setSelected(data)
    }
    setShowId('')
  }

  const loadTags = () => {
    if (selected.length > 0) {
      return selected.map((tag, i) => {
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
        <MdOutlineBookmarks className='w-5 h-5 text-primary'/>
        <div className="flex flex-wrap w-11/12 gap-2">
          {loadTags()}
        </div>
      </div>
      <div className={`z-20 mt-1 left-10 absolute p-3 flex flex-col gap-2 w-60 bg-white shadow rounded border border-secondary ${showId === taskItem.id ? '':'hidden'}`}>
        {
          stickersData.map((obj, i) => (
            <div 
              key={i} 
              className={`rounded px-2 py-1 text-sm cursor-pointer border ${selected.includes(obj.label) ? 'border-primary' : 'border-white'} ${obj.color}`}
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