import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog4() {
  const content = `
### 🏞 縮圖 (AI 生成
![339972336-619ad654-965a-4a63-bd55-14b0c1105679](https://github.com/PureFuncInc/purefunc-net/assets/6296280/228fdd51-68fa-4a33-aeb1-d840bad4ef4d)

### ⛓ 原文
* [https://www.ithome.com.tw/news/163118](https://www.ithome.com.tw/news/163118)

### 📜 心得
* 其實這不是我年代的東西，應該是我國小時有看叔叔阿姨們用過
* 我第一個使用的應該是 Yahoo 即時通，然後後來是 MSN Messanger


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
