import React from 'react'
import square_logo from './assets/purefunc_black.webp'
import imac from './assets/imac.webp'
import rectangle_logo from './assets/purefunc_navy.webp'
import { SiDiscord, SiFacebook, SiGithub, SiGmail, SiLinkedin, SiYoutube } from 'react-icons/si'

export default function App() {
  return (
    <div className={`flex flex-col font-mono`}>
      <nav className={`flex flex-wrap gap-4 py-2 items-center text-xs text-[#333336] justify-center`}>
        <a href={`/`}>
          <img
            src={square_logo}
            className={`w-6 h-6`}
            alt="square logo"></img>
        </a>
        <a href={`/blog`}>Blog</a>
        <a href={`#product`}>Product</a>
        <a href={`#service`}>Service</a>
        <a href={`#domain`}>Domain</a>
        <a href={`#technique`}>Technique</a>
        <a href={`#faq`}>FAQ</a>
        <a href={`#team`}>Team</a>
        <a href={`#contact-us`} className={`py-1 px-2 bg-[#00386B] text-[#E89619] border-2 rounded-xl`}>Contact Us</a>
      </nav>
      <section className={`flex flex-wrap gap-8 mx-auto mt-8 items-center justify-center`}>
        <div className={`flex flex-col gap-2`}>
          <h1 className={`text-4xl font-bold`}>$_purefunc</h1>
          <span className={`flex flex-col items-end`}>
            <p className={`text-lg font-medium`}>Software Development Company</p>
            <p className={`text-sm`}>2021.10.26 ~</p>
          </span>
        </div>
        <img src={imac} className={`w-[360px]`} alt={`send mail to $_purefunc`}></img>
      </section>
      <section className={`flex flex-col mx-auto mb-8`}>
        <h2 id={`product`} className={`text-lg font-bold text-[#00386B]`}>PRODUCT</h2>
        <div className={`flex flex-wrap gap-2`}>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>FooTinder</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Pheme App</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Han Huang Group</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Blockchain Wallet Services</div>
        </div>
      </section>
      <section className={`flex flex-col mx-auto mb-8`}>
        <h2 id={`service`} className={`text-lg font-bold text-[#00386B]`}>SERVICE</h2>
        <div className={`flex flex-wrap gap-2`}>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Consulting Service</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Custom Mobile Development</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Custom System Development</div>
        </div>
      </section>
      <section className={`flex flex-col mx-auto mb-8`}>
        <h2 id={`domain`} className={`text-lg font-bold text-[#00386B]`}>DOMAIN</h2>
        <div className={`flex flex-wrap gap-2`}>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>1</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>2</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>3</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>4</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>5</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>6</div>
        </div>
      </section>
      <section className={`flex flex-col mx-auto mb-8`}>
        <h2 id={`technique`} className={`text-lg font-bold text-[#00386B]`}>TECHNIQUE</h2>
        <div className={`flex flex-wrap gap-2`}>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>1</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>2</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>3</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>4</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>5</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>6</div>
        </div>
      </section>
      <section className={`flex flex-col mx-auto mb-8`}>
        <h2 id={`faq`} className={`text-lg font-bold text-[#00386B]`}>FAQ</h2>
        <div className={`flex flex-wrap gap-2`}>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>1</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>2</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>3</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>4</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>5</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>6</div>
        </div>
      </section>
      <section className={`flex flex-col mx-auto mb-8`}>
        <h2 id={`team`} className={`text-lg font-bold text-[#00386B]`}>TEAM</h2>
        <div className={`flex flex-wrap gap-2`}>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Wade</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Vincent</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Nelson</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Daniel</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Shawn</div>
          <div className={`w-[120px] h-[160px] bg-gray-400`}>Carlos</div>
        </div>
      </section>
      <section className={`flex flex-col mx-auto mb-8`}>
        <h2 id={`contact-us`} className={`text-lg font-bold text-[#00386B]`}>CONTACT US</h2>
        <div className={`flex flex-wrap gap-8 items-center`}>
          <img
            src={rectangle_logo}
            className={`h-[96px]`}
            alt="rectangle logo"/>
          <div className={`flex flex-row gap-1.5`}>
            <div className={`flex flex-col gap-2 items-center text-xs w-[56px]`}>
              <SiGmail size={56}/>
              Gmail
            </div>
            <div className={`flex flex-col gap-2 items-center text-xs w-[56px]`}>
              <SiFacebook size={56}/>
              Facebook
            </div>
            <div className={`flex flex-col gap-2 items-center text-xs w-[56px]`}>
              <SiLinkedin size={56}/>
              LinkedIn
            </div>
            <div className={`flex flex-col gap-2 items-center text-xs w-[56px]`}>
              <SiGithub size={56}/>
              GitHub
            </div>
            <div className={`flex flex-col gap-2 items-center text-xs w-[56px]`}>
              <SiYoutube size={56}/>
              YouTube
            </div>
            <div className={`flex flex-col gap-2 items-center text-xs w-[56px]`}>
              <SiDiscord size={56}/>
              Discord
            </div>
          </div>
        </div>
      </section>
      <footer className={`pt-2 pb-4 text-gray-400 mx-auto text-xs border-t border-gray-400`}>
      Copyright &copy; 2021-{(new Date()).getFullYear()} PureFunc Co., Ltd. All Rights Reserved.
      </footer>
    </div>
  )
}
