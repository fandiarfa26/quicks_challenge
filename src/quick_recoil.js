import {atom} from 'recoil'

const quicksOpen = atom({
  key: 'quicksOpen',
  default: false
})

const quicksActive = atom({
  key: 'quicksActive',
  default: ''
})

const inboxOpen = atom({
  key: 'detailInboxOpen',
  default: false,
})

export {quicksOpen, quicksActive, inboxOpen}