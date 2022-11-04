import React from 'react'
import {MdSearch} from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { inboxSearchValue } from '../../quick_recoil'

const InboxSearch = () => {
  const [search, setSearch] = useRecoilState(inboxSearchValue)

  return (
    <div className='px-8 pt-6 '>
      <div className='border border-secondary rounded-[5px] flex items-center px-5 gap-3'>
        <input type="search" name="search" onChange={(e) => setSearch(e.target.value)} value={search}  className='flex-1 border-transparent focus:border-transparent focus:ring-0' placeholder='Search'/>
        <MdSearch className='w-6 h-6'/>
      </div>
    </div>
  )
}

export default InboxSearch