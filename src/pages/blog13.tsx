import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog13() {
  const content = `
### 🏞 縮圖
![340063358-c32e50e3-2ec0-4c6d-a1dc-5a1e1de1d7ee](https://github.com/PureFuncInc/purefunc-net/assets/6296280/43d4d0bf-df51-44c3-84be-5e157b9878a0)

### 📜 心得
* [https://github.com/WeiYun0912/WeiYun0912](https://github.com/WeiYun0912/WeiYun0912)
* 同場加映保哥 [https://github.com/doggy8088](https://github.com/doggy8088)

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
