import React from 'react'
import {MdSearch} from 'react-icons/md'

const InboxSearch = () => {
  return (
    <div className='px-8 pt-6 '>
      <form action="#!" className='border border-secondary rounded-[5px] flex items-center px-5 gap-3'>
        <input type="search" name="search" className='flex-1 border-transparent focus:border-transparent focus:ring-0' placeholder='Search'/>
        <button type="submit">
          <MdSearch className='w-6 h-6'/>
        </button>
      </form>
    </div>
  )
}

export default InboxSearch