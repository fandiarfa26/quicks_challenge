const fakeInboxListData = [
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
];

const fakeGroupInboxDetailData = {
  id: '1',
  title: 'I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]',
  participants: 3,
  has_read: false,
  is_connecting: false,
  messages_by_date: [
    {
      date_text: 'June 08, 2021',
      messages: [
        {
          id: 'm1',
          user: 'Mary Hilda',
          text: 'Just Fill me in for his updates yea?',
          time: '19:32',
          is_new: false,
        },
        {
          id: 'm2',
          user: 'You',
          text: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
          time: '19:32',
          is_new: false,
        },
      ]
    },
    {
      date_text: 'June 09, 2021',
      messages: [
        {
          id: 'm3',
          user: 'Mary Hilda',
          text: 'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
          time: '19:32',
          is_new: false,
        },
        {
          id: 'm4',
          user: 'You',
          text: 'Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.',
          time: '19:32',
          is_new: false,
        },
        {
          id: 'm5',
          user: 'Mary Hilda',
          text: 'Sure thing, Claren',
          time: '19:32',
          is_new: false,
        },
        {
          id: 'm6',
          user: 'Obaidullah Amarkhil',
          text: 'Morning. I’ll try to do them. Thanks',
          time: '19:32',
          is_new: true,
        },
      ]
    },
  ],
}

const fakeSingleInboxDetailData = {
  id: '1',
  title: 'FastVisa Support',
  participants: 2,
  has_read: true,
  is_connecting: true,
  messages_by_date: [
    {
      date_text: 'June 07, 2021',
      messages: [
        {
          id: 'm7',
          user: 'FastVisa Support',
          text: 'Hey there. Welcome to your inbox! Contact us for more information and help about anything! We’ll send you a response as soon as possible.',
          time: '19:32',
          is_new: false,
        },
        {
          id: 'm8',
          user: 'You',
          text: 'Hi, I need help with something can you help me ?',
          time: '19:32',
          is_new: false,
        },
      ]
    },
  ],
}

const fakeTaskListData = [
  {
    id: '1',
    title: 'Close off Case #012920- RODRIGUES, Amiguel',
    date: '12/11/2022',
    description: 'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!',
    is_checked: false,
  },
  {
    id: '2',
    title: 'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203',
    date: '14/11/2022',
    description: 'All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.',
    is_checked: false,
  },
  {
    id: '3',
    title: 'Set up appointment with Dr Blake',
    date: '22/11/2022',
    description: '',
    is_checked: false,
  },
  {
    id: '4',
    title: 'Contact Mr Caleb - video conference?',
    date: '03/06/2021',
    description: '',
    is_checked: true,
  },
  {
    id: '5',
    title: 'Assign 3 homework to Client A',
    date: '02/06/2021',
    description: '',
    is_checked: true,
  },
]


export {fakeInboxListData, fakeGroupInboxDetailData, fakeSingleInboxDetailData, fakeTaskListData}