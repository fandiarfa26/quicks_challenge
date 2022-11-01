import React from 'react'
import {useRecoilState, useRecoilValue} from 'recoil'
import { quicksActive, quicksOpen } from '../quick_recoil'
import quicksLogo from '../assets/quicks.svg'
import TaskButton from '../components/Task/TaskButton'
import InboxButton from '../components/Inbox/InboxButton'

const QuicksButton = () => {
  const [isOpen, setIsOpen] = useRecoilState(quicksOpen)
  const [currentActive, setCurrentActive] = useRecoilState(quicksActive)

  let classList = ''

  if (currentActive === '') {
    classList = 'bg-primary z-10'
  } else {
    classList = 'mr-4 bg-secondary-dark'
  }

  const handleClick = () => {
    if (currentActive === '') {
      setIsOpen(!isOpen)
    } else {
      setCurrentActive('')
      setIsOpen(false)
    }
  }

  return (
    <div className={`transition-all ease-in-out fixed bottom-10 right-10 fab ${classList}`} onClick={handleClick}>
      <img src={quicksLogo} alt="Quicks Logo" className='w-10 h-10 text-white' />
    </div>
  )
}

export default QuicksButton