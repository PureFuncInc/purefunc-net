import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog17() {
  const content = `
### 🏞 圖片
![316950322_534535748686891_151989603755949326_n](https://github.com/PureFuncInc/purefunc-net/assets/6296280/364a0d0b-be9e-4469-ab58-e70eaf251683)

###
* this image is sooooooooooo cute
* 對於 theme 有興趣的朋友也可以參考 [https://plugins.jetbrains.com/search?tags=Theme](https://plugins.jetbrains.com/search?tags=Theme)
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
