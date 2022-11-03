import React from 'react'
import { useRecoilValue } from 'recoil'
import { inboxOpen, quicksActive } from '../quick_recoil'
import InboxDetailBody from './Inbox/Detail/InboxDetailBody'
import InboxBody from './Inbox/InboxBody'
import TaskBody from './Task/TaskBody'

const QuicksBox = () => {
  const currentActive = useRecoilValue(quicksActive)
  const detailInboxOpen = useRecoilValue(inboxOpen)

  const loadBody = () => {
    if (currentActive === 'task') {
      return <TaskBody/>
    } else if (currentActive === 'inbox') {
      if (detailInboxOpen) {
        return <InboxDetailBody/>
      }
      return <InboxBody/>
    }
  }

  return (
    <div className={`transition-all ease-in-out duration-500 w-[768px] h-4/6 bg-white rounded fixed bottom-36 ${currentActive !== '' ? 'translate-x-0 right-10' : 'right-0 translate-x-full' }`}>
      {
        loadBody()
      }
    </div>
  )
}

export default QuicksBox