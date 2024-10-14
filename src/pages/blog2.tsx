import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog2() {
  const content = `
### 🏞 縮圖
![DALL·E 2024-06-16 16 56 53 - A modern workspace of a  NET software engineer  The scene includes a laptop with the  NET logo on the screen, surrounded by various tools and gadgets](https://github.com/PureFuncInc/purefunc-net/assets/6296280/30d0257c-4645-48fe-88fe-470780c1b502)

### ⛓ 原文
* [https://blog.cashwu.com/blog/must_for_engineers](https://blog.cashwu.com/blog/must_for_engineers)

### 📜 心得
* 在 91 公開課常看到的助教老哥，如果你也是寫 .NET 的好朋友不要錯過

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
