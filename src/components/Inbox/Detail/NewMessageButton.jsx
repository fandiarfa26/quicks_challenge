import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'

const NewMessageButton = () => {
  return (
    
      <div className="sticky inset-x-0 bottom-0 flex justify-center">
        <ScrollIntoView selector="#new-message-text" className='px-4 py-2 text-sm font-bold rounded cursor-pointer bg-primary-light text-primary'>
          
            New Message
          
        </ScrollIntoView>
      </div>
    
    
  )
}

export default NewMessageButton