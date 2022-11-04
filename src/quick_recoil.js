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

const inboxDetailIsGroup = atom({
  key: 'inbox-detail-is-group',
  default: false
})

const inboxDetailData = atom({
  key: 'inbox-detail-data',
  default: {},
})

const messageMoreHorizOpenId = atom({
  key: 'message-is-more-horiz-open',
  default: '' 
})

const messageIsEditOrReply = atom({
  key: 'message-is-edit-or-reply',
  default: {
    id: '',
    user: '',
    text: '',
    type: 'edit', // edit or reply
    status: false,
  }
})

const messageText = atom({
  key: 'message-text',
  default: ''
})

const taskListData = atom({
  key: 'task-list-data',
  default: [],
})

const taskMoreHorizOpenId = atom({
  key: 'task-is-more-horiz-open',
  default: '' 
})

const taskTagsOpenId = atom({
  key: 'task-tags-open-id',
  default: '',
})

export {
  quicksOpen, 
  quicksActive, 
  inboxOpen, 
  inboxListData, 
  inboxSearchValue,
  inboxDetailIsGroup,
  inboxDetailData, 
  messageMoreHorizOpenId,
  messageIsEditOrReply,
  messageText,
  taskListData,
  taskMoreHorizOpenId,
  taskTagsOpenId
}