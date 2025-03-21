import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog1() {
  const content = `
### 🏞 縮圖 (AI 生成
![DALL·E 2024-06-16 16 51 45 - A vibrant thumbnail for a blog post about an Intellij IDEA plugin introduction  The image features the Intellij IDEA logo prominently along with icons](https://github.com/PureFuncInc/purefunc-net/assets/6296280/6db7d09f-35b6-4534-a13e-0000acf646b9)

### 📜 心得
* JetBrains更新概覽
  * [https://www.jetbrains.com/idea/whatsnew/2020-1](https://www.jetbrains.com/idea/whatsnew/2020-1)
  * [https://www.jetbrains.com/idea/whatsnew/2020-2](https://www.jetbrains.com/idea/whatsnew/2020-2)
  * [https://www.jetbrains.com/idea/whatsnew/2020-3](https://www.jetbrains.com/idea/whatsnew/2020-3)
  * [https://www.jetbrains.com/idea/whatsnew/2021-1](https://www.jetbrains.com/idea/whatsnew/2021-1)
  * [https://www.jetbrains.com/idea/whatsnew/2021-2](https://www.jetbrains.com/idea/whatsnew/2021-2)
  * [https://www.jetbrains.com/idea/whatsnew/2021-3](https://www.jetbrains.com/idea/whatsnew/2021-3)
  * [https://www.jetbrains.com/idea/whatsnew/2022-1](https://www.jetbrains.com/idea/whatsnew/2022-1)
  * [https://www.jetbrains.com/idea/whatsnew/2022-2](https://www.jetbrains.com/idea/whatsnew/2022-2)
  * [https://www.jetbrains.com/idea/whatsnew/2022-3](https://www.jetbrains.com/idea/whatsnew/2022-3) 
* 我通常會在當年快結束的時候才升上來最新版，所以我之前都是用 2021.3
* 現在年底了，前幾天升到 2022.3，整體來說十分有感
* 如果你也有花錢買的話，好好善用是很重要的一件事喔
* 非常 common 的點我就不會提出來講，畢竟 IDE 本體功能與框架支援就是要不斷進步的。我只提一些特別的東西，如果你也有看到其他的部分歡迎反饋給我唷
  * JetBrains Mono 這個字型很棒，推薦給你們
  *  不再Spring獨大，Quarkus的支援度也在跟上
  *  XXX as Code 的精神再發揚光大，越來越多東西可以 export 進版控 (.run, http)
  *  Code With Me 太猛了
  *  HTTP Client 的進步非常明顯，最新版甚至有 Server Sent Event 跟 WebSocket, GraphQL, gRPC, Binary Stream
  *  雖然我不會這樣用，但 Kubernetes 的支援度進步也非常明顯
  *  UML class diagrams，可以讓你快速產出然後拿去外面的工具修修改改
  *  New Intellij IDEA UI，超像 VSCode
  *  Database Tool Window 終於 Support Redis 拉！
  * QA 相關的功能進步也非常明顯，果然也順勢出了一個專用的IDE，Aqua
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
