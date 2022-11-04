import React, { useCallback, useEffect, useRef, useState } from 'react'
import InboxMessages from './InboxMessages'
import InboxForm from './InboxForm'
import InboxTopbar from './InboxTopbar'
import WaitConnectText from './WaitConnectText'
import { useRecoilState, useRecoilValue } from 'recoil'
import { inboxDetailData, inboxDetailIsGroup } from '../../../quick_recoil'
import { fakeGroupInboxDetailData, fakeSingleInboxDetailData } from '../../../fake_data'
import QuicksBoxLoading from '../../QuicksBoxLoading'

const InboxDetailBody = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useRecoilState(inboxDetailData)
  const isGroup = useRecoilValue(inboxDetailIsGroup)
  const bottomRef = useRef()

  const getFakeData = useCallback(async () => {
    setLoading(true)
    fetch("https://reqres.in/api/user/1")
      .then(() => {
        if (isGroup) {
          setData(fakeGroupInboxDetailData)
        } else {
          setData(fakeSingleInboxDetailData)
        }
      })
      .then(() => {
        setLoading(false)
      })
  }, [isGroup, setData, setLoading])

  useEffect(() => {
    getFakeData()
  }, [getFakeData])

  if (loading) return (
    <div className='flex flex-col h-full'>
      <QuicksBoxLoading text="Loading Messages ..."/>
    </div>
  )

  return (
    <div className='flex flex-col h-full'>
      <InboxTopbar title={data.title} participants={data.participants}/>
      <InboxMessages hasRead={data.has_read} messages={data.messages_by_date} isGroup={data.participants > 2} bottomRef={bottomRef}/>
      {data.is_connecting && <WaitConnectText/>}
      <InboxForm bottomRef={bottomRef}/>
    </div>
  )
}

export default InboxDetailBody