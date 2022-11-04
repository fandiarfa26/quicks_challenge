import React, { useState, useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { fakeTaskListData } from '../../fake_data'
import { taskListData } from '../../quick_recoil'
import TaskItem from './TaskItem'
import TaskListLoading from './TaskListLoading'

const TaskList = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useRecoilState(taskListData)

  const getFakeData = useCallback(async () => {
    setLoading(true)
    fetch("https://reqres.in/api/users?delay=1")
      .then((respose) => {
        setData(fakeTaskListData)
      })
      .then((respose) => {
        setLoading(false)
      });
  }, [setLoading, setData])

  useEffect(() => {
    getFakeData()
  }, [getFakeData])

  if (loading) {
    return <TaskListLoading/>
  }
  return (
    <div className='flex-1 px-8 pb-6 overflow-y-auto divide-y divide-secondary'>
      {
        data.map((item, i) => <TaskItem key={i} item={item}/>)
      }
    </div>
  )
}

export default TaskList