import React from 'react'
import {useRecoilValue} from 'recoil'
import InboxSubButton from './Inbox/InboxSubButton'
import QuicksButton from './QuicksButton'
import QuicksBox from './QuicksBox'
import TaskSubButton from './Task/TaskSubButton'
import { quicksOpen, quicksActive } from '../quick_recoil'

const Quicks = () => {
  const isQuicksOpen = useRecoilValue(quicksOpen)
  const currentActive = useRecoilValue(quicksActive)

  let classList = ''

  if (isQuicksOpen) {
    if(currentActive === '') {
      classList = 'mr-16'
    }else {
      classList = ''
    }
  } else {
    classList = ''
  }

  return (
    <div className='fixed bottom-10 right-10'>
      {/* <QuicksBox/> */}
      <QuicksButton/>
      <div className={`transition-all ease-in-out flex rounded-r-full bg-red-700 flex-row-reverse h-[68px] items-center ${classList}`}>
        <InboxSubButton/>
        <TaskSubButton/>
      </div>
       
    </div>
  )
}

export default Quicks