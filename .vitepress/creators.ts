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
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const creatorAvatars: Record<string, string> = {}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creators[] = [
  {
    name: '絢香猫',
    avatar: creatorAvatars.nekomeowww,
    username: 'nekomeowww',
    title: 'Nólëbase 原始创作者',
    desc: '开发者，专注于基础设施维护，数据分析，后端、DevOps 开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/nekomeowww' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/ayakaneko' },
    ],
    nameAliases: ['nekomeowww', '绚香猫', '絢香猫', 'Neko Ayaka', 'Ayaka Neko'],
    emailAliases: ['neko@ayaka.moe'],
  },
  {
    name: '絢香音',
    avatar: creatorAvatars.LittleSound,
    username: 'LittleSound',
    title: 'Nólëbase 原始创作者',
    desc: '开源开发者，专注于前端，以及前端相关工具库和工具链开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/LittleSound' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/OikawaRizumu' },
    ],
    nameAliases: ['LittleSound', '绚香音', '絢香音', 'Rizumu Oikawa', 'Rizumu Ayaka', 'Ayaka Rizumu', 'Rizumu'],
    emailAliases: ['rizumu@ayaka.moe', 'rizumu@oqo.moe'],
  },
]

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')

export const users = creatorUsernames
  .reduce<UserAvatar[]>((acc, name) => {
    creatorAvatars[name] = getAvatarUrl(name)
    acc.push({ name, avatar: creatorAvatars[name] })

    return acc
  }, [])
  .filter(item => !!item.name)
