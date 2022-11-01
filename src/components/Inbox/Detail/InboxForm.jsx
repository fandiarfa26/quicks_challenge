import React from 'react'

const InboxForm = () => {
  return (
    <div className='px-8 pt-3 pb-6 bg-white rounded'>
      <form action="#!" className='flex items-center gap-3'>
        <input type="text" name="message" className='flex-1 border border-secondary rounded-[5px] focus:ring-0' placeholder='Type a new message'/>
        <button type="submit" className="rounded-[5px] bg-primary text-white py-2 px-4">
          Send
        </button>
      </form>
    </div>
  )
}

export default InboxForm