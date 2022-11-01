import React from 'react'
import {MdOutlinePerson} from 'react-icons/md'

const InboxAvatarGroup = () => {
  return (
    <div className="bg-secondary-light avatar relative z-0 right-[17px]">
      <MdOutlinePerson className='w-5 h-5 text-secondary-dark'/>
      <div className='bg-primary avatar absolute left-[17px] z-10'>
        <MdOutlinePerson className='w-5 h-5 text-white'/>
      </div>
    </div>
  )
}

export default InboxAvatarGroup