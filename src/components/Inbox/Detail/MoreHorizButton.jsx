import React, { useState } from 'react'
import {MdMoreHoriz} from 'react-icons/md'

const MoreHorizButton = () => {
  const [isShow, setIsShow] = useState(false)

  const handleEdit = () => {
    // edit message
    setIsShow(false)
  }

  const handleDelete = () => {
    // delete message
    setIsShow(false)
  }
  
  return (
    <div className='relative'>
      <a href="#!" onClick={() => setIsShow(!isShow)}>
        <MdMoreHoriz className='w-4 h-4'/>
      </a>
      <div className={`z-20 absolute py-1 flex flex-col w-24 bg-white shadow divide-y divide-secondary-light rounded border border-secondary-light ${isShow ? '':'hidden'}`}>
        <a href="#!" onClick={handleEdit} className='px-3 py-1 text-primary hover:bg-gray-50'>Edit</a>
        <a href="#!" onClick={handleDelete} className='px-3 py-1 text-indicator-red hover:bg-gray-50'>Delete</a>
      </div>
    </div>
  )
}

export default MoreHorizButton