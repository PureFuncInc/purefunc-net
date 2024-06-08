import ImageBlackLogo from '../assets/purefunc_black.webp'
import React from 'react'
import { SiDiscord, SiFacebook, SiGithub, SiLinkedin, SiWordpress, SiYoutube } from 'react-icons/si'

export default function FooterBlock() {
  return (
    <footer className={`mx-8 lg:mx-24 xl:mx-36 2xl:mx-48 mb-8 gap-2 flex flex-wrap items-center justify-between text-[#FFFFFF]`}>
      <div className={`flex flex-row items-center gap-8 min-h-[60px]`}>
        <a href={`/blog`}>
          <SiWordpress size={24} />
        </a>
        <a href={`https://discord.purefunc.net`}>
          <SiDiscord size={24} />
        </a>
        <a href={`https://facebook.com/purefuncinc`}>
          <SiFacebook size={24} />
        </a>
        <a href={`https://github.com/PureFuncInc`}>
          <SiGithub size={24} />
        </a>
        <a href={`https://linkedin.com/company/purefuncinc`}>
          <SiLinkedin size={24} />
        </a>
        <a href={`https://youtube.com/@purefuncinc`}>
          <SiYoutube size={24} />
        </a>
      </div>
      <div className={`flex flex-wrap gap-2 items-center`}>
        Copyright &copy; 2021-{(new Date()).getFullYear()} PureFunc Co., Ltd. All Rights Reserved.
        <img
          src={ImageBlackLogo}
          alt={`$_purefunc Black Logo`}
          width={28}
          height={28}
        className={`hidden md:block`}/>
      </div>
    </footer>
  )
}
