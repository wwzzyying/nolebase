const creatorNames = ['wwzzyying']

export interface UserAvatar {
  name: string
  avatar: string
}

export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creators {
  avatar: string
  name: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const creatorAvatars: Record<string, string> = {}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const users = creatorNames.reduce((acc, name) => {
  creatorAvatars[name] = getAvatarUrl(name)
  acc.push({ name, avatar: creatorAvatars[name] })
  return acc
}, [] as UserAvatar[])

const creators: Creators[] = [
  {
    name: 'wwzzyying',
    avatar: creatorAvatars.wwzzyying,
    title: 'Nólëbase 创作者',
    desc: '大前端开发, 专注移动端原生、跨端以及前端开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/wwzzyying' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/wwzzyying' },
    ],
    nameAliases: ['wuzhiying', 'zhiying', 'ying'],
    emailAliases: ['wuzhiying11@gmail.com'],
  },
]

export { creators }
