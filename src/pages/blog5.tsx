import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog5() {
  const content = `
### 🏞 圖片 (引用自 mkrl GitHub Repo
* [https://github.com/mkrl/misbrands](https://github.com/mkrl/misbrands)
![68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f45433573495363576b41495553656e3f666f726d61743d706e67266e616d653d39303078393030](https://github.com/PureFuncInc/purefunc-net/assets/6296280/74b3c6c2-4d4b-4f45-bad8-0d006e553a83)

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
