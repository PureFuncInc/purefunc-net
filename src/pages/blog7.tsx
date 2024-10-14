import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog7() {
  const content = `
### 🏞 縮圖
![2aa009b7-4910-4aba-bd73-6a034f798712_1000x1333](https://github.com/PureFuncInc/purefunc-net/assets/6296280/6620a444-4e65-44ef-81bb-19bd5841e7e5)

### 📜 心得
* [https://news.tonydinh.com/](https://news.tonydinh.com/) DevUtils.app 的作者，之前有許多關於他的傳奇故事，有興趣的可以網上搜搜
* 是一個值得借鏡的工程師自力更生、一人公司的範本

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
