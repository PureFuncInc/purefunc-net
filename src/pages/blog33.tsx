
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog33() {
  const content = `
### 🏞 縮圖

### ⛓ 原文
* https://ruddyblog.wordpress.com/2022/11/14/api-first-%E7%9A%84%E7%AD%96%E7%95%A5%E8%88%87%E6%9E%B6%E6%A7%8B/

### 📜 心得
* Andrew 哥在 DevOps Taipei 分享這個之後 https://devopsdays.tw/session-page/1165
* 他也去保哥那邊分享了一下 https://www.youtube.com/watch?v=xDMTP2OVROo
* 現在換 Ruddy 老師講惹


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
