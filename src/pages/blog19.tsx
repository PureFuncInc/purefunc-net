
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog19() {
  const content = `
### 🏞 縮圖
![IMG_0308](https://github.com/user-attachments/assets/d7a76fe4-12c2-420d-bbe1-25dad80dda7e)

### ⛓ 原文
* https://www.blockbluelight.co.uk/blogs/news/how-to-turn-your-iphone-screen-red

### 📜 心得
* 紅色真的蠻蘇湖的

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
