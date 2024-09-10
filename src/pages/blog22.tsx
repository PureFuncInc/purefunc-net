
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog22() {
  const content = `
### 🏞 縮圖

### ⛓ 原文
* https://learning.postman.com/docs/sending-requests/capturing-request-data/capturing-http-requests/

### 📜 心得
* API 測試的簡單手法之一，一鍵簡單重放攻擊XD

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
