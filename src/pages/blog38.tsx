
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog38() {
  const content = `
### 🏞 縮圖

### ⛓ 原文
* https://fikku.com/111920

### 📜 節錄
* 歐洲議會頒布的 2023/970 號指令，又稱薪資透明法，已實施一年。根據這項法律，所有公司都必須公開所有員工的薪資範圍。換句話說，您將可以知道您的同事是否因做相同的工作而獲得與您相同的薪資。
* 這個措施的目標是強化歐盟指令，促進男女同工同酬，將性別薪酬差距控制在 5% 以內，相較於目前歐洲平均的 13% 差距有顯著改善。該法於 2023 年 6 月生效，但實施進程將根據公司員工數量逐步推行，預計於 2026 年 6 月全面實施。

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
