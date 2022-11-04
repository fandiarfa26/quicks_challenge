import React, { useRef } from 'react'
import TaskList from './TaskList'
import TaskTopbar from './TaskTopbar'

const TaskBody = () => {
  const bottomRef = useRef()
  return (
    <div className='flex flex-col max-h-full'>
      <TaskTopbar bottomRef={bottomRef}/>
      <TaskList bottomRef={bottomRef}/>
    </div>
  )
}

export default TaskBody