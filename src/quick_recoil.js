import {atom} from 'recoil'

const quicksOpen = atom({
  key: 'quicksOpen',
  default: false
})

const quicksActive = atom({
  key: 'quicksActive',
  default: ''
})

export {quicksOpen, quicksActive}