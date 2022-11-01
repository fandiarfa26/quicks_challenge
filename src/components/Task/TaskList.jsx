import React from 'react'
import TaskItem from './TaskItem'
import loading from '../../assets/loading-gray.svg'
import NewTaskItem from './NewTaskItem'

const TaskList = () => {
  return (
    
    <div className='flex-1 px-8 overflow-y-auto divide-y divide-secondary'>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      <NewTaskItem/>
    </div>
  )
}

export default TaskList