
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog23() {
  const content = `
### 🏞 縮圖

### ⛓ 原文
* https://www.facebook.com/groups/DevOpsTaiwan/permalink/5635453203208346/

### 📜 心得
* 2015 年它還是這個樣子，但後來怎麼歪掉XD

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
