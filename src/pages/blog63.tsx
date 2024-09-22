
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog63() {
  const content = `
### 🏞 縮圖

### 📜 心得
* https://www.techempower.com/benchmarks
* https://db-engines.com/en/ranking
* https://www.tiobe.com/tiobe-index/
* https://www.thoughtworks.com/radar
* https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard
* https://artificialanalysis.ai/leaderboards/models
* https://github.com/EvanLi/Github-Ranking#most-stars

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
