import React, { useState } from 'react'
import {MdMoreHoriz} from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { inboxDetailData } from '../../../quick_recoil'

const MoreHorizButton = ({id}) => {
  const [isShow, setIsShow] = useState(false)
  const [data, setData] = useRecoilState(inboxDetailData)

  const handleEdit = () => {
    // edit message
    setIsShow(false)
  }

  const handleDelete = () => {
    // delete message
    let newData = {...data}

    let messages_by_date = [...data.messages_by_date]
    newData.messages_by_date = messages_by_date.map(obj => {
      return {...obj, messages: obj.messages.filter(msg => msg.id !== id)}
    })

    setData(newData)
    setIsShow(false)
  }
  
  return (
    <div className='relative'>
      <a href="#!" onClick={() => setIsShow(!isShow)}>
        <MdMoreHoriz className='w-4 h-4'/>
      </a>
      <div className={`z-20 absolute py-1 flex flex-col w-24 bg-white shadow divide-y divide-secondary-light rounded border border-secondary ${isShow ? '':'hidden'}`}>
        <a href="#!" onClick={handleEdit} className='px-3 py-1 text-primary hover:bg-gray-50'>Edit</a>
        <a href="#!" onClick={handleDelete} className='px-3 py-1 text-indicator-red hover:bg-gray-50'>Delete</a>
      </div>
    </div>
  )
}

export default MoreHorizButton