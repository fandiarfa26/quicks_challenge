import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { fakeInboxListData } from '../../fake_data'
import { inboxListData, inboxSearchValue } from '../../quick_recoil'
import InboxItem from './InboxItem'
import QuicksBoxLoading from '../QuicksBoxLoading'

const InboxList = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useRecoilState(inboxListData)
  const search = useRecoilValue(inboxSearchValue)

  const getFakeData = useCallback(async () => {
    setLoading(true)
    fetch("https://reqres.in/api/users?delay=1")
      .then((response) => {
        setData(fakeInboxListData)
      })
      .then((response) => {
        setLoading(false)
      });
  }, [setLoading, setData])

  useEffect(() => {
    getFakeData()
  }, [getFakeData])

  if (loading) {
    return <QuicksBoxLoading text='Loading Chats ...'/>
  }
  return (
    <div className="flex-1 px-8 pb-6 overflow-y-auto divide-y scrollbar divide-secondary">
      {
        data
          .filter(val => {
            if (search.trim() === '') {
              return val
            }
            else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val
            }
            return false
          })
          .map((item, i) => <InboxItem key={i} item={item}/>)
      }
    </div>
  )
}

export default InboxList