import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'

const NewMessageButton = () => {
  return (
    
      <ScrollIntoView selector="#new-message-text" className="sticky inset-x-0 bottom-0 flex justify-center">
        <a href="#!" className='px-4 py-2 text-sm font-bold rounded bg-primary-light text-primary'>
          New Message
        </a>
      </ScrollIntoView>
    
    
  )
}

export default NewMessageButton