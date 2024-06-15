export interface Article {
  number: number
  title: string
  labels: string[]
  createdAt: string
}

export const Articles: Article[] = [
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
