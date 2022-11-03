import React from 'react'
import TaskItem from './TaskItem'
import TaskListLoading from './TaskListLoading'

const TaskList = () => {
  let loading = false

  if (loading) {
    return <TaskListLoading/>
  }
  return (
    <div className='flex-1 px-8 pb-6 overflow-y-auto divide-y divide-secondary'>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
    </div>
  )
}

export default TaskList