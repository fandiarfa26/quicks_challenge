import React from 'react'
import NewTaskButton from './NewTaskButton'
import TaskSelect from './TaskSelect'

const TaskTopbar = () => {
  return (
    <div className='px-8 pt-6'>
      <div className="flex items-center justify-between">
        <TaskSelect/>
        <NewTaskButton/>
      </div>
    </div>
  )
}

export default TaskTopbar