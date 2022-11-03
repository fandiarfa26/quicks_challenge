import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { fakeInboxListData } from '../../fake_data'
import { inboxListData } from '../../quick_recoil'
import InboxItem from './InboxItem'
import InboxListLoading from './InboxListLoading'

const InboxList = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useRecoilState(inboxListData)

  const getFakeData = useCallback(async () => {
    setLoading(true)
    fetch("https://reqres.in/api/users?delay=1")
      .then((respose) => {
        setData(fakeInboxListData)
      })
      .then((respose) => {
        setLoading(false)
      });
  }, [setLoading, setData])

  useEffect(() => {
    getFakeData()
  }, [getFakeData])

  if (loading) {
    return <InboxListLoading/>
  }
  return (
    <div className="flex-1 px-8 pb-6 overflow-y-auto divide-y divide-secondary">
      {
        data.map((item, i) => <InboxItem key={i} item={item}/>)
      }
    </div>
  )
}

export default InboxList