import React from 'react'
import {useRecoilState, useSetRecoilState} from 'recoil'
import { inboxOpen, quicksActive, quicksOpen } from '../quick_recoil'
import quicksLogo from '../assets/quicks.svg'

const QuicksButton = () => {
  const [isOpen, setIsOpen] = useRecoilState(quicksOpen)
  const [currentActive, setCurrentActive] = useRecoilState(quicksActive)
  const setDetailInboxOpen = useSetRecoilState(inboxOpen)

  let classList = ''

  if (currentActive === '') {
    classList = 'bg-primary z-10'
  } else {
    classList = 'mr-5 bg-secondary-dark'
  }

  const handleClick = () => {
    if (currentActive === '') {
      setIsOpen(!isOpen)
    } else {
      setCurrentActive('')
      setIsOpen(false)
      setDetailInboxOpen(false)
    }
  }

  return (
    <div className={`transition-all ease-in-out duration-500 fixed bottom-10 right-10 fab ${classList}`} onClick={handleClick}>
      <img src={quicksLogo} alt="Quicks Logo" className='w-10 h-10 text-white' />
    </div>
  )
}

export default QuicksButton