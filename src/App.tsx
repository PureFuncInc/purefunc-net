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
  { text: 'Kotlin', value: 1000 },
  { text: 'Java', value: 1000 },
  { text: 'Python', value: 1000 },
  { text: 'Spring Framework', value: 1000 },
  { text: 'Flutter', value: 1000 },
  { text: 'TypeScript', value: 1000 },
  { text: 'JavaScript', value: 1000 },
  { text: 'Next.js', value: 1000 },
  { text: 'Vue.js', value: 1000 },
  { text: 'React.js', value: 1000 },
  { text: 'Nuxt.js', value: 1000 },
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
          <a href={`/blog`}>Blog</a>
          <a href={`#product`}>Product</a>
          <a href={`#services`}>Services</a>
          <a href={`#technique`}>Technique</a>
          <a href={`#team`}>Team</a>
          <a href={`#contact`}>Contact</a>
        </nav>
      </header>
      <section className={`flex flex-wrap items-center justify-center gap-4`}>
        <img
          src={ImageIMac}
          className={`w-80`}
          alt={`Consult Us`} />
        <h1 className={`border-black rounded-lg border-2 p-2`}>
          Got a project in mind? Consult us.
        </h1>
      </section>
      <section className={`flex flex-col gap-2`}>
        <h2
          id={`services`}
          className={`border-black border-b-2 pb-1 text-2xl`}>
          OUR SERVICES
        </h2>
        <div className={`mx-8 flex flex-wrap justify-center gap-4`}>
          <div className={`flex flex-col items-center lg:w-[300px]`}>
            <p>CONSULTING SERVICE</p>
            <p>At our consulting service, we specialize in system architecture planning, optimization, and the implementation of automated testing processes</p>
          </div>
          <div className={`flex flex-col items-center lg:w-[300px]`}>
            <p>CUSTOM APP DEVELOPMENT</p>
            <p>Explore our Custom App Development service, leveraging the efficiency and cross-platform capabilities of Flutter.</p>
          </div>
          <div className={`flex flex-col items-center lg:w-[300px]`}>
            <p>CUSTOM SYSTEM DEVELOPMENT</p>
            <p>Welcome to our Custom System Development service. We specialize in tailoring systems to meet your unique needs, ensuring efficiency and effectiveness in your operations.</p>
          </div>
        </div>
      </section>
      <section className={`flex flex-col gap-2`}>
        <h2
          id={`product`}
          className={`border-black border-b-2 pb-1 text-2xl`}>
          OUR PRODUCTS
        </h2>
        <div className={`mx-8 flex flex-wrap justify-center gap-4`}>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImagePheme}
              className={`w-48 lg:w-36`}
              alt={`Pheme Photo`} />
            <p>Pheme</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageHanHuang}
              className={`w-48 lg:w-36`}
              alt={`HanHuang Photo`} />
            <p>HanHuang</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageFooTinder}
              className={`w-48 lg:w-36`}
              alt={`FooTinder Photo`} />
            <p>FooTinder</p>
          </div>
          <div className={`flex flex-col items-center`}>
          <img
              src={ImageBlackLogo}
              className={`w-48 lg:w-36`}
              alt={`PureFunc Blockchain Wallet Photo`} />
            <p>FBW</p>
          </div>
        </div>
      </section>
      <section className={`flex flex-col gap-2`}>
        <h2
          id={`technique`}
          className={`border-black border-b-2 pb-1 text-2xl`}>
          TECHNIQUE STACKS
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
          className={`border-black border-b-2 pb-1 text-2xl`}>
          TEAM MEMBERS
        </h2>
        <div className={`mx-8 flex flex-wrap justify-center gap-4`}>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageWade}
              className={`w-48 lg:w-36`}
              alt={`Wade Photo`} />
            Wade, CEO
            <p>#SDET</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageVincent}
              className={`w-48 lg:w-36`}
              alt={`Vincent Photo`} />
            Vincent
            <p>#SRE</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageNelson}
              className={`w-48 lg:w-36`}
              alt={`Nelson Photo`} />
            Nelson
            <p>#Mobile</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageDaniel}
              className={`w-48 lg:w-36`}
              alt={`Daniel Photo`} />
            Daniel
            <p>#Frontend</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageShawn}
              className={`w-48 lg:w-36`}
              alt={`Shawn Photo`} />
            Shawn
            <p>#Backend</p>
          </div>
          <div className={`flex flex-col items-center`}>
            <img
              src={ImageCarlos}
              className={`w-48 lg:w-36`}
              alt={`Carlos Photo`} />
            Carlos
            <p>#FullStack</p>
          </div>
        </div>
      </section>
      <section className={`flex flex-col gap-2`}>
        <h2
          id={`contact`}
          className={`border-black border-b-2 pb-1 text-2xl`}>
          CONTACT US
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
