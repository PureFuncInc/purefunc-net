import React from 'react'
import ImageIMac from './assets/imac.webp'
import ImageBlackLogo from './assets/purefunc_black.webp'
import ImageNavyLogo from './assets/purefunc_navy.webp'
import { FaBars } from 'react-icons/fa6'
import ImageDaniel from './assets/team-daniel.webp'
import ImageWade from './assets/team-wade.webp'
import ImageCarlos from './assets/team-carlos.webp'
import ImageVincent from './assets/team-vincent.webp'
import ImageShawn from './assets/team-shawn.webp'
import ImageNelson from './assets/team-nelson.webp'
import ImagePheme from './assets/product-pheme.webp'
import ImageFooTinder from './assets/product-footinder.webp'
import ImageHanHuang from './assets/product-hanhuang.webp'
import WordCloud from 'react-d3-cloud'
import { SiDiscord, SiFacebook, SiGithub, SiGmail, SiLinkedin, SiYoutube } from 'react-icons/si'

const data = [
  { text: 'JavaScript', value: 1000 },
  { text: 'TypeScript', value: 1000 },
  { text: 'Dart', value: 1000 },
  { text: 'Java', value: 1000 },
  { text: 'Kotlin', value: 1000 },
  { text: 'Python', value: 1000 },
  { text: 'React.js', value: 1000 },
  { text: 'Vue.js', value: 1000 },
  { text: 'Next.js', value: 1000 },
  { text: 'Nuxt.js', value: 1000 },
  { text: 'Flutter', value: 1000 },
  { text: 'Spring Framework', value: 1000 },
  { text: 'FastAPI', value: 1000 },
  { text: 'Mobile Development', value: 1000 },
  { text: 'Web Development', value: 1000 },
  { text: 'Backend Development', value: 1000 },
  { text: 'Automation Testing', value: 1000 },
  { text: 'System Architecture', value: 1000 },
  { text: 'DevOps Engineering', value: 1000 },
]

