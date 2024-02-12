export type PresetUserId = 'system' | 'guest'

export type Speech = {
  speechId: string
  contentText: string
}

export type Note = {
  noteId: string
  userId: PresetUserId
  speeches: Speech[]
}

export type UserInfo = {
  userId: PresetUserId
  userName: string
  avatarUrl: string
}

const systemUserInfo: UserInfo = {
  userId: 'system',
  userName: 'システム',
  avatarUrl: 'https://i.imgur.com/T0tRUip.png'
}

const guestUserInfo: UserInfo = {
  userId: 'guest',
  userName: 'ユーザー1',
  avatarUrl: 'https://i.imgur.com/zOObGW1.png'
}

const presetUserInfos = {
  system: systemUserInfo,
  guest: guestUserInfo
}

const systemUserNotes: Note[] = [
  {
    noteId: '00020',
    userId: 'system',
    speeches: [
      { speechId: '00021', contentText: 'aaa' },
      { speechId: '00022', contentText: 'bbb' }
    ]
  },
  {
    noteId: '00010',
    userId: 'system',
    speeches: [
      { speechId: '00011', contentText: 'hello' },
      { speechId: '00012', contentText: 'world' }
    ]
  }
]

const fallbackNote: Note = {
  noteId: '',
  userId: 'system',
  speeches: []
}

export const presetDataProvider = {
  allUsers: [systemUserInfo, guestUserInfo],
  systemUserNotes,
  presetUserInfos,
  fallbackNote
}
