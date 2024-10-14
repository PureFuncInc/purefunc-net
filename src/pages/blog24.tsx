import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog24() {
  const content = `
### 🏞 縮圖
![DALL·E 2024-09-01 12 30 41 - A humorous meme-style image featuring three characters_ Windows, ARM, and Intel  The Windows character looks confident and is pointing towards ARM, sm](https://github.com/user-attachments/assets/223e5b74-68fd-4f0d-a949-12e01f2ef1d1)

### ⛓ 原文
* https://www.jeffgeerling.com/blog/2022/testing-microsofts-windows-dev-kit-2023

### 📜 心得
* 回頭看這篇文章真的是 QQ

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
