export interface Article {
  number: number
  title: string
  labels: string[]
  createdAt: string
}

export const Articles: Article[] = [
  {
    number: 25,
    title: '動物表情攝影大賽',
    labels: ['news'],
    createdAt: '2024-09-01T04:15:59Z',
  },
  {
    number: 24,
    title: 'Windows 要出 ARM 版本',
    labels: ['news'],
    createdAt: '2024-09-01T04:14:50Z',
  },
  {
    number: 19,
    title: 'How to Turn Your iPhone Screen Red',
    labels: ['reference'],
    createdAt: '2024-08-31T17:40:02Z',
  },
  {
    number: 13,
    title: 'GitHub 個人頁的美化',
    labels: ['self'],
    createdAt: '2024-06-16T03:28:43Z',
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
  }
]
