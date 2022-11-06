import React from 'react'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { taskListData } from '../../quick_recoil'

const TaskCollapseItemButton = ({taskItem}) => {
  const [data, setData] = useRecoilState(taskListData)

  const handleClick = () => {
    let newData = data.map(obj => {
      if (obj.id === taskItem.id) {
        return {...obj, is_expanded: !taskItem.is_expanded}
      }
      return obj
    })

    setData(newData)
  }

  return (
    <a href="#!" className='text-secondary' onClick={handleClick}>
      {
        taskItem.is_expanded ? <MdKeyboardArrowUp className='w-6 h-6'/> : <MdKeyboardArrowDown className='w-6 h-6'/>
      }
    </a>
  )
}

export default TaskCollapseItemButton