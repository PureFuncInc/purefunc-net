
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog46() {
  const content = `
### 🏞 縮圖

### ⛓ 原文
* https://blog.gslin.org/archives/2022/08/26/10861/%E7%B6%B2%E9%A0%81%E5%A4%A7%E5%B0%8F-14kb-%E8%88%87-15kb-%E7%9A%84%E9%80%9F%E5%BA%A6%E5%B7%AE%E7%95%B0/

### 📜 心得
*

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