export default function App() {
  return (
    <div className={`mx-auto flex w-[359px] flex-col gap-8 font-mono md:w-[752px] lg:w-[1008px]`}>
      <header className={`mt-4 flex flex-row items-center justify-center gap-2`}>
        <a
          href={`/`}
          className={`flex-1`}>
          <img
            src={ImageNavyLogo}
            alt={`$_purefunc Navy Logo`}
            width={100}
            height={30} />
        </a>
        <span className={`md:hidden`}>
          <FaBars size={24} />
        </span>
        <nav className={`hidden gap-4 md:flex md:flex-row`}>
          <a href={`/blog`}>部落格</a>
          <a href={`#services`}>服務類型</a>
          <a href={`#product`}>產品專案</a>
          <a href={`#technique`}>技術棧</a>
          <a href={`#team`}>團隊成員</a>
          <a href={`#contact`}>聯絡我們</a>
        </nav>
      </header>
      <section className={`flex flex-wrap items-center justify-center gap-4`}>
        <h1 className={`rounded-lg border-2 p-2`}>
          抓到了流星般的靈感嗎？免費諮詢，讓我們一起為您的夢想加速！
        </h1>
        <img
          src={ImageIMac}
          className={`w-80`}
          alt={`Consult Us`} />
      </section>
      <section className={`flex flex-col gap-2`}>
        <h2
          id={`services`}
          className={`border-b-2 pb-1 text-2xl`}>
          SERVICES
        </h2>
        <div className={`mx-8 flex flex-wrap justify-center gap-4`}>
          <div className={`flex flex-col lg:w-[300px]`}>
            <p>CONSULTING SERVICE</p>
            <p>超過十載產業耕耘的菁英團隊，擁有多元技術實力與豐沛實作經驗，涵蓋前端、後端、行動端、系統架構、DevOps 與自動化測試等領域。我們提供全方位的顧問諮詢服務，為客戶打造最佳化的科技解決方案。 </p>
          </div>
          <div className={`flex flex-col lg:w-[300px]`}>
            <p>CUSTOM APP DEVELOPMENT</p>
            <p>專精跨平台混合應用程式開發，著重 React Native 和 Flutter 等技術。高度重視客戶需求，全面考量最優方案，如視情況以 Progressive Web App 取代行動應用程式。</p>
          </div>
          <div className={`flex flex-col lg:w-[300px]`}>
            <p>CUSTOM SYSTEM DEVELOPMENT</p>
            <p>提供客製化的系統開發服務，我們的專業團隊涵蓋各種領域，能全面協助客戶從規劃、分析、設計、實作到維運。不僅能節省客戶的時間，更降低整體成本。</p>
          </div>
        </div>
      </section>
      <section className={`flex flex-col gap-2`}>
        <h2
          id={`product`}
          className={`border-b-2 pb-1 text-2xl`}>
          PRODUCTS
        </h2>
        <div className={`mx-8 flex flex-wrap justify-center gap-4`}>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImagePheme}
              className={`w-48 lg:w-36`}
              alt={`Pheme`} />
            <p>Pheme</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageHanHuang}
              className={`w-48 lg:w-36`}
              alt={`HanHuang`} />
            <p>HanHuang</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageFooTinder}
              className={`w-48 lg:w-36`}
              alt={`FooTinder`} />
            <p>FooTinder</p>
          </div>
          <div className={`flex flex-col items-center`}>
          <img
              src={ImageBlackLogo}
              className={`w-48 lg:w-36`}
              alt={`PureFunc Blockchain Wallet`} />
            <p>PBW</p>
          </div>
        </div>
      </section>
      <section className={`flex flex-col gap-2`}>
        <h2
          id={`technique`}
          className={`border-b-2 pb-1 text-2xl`}>
          TECHNIQUES
        </h2>
        <WordCloud
          data={data}
          height={200}
          rotate={0}
        />
      </section>
      <section className={`flex flex-col gap-2`}>
        <h2
          id={`team`}
          className={`border-b-2 pb-1 text-2xl`}>
          MEMBERS
        </h2>
        <div className={`mx-8 flex flex-wrap justify-center gap-4`}>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageWade}
              className={`w-48 lg:w-36`}
              alt={`Wade`} />
            Wade, CEO
            <p>#SDET</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageVincent}
              className={`w-48 lg:w-36`}
              alt={`Vincent`} />
            Vincent
            <p>#SRE</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageNelson}
              className={`w-48 lg:w-36`}
              alt={`Nelson`} />
            Nelson
            <p>#Mobile</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageDaniel}
              className={`w-48 lg:w-36`}
              alt={`Daniel`} />
            Daniel
            <p>#Frontend</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageShawn}
              className={`w-48 lg:w-36`}
              alt={`Shawn`} />
            Shawn
            <p>#Backend</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageCarlos}
              className={`w-48 lg:w-36`}
              alt={`Carlos`} />
            Carlos
            <p>#FullStack</p>
          </div>
        </div>
      </section>
      <section className={`flex flex-col gap-2`}>
        <h2
          id={`contact`}
          className={`border-b-2 pb-1 text-2xl`}>
          CONTACT
        </h2>
        <div className={`mx-12 flex flex-wrap justify-center gap-4`}>
          <div className={`flex w-[56px] flex-col items-center gap-2 text-xs`}>
            <SiGmail size={56} />
            Gmail
          </div>
          <div className={`flex w-[56px] flex-col items-center gap-2 text-xs`}>
            <SiFacebook size={56} />
            Facebook
          </div>
          <div className={`flex w-[56px] flex-col items-center gap-2 text-xs`}>
            <SiLinkedin size={56} />
            LinkedIn
          </div>
          <div className={`flex w-[56px] flex-col items-center gap-2 text-xs`}>
            <SiGithub size={56} />
            GitHub
          </div>
          <div className={`flex w-[56px] flex-col items-center gap-2 text-xs`}>
            <SiYoutube size={56} />
            YouTube
          </div>
          <div className={`flex w-[56px] flex-col items-center gap-2 text-xs`}>
            <SiDiscord size={56} />
            Discord
          </div>
        </div>
      </section>
      <footer className={`mx-auto mb-4`}>
        Copyright &copy; 2021-{(new Date()).getFullYear()} PureFunc Co., Ltd. All Rights Reserved.
        <img
          src={ImageBlackLogo}
          alt={`$_purefunc Black Logo`}
          width={24}
          height={24}
          className={`ml-2 inline`} />
      </footer>
    </div>
  )
}
