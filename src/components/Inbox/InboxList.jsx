import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { inboxListData } from '../../quick_recoil'
import InboxItem from './InboxItem'
import InboxListLoading from './InboxListLoading'

const InboxList = () => {
  const [loading, setLoading] = useState(false)
  const data = useRecoilValue(inboxListData)

  const getFakeData = useCallback(async () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?delay=2")
     .then((respose) => {
       setLoading(false)
    });
  }, [setLoading])

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