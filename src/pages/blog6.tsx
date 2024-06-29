
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog6() {
  const content = `
### 🏞 圖片
![313303801_2154354821410368_3058987036937306303_n](https://github.com/PureFuncInc/purefunc-net/assets/6296280/72a39370-c29b-4ec6-aa5f-553d7d54a6e4)

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
