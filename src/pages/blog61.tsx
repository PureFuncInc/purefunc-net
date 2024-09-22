
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog61() {
  const content = `
### 🏞 縮圖

### ⛓ 原文
* https://qrtt1.medium.com/gaas-game-alles-kase-754b2160d027
* https://qrtt1.medium.com/gaas-walking-skeleton-194e5fcc6b27

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
