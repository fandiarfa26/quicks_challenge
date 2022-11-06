import React from 'react'
import {MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox} from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { taskListData } from '../../quick_recoil'

const TaskCheckbox = ({ taskItem }) => {
  const [data, setData] = useRecoilState(taskListData)

  const handleClick = () => {
    let newData = data.map(obj => {
      if (obj.id === taskItem.id) {
        return {...obj, is_checked: !taskItem.is_checked}
      }
      return obj
    })

    setData(newData)
  }

  return (
    <a href="#!" onClick={handleClick} className='text-secondary hover:text-primary'>
      {
        taskItem.is_checked ? <MdOutlineCheckBox className='w-6 h-6'/> : <MdOutlineCheckBoxOutlineBlank className='w-6 h-6'/>
      }
    </a>
  )
}

export default TaskCheckbox