import {atom} from 'recoil'
import { fakeList } from './fake_data'

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
  key: 'task-more-horiz-open-id',
  default: '' 
})

const taskTagsOpenId = atom({
  key: 'task-tags-open-id',
  default: '',
})

const taskEditTitleId = atom({
  key: 'task-edit-title-id',
  default: ''
})

const taskEditDescId = atom({
  key: 'task-edit-desc-id',
  default: ''
})

const taskDateOpenId = atom({
  key: 'task-date-open-id',
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
  taskTagsOpenId,
  taskEditTitleId,
  taskEditDescId,
  taskDateOpenId
}