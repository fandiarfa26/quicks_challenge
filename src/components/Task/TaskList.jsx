import React, { useState, useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { fakeTaskListData } from '../../fake_data'
import { taskListData } from '../../quick_recoil'
import QuicksBoxLoading from '../QuicksBoxLoading'
import TaskItem from './TaskItem'

const TaskList = ({bottomRef}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useRecoilState(taskListData)
  

  const getFakeData = useCallback(async () => {
    
    setLoading(true)
    fetch("https://reqres.in/api/users?delay=1")
      .then((response) => {
        setData(fakeTaskListData)
      })
      .then((response) => {
        setLoading(false)
      });
  }, [setLoading, setData])

  useEffect(() => {
    getFakeData()
  }, [getFakeData])


  if (loading) {
    return <QuicksBoxLoading text="Loading Task List..."/>
  }
  return (
    <div className='flex-1 px-8 pb-6 overflow-y-auto divide-y divide-secondary'>
      {
        data.map((item, i) => <TaskItem key={i} item={item}/>)
      }
      <div ref={bottomRef}></div>
    </div>
  )
}

export default TaskList