import ImageIMac from '../assets/imac.webp'
import React from 'react'

export default function MainBlock() {
  return (
    <section className={`mx-48 flex flex-row justify-center gap-48`}>
      <nav className={`flex flex-col gap-8 text-xl font-medium text-[#FFFFFF]`}>
        <a href={`/blog`}>技術網誌</a>
        <a href={`#services`}>服務類型</a>
        <a href={`#product`}>產品專案</a>
        <a href={`#technique`}>技術領域</a>
        <a href={`#team`}>團隊成員</a>
      </nav>
      <img
        src={ImageIMac}
        className={`w-[768px]`}
        alt={`write an email to $_purefunc`}/>
    </section>
  )
}
