import React from 'react'
import {useSetRecoilState} from 'recoil'
import { quicksActive, quicksOpen } from '../quick_recoil'

const CloseQuicksButton = (props) => {
  const setCurrentActive = useSetRecoilState(quicksActive)
  const setIsOpen = useSetRecoilState(quicksOpen)

  const handleClick = () => {
    setCurrentActive('')
    setIsOpen(false)
  }

  return (
    <div className="bg-secondary-dark fab relative z-0 right-[15px]" onClick={handleClick}>
      {props.children}
    </div>
  )
}

export default CloseQuicksButton