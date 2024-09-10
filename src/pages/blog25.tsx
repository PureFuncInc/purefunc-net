
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog25() {
  const content = `
### 🏞 縮圖
![](https://www.comedywildlifephoto.com/images/wysiwyg/images/2020_winners/mark_fitzpatrick.jpg)

### ⛓ 原文
* https://www.comedywildlifephoto.com/

### 📜 心得
* 這算是 news 還是 meme XDD

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
