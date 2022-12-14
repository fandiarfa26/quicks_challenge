import React from 'react'
import loading from '../assets/loading-gray.svg'

const QuicksBoxLoading = ({text}) => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen gap-3'>
      <img src={loading} alt="Loading Spinner" className='w-16 h-16 animate-spin' />
      <span className='text-sm font-bold text-secondary-dark'>{text}</span>
    </div>
  )
}

export default QuicksBoxLoading