import React from 'react'
import { useSetRecoilState } from 'recoil'
import { inboxOpen } from '../../quick_recoil'
import InboxAvatar from './InboxAvatar'
import InboxAvatarGroup from './InboxAvatarGroup'
import InboxIndicator from './InboxIndicator'

const InboxItem = ({item}) => {
  const setDetailInboxOpen = useSetRecoilState(inboxOpen)

  const handleClick = () => {
    setDetailInboxOpen(true)
  }

  return (
    <div className='transition ease-in-out py-[22px] flex items-center gap-1 cursor-pointer hover:bg-gray-50' onClick={handleClick}>
      <div className='flex flex-1'>
        <div className='flex justify-center w-16'>
          {
            item.participants > 2 ? <InboxAvatarGroup/> : <InboxAvatar title={item.title}/>
          }
        </div>
        <div className='flex-1'>
          <div className='flex items-start gap-5'>
            <div className='max-w-md font-bold text-primary'>{item.title}</div>
            <div className='text-sm text-secondary-dark'>{item.datetime}</div>
          </div>
          { item.participants > 2 && <div className='text-sm font-bold'>{item.new_message.user} :</div>}
          <div className='max-w-md text-sm truncate'>{item.new_message.text}</div>
        </div>
      </div>
      <InboxIndicator hasRead={item.has_read}/>
    </div>
  )
}

export default InboxItem