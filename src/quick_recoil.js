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
  default: [
    {
      id: '1',
      title: '109220-Naturalization',
      datetime: '01/01/2021 19:10',
      new_message: {
        user: 'Cameron Phillips',
        text: 'Please check this out!'
      },
      participants: 3,
      has_read: false,
    },
    {
      id: '2',
      title: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
      datetime: '02/06/2021 10:45',
      new_message: {
        user: 'Ellen',
        text: 'Hey, please read.'
      },
      participants: 3,
      has_read: true,
    },
    {
      id: '3',
      title: '8405-Diana SALAZAR MUNGUIA',
      datetime: '01/06/2021 12:19',
      new_message: {
        user: 'Cameron Phillips',
        text: 'I understand your initial concerns and thats very valid, Elizabeth. But you bla bla bla bla bla bla bla bla'
      },
      participants: 3,
      has_read: true,
    },
    {
      id: '4',
      title: 'FastVisa Support',
      datetime: '01/06/2021 12:19',
      new_message: {
        user: 'FastVisa Support',
        text: 'Hey there! Welcome to your inbox.'
      },
      participants: 2,
      has_read: true,
    },
  ],
})

export {quicksOpen, quicksActive, inboxOpen, inboxListData}