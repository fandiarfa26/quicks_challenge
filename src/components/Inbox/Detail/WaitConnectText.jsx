import React from 'react'
import loading from '../../../assets/loading-blue.svg'

const WaitConnectText = () => {
  return (
    <div className='px-8'>
      <div className='flex items-center gap-2 p-3 rounded bg-primary-light'>
        <img src={loading} alt="Loading Spinner" className='w-6 h-6 animate-spin' />
        <span className='text-xs font-bold'>Please wait while we connect you with one of our team ...</span>
      </div>
    </div>
  )
}

export default WaitConnectText