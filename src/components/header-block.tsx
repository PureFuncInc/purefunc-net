import ImageNavyLogo from '../assets/purefunc_navy.webp'
import React from 'react'
import { SiDiscord, SiFacebook, SiGithub, SiGmail, SiLinkedin, SiYoutube } from 'react-icons/si'

export default function HeaderBlock() {
  return (
    <header className={`mx-8 lg:mx-24 xl:mx-36 2xl:mx-48 mt-8 gap-2 flex flex-wrap items-center justify-between text-[#FFFFFF]`}>
      <a href={`/`}>
        <img
          src={ImageNavyLogo}
          alt={`$_purefunc Navy Logo`}
          width={200}
          height={60} />
      </a>
      <div className={`flex flex-row items-center gap-8`}>
        <a href={`https://discord.purefunc.net`} className={`hidden md:block`}>
          <SiDiscord size={24} />
        </a>
        <a href={`https://facebook.com/purefuncinc`} className={`hidden md:block`}>
          <SiFacebook size={24} />
        </a>
        <a href={`https://github.com/PureFuncInc`} className={`hidden md:block`}>
          <SiGithub size={24} />
        </a>
        <a href={`mailto:help@purefunc.net`} className={`hidden md:block`}>
          <SiGmail size={24} />
        </a>
        <a href={`https://linkedin.com/company/purefuncinc`} className={`hidden md:block`}>
          <SiLinkedin size={24} />
        </a>
        <a href={`https://youtube.com/@purefuncinc`} className={`hidden md:block`}>
          <SiYoutube size={24} />
        </a>
        <a
          href={`#contact`}
          className={`rounded-xl border-2 border-[#FFFFFF] px-4 py-2`}>
          聯絡我們
        </a>
      </div>
    </header>
  )
}