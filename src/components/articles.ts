export interface Article {
    number: number
    title: string
    createdAt: string
}

export const Articles: Article[] = [
    {
        number: 4,
        title: 'ICQ 將終止營運',
        createdAt: '2024-06-15T09:49:35Z',
    },
    {
        number: 3,
        title: 'Google 搜尋引擎內部 API 文件外洩',
        createdAt: '2024-06-15T09:24:55Z',
    },
    {
        number: 2,
        title: 'Cash 哥的工程師必備',
        createdAt: '2024-06-12T15:19:52Z',
    },
    {
        number: 1,
        title: '整理了 Intellij IDEA 2020 到 2022 年底的一些更新',
        createdAt: '2024-06-08T14:09:11Z',
    },
]
