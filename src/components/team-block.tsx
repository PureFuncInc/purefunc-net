import React from 'react'
import Member from './member'

export default function TeamBlock() {
  return (
    <section className={`mx-auto flex flex-col items-center 2xl:mx-36`}>
      <h2
        id={`team`}
        className={`h-0 text-purefunc-1`}>
        MEMBERS
      </h2>
      <div className={`flex flex-wrap justify-center gap-8`}>
        <Member
          name={`Wade, CEO`}
          description={`除程式開發外，特別擅長各種自動化測試，包括網頁應用程式和雙平台手機應用程式的測試。`} />
        <Member
          name={`Vincent`}
          description={`擁有多方面的專業技能，包括後端開發和DevOps。目前是 GDE 項目認證的 Kotlin 專家。`} />
        <Member
          name={`Nelson`}
          description={`擅長開發網頁應用程式，也擅長開發 React Native 和 Flutter 的手機應用程式。`} />
        <Member
          name={`Daniel`}
          description={`專注於遊戲開發領域，是一位技藝精湛的前端工程師和富有創造力的遊戲開發者。`} />
        <Member
          name={`Shawn`}
          description={`擁有多年的區塊鏈領域知識和實踐經驗，擅長各種去中心化應用程式的設計與開發。`} />
        <Member
          name={`Carlos`}
          description={`全端工程師，在網頁應用程式、手機應用程式和後端程式開發都有多年的開發經驗。`} />
      </div>
    </section>
  )
}
