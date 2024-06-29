
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog16() {
  const content = `
### 🏞 縮圖

### ⛓ 原文
* [https://columns.chicken-house.net/2022/10/26/apifirst/](https://columns.chicken-house.net/2022/10/26/apifirst/)

### 📜 心得
* Andrew 哥的大作，讓我們一起來細細品嚐
* 網誌內還有很多很棒的內容，想成為架構師的你可別錯過

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
