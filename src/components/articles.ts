export interface Article {
  number: number
  title: string
  labels: string[]
  createdAt: string
}

export const Articles: Article[] = [
  {
    number: 15,
    title: 'Line TW 內部分享演講的投影片專區',
    labels: ['self','draft'],
    createdAt: '2024-06-16T08:48:25Z',
  },
  {
    number: 14,
    title: '分享自己常用的 JetBrains Plugins',
    labels: ['self','draft'],
    createdAt: '2024-06-16T08:47:17Z',
  },
  {
    number: 13,
    title: 'GitHub 個人頁的美化',
    labels: ['self'],
    createdAt: '2024-06-16T03:28:43Z',
  },
  {
    number: 12,
    title: '有夠淘氣',
    labels: ['self','draft'],
    createdAt: '2024-06-16T03:26:48Z',
  },
  {
    number: 11,
    title: '整理了 20 年以來一些鐵人賽的得獎名單',
    labels: ['self','draft'],
    createdAt: '2024-06-16T03:24:46Z',
  },
  {
    number: 10,
    title: '技術封建主義',
    labels: ['self','draft'],
    createdAt: '2024-06-16T03:20:58Z',
  },
  {
    number: 9,
    title: '把 GitHub Issues 當作簡單的 CRM 使用',
    labels: ['self','draft'],
    createdAt: '2024-06-16T02:52:19Z',
  },
  {
    number: 8,
    title: '真。實體開單',
    labels: ['meme'],
    createdAt: '2024-06-15T18:18:26Z',
  },
  {
    number: 7,
    title: 'DevUtils.app 的作者與他的故事',
    labels: ['self'],
    createdAt: '2024-06-15T18:13:20Z',
  },
  {
    number: 6,
    title: '真。章魚貓',
    labels: ['meme'],
    createdAt: '2024-06-15T18:05:11Z',
  },
  {
    number: 5,
    title: 'misbrands',
    labels: ['meme'],
    createdAt: '2024-06-15T18:01:53Z',
  },
  {
    number: 4,
    title: 'ICQ 將終止營運',
    labels: ['news'],
    createdAt: '2024-06-15T09:49:35Z',
  },
  {
    number: 3,
    title: 'Google 搜尋引擎內部 API 文件外洩',
    labels: ['reference'],
    createdAt: '2024-06-15T09:24:55Z',
  },
  {
    number: 2,
    title: 'Cash 哥的工程師必備',
    labels: ['reference'],
    createdAt: '2024-06-12T15:19:52Z',
  },
  {
    number: 1,
    title: '整理了 Intellij IDEA 2020 到 2022 年底的一些更新',
    labels: ['self'],
    createdAt: '2024-06-08T14:09:11Z',
  },
]
