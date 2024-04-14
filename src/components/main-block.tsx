import ImageIMac from '../assets/imac.webp'
import React from 'react'

export default function MainBlock() {
  return (
    <section className={`mx-48 flex flex-row justify-between gap-4`}>
      <nav className={`flex flex-col gap-8 text-lg font-medium text-[#FFFFFF]`}>
        <a href={`/blog`}>技術網誌</a>
        <a href={`#services`}>服務類型</a>
        <a href={`#product`}>產品專案</a>
        <a href={`#technique`}>技術領域</a>
        <a href={`#team`}>團隊成員</a>
      </nav>
      <div className={`flex flex-col items-start justify-center gap-8`}>
        <h1 className={`text-6xl font-bold text-purefunc-2`}>
          程式系統 免費諮詢
        </h1>
        <p className={`text-2xl font-medium text-purefunc-2`}>
          讓我們一起為您的夢想加速！
        </p>
        <a
          href={`#contact`}
          className={`rounded-xl border-2 border-[#FFFFFF] px-4 py-2 text-[#FFFFFF]`}>
          聯絡我們
        </a>
      </div>
      <img
        src={ImageIMac}
        className={`w-[512px]`}
        alt={`write an email to $_purefunc`}/>
    </section>
  )
}
