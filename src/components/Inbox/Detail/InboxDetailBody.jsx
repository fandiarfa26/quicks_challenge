import React from 'react'
import InboxMessages from './InboxMessages'
import InboxForm from './InboxForm'
import InboxTopbar from './InboxTopbar'
import WaitConnectText from './WaitConnectText'
import { useRecoilValue } from 'recoil'
import { inboxDetailData } from '../../../quick_recoil'

const InboxDetailBody = () => {
  const data = useRecoilValue(inboxDetailData)

  return (
    <div className='flex flex-col h-full'>
      <InboxTopbar title={data.title} participants={data.participants}/>
      <InboxMessages messages={data.messages_by_date} isGroup={data.participants > 2}/>
      {data.is_connecting && <WaitConnectText/>}
      <InboxForm/>
    </div>
  )
}

export default InboxDetailBody