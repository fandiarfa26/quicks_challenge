import React, { useState, useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { fakeTaskListData } from '../../fake_data'
import { taskListData } from '../../quick_recoil'
import QuicksBoxLoading from '../QuicksBoxLoading'
import TaskItem from './TaskItem'

const TaskList = ({bottomRef}) => {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useRecoilState(taskListData)
  
  const getFakeData = useCallback(async () => {
    setLoading(true)
    fetch("https://reqres.in/api/users?delay=1")
      .then((res) => {
        setList(fakeTaskListData.map(obj => {
          return {...obj, 
            is_expanded: !obj.is_checked,
            is_more_open: false
          }
        }))
      })
      .then((res) => {
        setLoading(false)
      });
  }, [setLoading, setList])

  useEffect(() => {
    getFakeData()
  }, [getFakeData])



  if (loading) {
    return <QuicksBoxLoading text="Loading Task List..."/>
  }

  return (
    <div className='flex-1 px-8 pb-6 overflow-y-auto divide-y scrollbar divide-secondary'>
      {
        list.map((item, i) => (
          <TaskItem key={i} 
            item={item} 
          />
        ))
      }
      <div ref={bottomRef}></div>
    </div>
  )
}

export default TaskList