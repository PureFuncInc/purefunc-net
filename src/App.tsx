import React from 'react';

export default function App() {
  return (
    <div className={`flex flex-col`}>
      <nav className={`flex flex-row justify-between`}>
        <p>$_purefunc</p>
        <ul className={`flex flex-row gap-8`}>
          <li>技術棧</li>
          <li>我們的服務</li>
          <li>領域</li>
          <li>FAQ</li>
          <li>產品</li>
          <li>團隊</li>
        </ul>
        <button>Contact Us</button>
      </nav>
      <section className={`flex flex-col gap-8 pr-96 mx-auto`}>
        <h1 className={`text-6xl font-bold font-mono pt-48`}>$_purefunc</h1>
        <span className={`flex flex-col items-end`}>
          <p className={`text-3xl font-medium`}>Software Development Company</p>
          <p className={``}>- 2021.10.26</p>
        </span>
      </section>
    </div>
  )
}
