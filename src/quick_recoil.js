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

const inboxListData = atom({
  key: 'inbox-list-data',
  default: [],
})

const inboxSearchValue = atom({
  key: 'inbox-search-value',
  default: '',
})

const inboxDetailData = atom({
  key: 'inbox-detail-data',
  default: {},
})

const taskListData = atom({
  key: 'task-list-data',
  default: [],
})

export {
  quicksOpen, 
  quicksActive, 
  inboxOpen, 
  inboxListData, 
  inboxSearchValue,
  inboxDetailData, 
  taskListData
}