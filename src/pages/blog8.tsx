
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog8() {
  const content = `
### 🏞 圖片
* [https://github.com/yihong0618/blue](https://github.com/yihong0618/blue)
![196897891-a9474adc-9e60-4340-9406-736829639092](https://github.com/PureFuncInc/purefunc-net/assets/6296280/adf803b9-2c9b-4145-a753-7ae035d079d1)

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
