import React from 'react'
import InboxAvatar from './InboxAvatar'
import InboxAvatarGroup from './InboxAvatarGroup'
import InboxIndicator from './InboxIndicator'

const InboxItem = () => {
  return (
    <div className='py-[22px] flex items-center gap-1 cursor-pointer hover:bg-gray-100'>
      <div className='flex flex-1'>
        <div className='flex justify-center w-16'>
          <InboxAvatarGroup/>
          {/* <InboxAvatar/> */}
        </div>
        <div className='flex-1'>
          <div className='flex items-start gap-4'>
            <div className='max-w-md font-bold text-primary'>Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]</div>
            <div className='text-sm text-secondary-dark'>02/06/2021 10:45</div>
          </div>
          <div className='text-sm font-bold'>Cameron Phillips :</div>
          <div className='max-w-md text-sm truncate'>
            I understand your initial concerns and thats very valid, Elizabeth. But you nakjsn akjsn kas nakjs nakjs n
          </div>
        </div>
      </div>
      <InboxIndicator/>
    </div>
  )
}

export default InboxItem