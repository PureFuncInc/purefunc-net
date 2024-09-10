
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog37() {
  const content = `
### 🏞 縮圖

### ⛓ 原文
* https://technews.tw/2022/10/31/redditor-acquires-decommissioned-netflix-cache-server-with-262tb-of-storage/

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
