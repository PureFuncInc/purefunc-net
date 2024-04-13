import React from 'react'
import ImageIMac from './assets/imac.webp'
import ImageNavyLogo from './assets/purefunc_navy.webp'
// import { FaBars } from 'react-icons/fa6'

import TeamBlock from './components/team-block'
import FooterBlock from './components/footer-block'
import ContactBlock from './components/contact-block'
import ProductBlock from './components/product-block'
import TechniqueBlock from './components/technique-block'



export default function App() {
  return (
    <div className={`flex w-full flex-col gap-16`}>
      <header className={`mt-8 flex flex-row items-center mx-8`}>
        <a
          href={`/`}
          className={`mx-auto`}>
          <img
            src={ImageNavyLogo}
            alt={`$_purefunc Navy Logo`}
            width={200}
            height={60}/>
        </a>
        <a
          href={`#contact`}
          className={`text-[#FFFFFF] -ml-[100px] border-2 border-white rounded-xl py-2 px-4`}>
          聯絡我們
        </a>
      </header>
      <section className={`flex flex-row gap-4 justify-between mx-48`}>
        <nav className={`flex flex-col text-[#FFFFFF] gap-8 text-lg font-medium`}>
          <a href={`/blog`}>技術網誌</a>
          <a href={`#services`}>服務類型</a>
          <a href={`#product`}>產品專案</a>
          <a href={`#technique`}>技術領域</a>
          <a href={`#team`}>團隊成員</a>
        </nav>
        <div className={`flex flex-col gap-8 items-start justify-center`}>
          <h1 className={`text-purefunc-2 text-6xl font-bold`}>
            程式系統 免費諮詢
          </h1>
          <p className={`text-purefunc-2 text-2xl font-medium`}>
            讓我們一起為您的夢想加速！
          </p>
          <a
            href={`#contact`}
            className={`text-[#FFFFFF] border-2 border-white rounded-xl py-2 px-4`}>
            聯絡我們
          </a>
        </div>
        <img
          src={ImageIMac}
          className={`w-[512px]`}
          alt={`write an email to $_purefunc`}/>
      </section>
      <section className={`flex flex-col`}>
        <h2
          id={`services`}
          className={`text-purefunc-1 h-0`}>
          SERVICES
        </h2>
        <div className={`mx-8 flex flex-wrap justify-center gap-4`}>
          <div className={`flex flex-col lg:w-[300px]`}>
            <p>CONSULTING SERVICE</p>
            <p>超過十載產業耕耘的菁英團隊，擁有多元技術實力與豐沛實作經驗，涵蓋前端、後端、行動端、系統架構、DevOps
              與自動化測試等領域。我們提供全方位的顧問諮詢服務，為客戶打造最佳化的科技解決方案。 </p>
          </div>
          <div className={`flex flex-col lg:w-[300px]`}>
            <p>CUSTOM APP DEVELOPMENT</p>
            <p>專精跨平台混合應用程式開發，著重 React Native 和 Flutter 等技術。高度重視客戶需求，全面考量最優方案，如視情況以 Progressive Web App
              取代行動應用程式。</p>
          </div>
          <div className={`flex flex-col lg:w-[300px]`}>
            <p>CUSTOM SYSTEM DEVELOPMENT</p>
            <p>提供客製化的系統開發服務，我們的專業團隊涵蓋各種領域，能全面協助客戶從規劃、分析、設計、實作到維運。不僅能節省客戶的時間，更降低整體成本。</p>
          </div>
        </div>
      </section>

      <ProductBlock/>

      <TechniqueBlock />

      <TeamBlock/>

      <ContactBlock/>

      <FooterBlock/>
    </div>
  )
}
