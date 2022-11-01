import React from 'react'
import InboxDetailBody from './Inbox/Detail/InboxDetailBody'
import InboxBody from './Inbox/InboxBody'
import TaskBody from './Task/TaskBody'

const QuicksBox = () => {
  return (
    <div className='w-[768px] h-4/6  bg-white rounded fixed bottom-32 right-10'>
      {/* <InboxBody/> */}
      {/* <InboxDetailBody/> */}
      <TaskBody/>
    </div>
  )
}

export default QuicksBox