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
        <span>部落格</span>
        <span>技術棧</span>
        <span>我們的服務</span>
        <span>領域</span>
        <span>FAQ</span>
        <span>產品</span>
        <span>團隊</span>
        <button className={`py-1 px-2 border-gray-500 border-2 rounded-xl`}>Contact Us</button>
      </nav>
      <section className={`flex flex-wrap gap-8 mx-auto items-center justify-center`}>
        <div className={`flex flex-col gap-2`}>
          <h1 className={`text-4xl font-bold`}>$_purefunc</h1>
          <span className={`flex flex-col items-end`}>
            <p className={`text-lg font-medium`}>Software Development Company</p>
            <p className={`text-sm`}>2021.10.26 ~</p>
          </span>
        </div>
        <img src={imac} className={`w-[360px]`}></img>
      </section>
      <section className={`flex flex-col mx-auto`}>
        <h2 className={`text-lg font-medium`}>技術棧</h2>
        <div className={`w-[360px] h-[90px] bg-gray-400`}>
        </div>
      </section>
      <section className={`flex flex-col mx-auto`}>
        <h2 className={`text-lg font-medium`}>我們的服務</h2>
        <div className={`w-[360px] h-[90px] bg-gray-400`}>
        </div>
      </section>
      <section className={`flex flex-col mx-auto`}>
        <h2 className={`text-lg font-medium`}>領域</h2>
        <div className={`w-[360px] h-[90px] bg-gray-400`}>
        </div>
      </section>
      <section className={`flex flex-col mx-auto`}>
        <h2 className={`text-lg font-medium`}>FAQ</h2>
        <div className={`w-[360px] h-[90px] bg-gray-400`}>
        </div>
      </section>
      <section className={`flex flex-col mx-auto`}>
        <h2 className={`text-lg font-medium`}>產品</h2>
        <div className={`w-[360px] h-[90px] bg-gray-400`}>
        </div>
      </section>
      <section className={`flex flex-col mx-auto`}>
        <h2 className={`text-lg font-medium`}>聯絡我們</h2>
        <div className={`w-[360px] h-[90px] bg-gray-400`}>
        </div>
      </section>
      <footer className={`pt-2 pb-4 text-gray-400 mx-auto text-sm border-t border-gray-400`}>
        Copyright &copy; 2021-{(new Date()).getFullYear()} PureFunc Co., Ltd. All Rights Reserved.
      </footer>
    </div>
  )
}
