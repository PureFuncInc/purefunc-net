import React from 'react'
import logo from './assets/purefunc_black.webp'
import imac from './assets/imac.webp'

export default function App() {
  return (
    <div className={`flex flex-col gap-8 font-mono`}>
      <nav className={`flex flex-wrap gap-4 py-2 items-center justify-center`}>
        <a href={`/`}>
          <img
            src={logo}
            className={`w-6 h-6`}
            alt="logo"></img>
        </a>
        <span>技術棧</span>
        <span>我們的服務</span>
        <span>領域</span>
        <span>FAQ</span>
        <span>產品</span>
        <span>團隊</span>
        <button className={`py-1 px-2 border-gray-500 border-2 rounded-xl`}>Contact Us</button>
      </nav>
      <section className={`flex flex-wrap gap-8 mx-auto justify-center`}>
        <div className={`flex flex-col gap-2 justify-center`}>
          <h1 className={`text-4xl font-bold`}>$_purefunc</h1>
          <span className={`flex flex-col items-end`}>
          <p className={`text-lg font-medium`}>Software Development Company</p>
          <p className={`text-sm`}>2021.10.26 ~</p>
        </span>
        </div>
        <img src={imac} className={`w-[360px]`}></img>
      </section>
      <section className={`flex flex-col items-center`}>
        <h2>技術棧</h2>
      </section>
      <section className={`flex flex-col items-center`}>
        <h2>我們的服務</h2>
      </section>
      <section className={`flex flex-col items-center`}>
        <h2>領域</h2>
      </section>
      <section className={`flex flex-col items-center`}>
        <h2>FAQ</h2>
      </section>
      <section className={`flex flex-col items-center`}>
        <h2>產品</h2>
      </section>
      <section className={`flex flex-col items-center`}>
        <h2>聯絡我們</h2>
      </section>
    </div>
  )
}
