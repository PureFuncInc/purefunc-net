import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog3() {
  const content = `
### 🏞 縮圖
![DALL·E 2024-06-16 17 01 24 - A news-themed thumbnail showing a computer screen with a search engine displayed, documents beside it, and a person's hand leaking the documents  The ](https://github.com/PureFuncInc/purefunc-net/assets/6296280/3cca3dc5-9255-49cb-a501-0c9c51459d25)

### ⛓ 原文
* [Google 承認搜尋引擎內部 API 文件洩漏了？](https://blog.gslin.org/archives/2024/06/01/11826/google-%e6%89%bf%e8%aa%8d%e6%90%9c%e5%b0%8b%e5%bc%95%e6%93%8e%e5%85%a7%e9%83%a8-api-%e6%96%87%e4%bb%b6%e6%b4%a9%e6%bc%8f%e4%ba%86%ef%bc%9f/)

### 📜 心得
* 男人的嘴騙人的鬼，科技巨頭也是一樣
* 不要看他說了什麼，要看他們做了什麼 😏 
`

  return (
    <div className={`flex w-full flex-col gap-16`}>
      <HeaderBlock theme={`light`} />
      <article className={`mx-auto`}>
        <Markdown className={`prose lg:prose-lg xl:prose-xl`}>{content}</Markdown>
      </article>
      <FooterBlock theme={`light`} />
    </div>
  )
}
