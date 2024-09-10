
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog31() {
  const content = `
### 🏞 縮圖

### ⛓ 原文
* https://medium.com/@jakarta99/%E7%B5%A6-java-%E6%96%B0%E6%89%8B%E7%9A%84%E4%B8%80%E5%B0%81%E4%BF%A1-2022-%E7%89%88-cc1753c927fd

### 📜 心得
* Jini 哥，松凌科技老闆分享給大家的一些心得

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
