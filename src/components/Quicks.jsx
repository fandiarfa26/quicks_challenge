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


  return (
    <div className='fixed bg-green-400 bottom-10 right-10'>
      {/* <QuicksBox/> */}
      <QuicksButton/>
      <div className='relative mr-1'>
        <InboxSubButton/>
        <TaskSubButton/>
      </div>
       
    </div>
  )
}

export default Quicks