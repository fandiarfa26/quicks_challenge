import React from 'react'
import {MdMoreHoriz} from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { taskListData, taskMoreHorizOpenId } from '../../quick_recoil'

const TaskMoreHoriz = ({taskItem}) => {
  const [showId, setShowId] = useRecoilState(taskMoreHorizOpenId)
  const [data, setData] = useRecoilState(taskListData)

  const handleDelete = () => {
    // delete task
    console.log(`click ${taskItem.id}`)
    let newData = data.filter(task => task.id !== taskItem.id)

    setData(newData) // WHAT IS WRONG WITH THIS???, WHY THE LAST ITEM ALWAYS DELETED??
    console.log(newData) // IT'S CORRECT
    setShowId('')
  }

  const handleShow = () => {
    if (showId === taskItem.id) {
      setShowId('')
    } else {
      setShowId(taskItem.id)
    }
  }

  return (
    <div className='relative'>
        <a href="#!" onClick={handleShow} className='text-secondary'>
          <MdMoreHoriz className='w-5 h-5'/>
        </a>
        <div className={`z-20 mt-1 right-0 absolute py-1 flex flex-col w-24 bg-white shadow rounded border border-secondary ${showId === taskItem.id ? '':'hidden'}`}>
          <a href="#!" onClick={handleDelete} className='px-3 py-1 text-indicator-red hover:bg-gray-50'>Delete</a>
        </div>
    </div>
  )
}

export default TaskMoreHoriz