import React from 'react'
import TaskList from './TaskList'
import TaskTopbar from './TaskTopbar'

const TaskBody = () => {
  return (
    <div className='flex flex-col max-h-full'>
      <TaskTopbar/>
      <TaskList/>
    </div>
  )
}

export default TaskBody