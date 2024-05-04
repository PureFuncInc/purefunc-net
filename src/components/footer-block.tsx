import ImageBlackLogo from '../assets/purefunc_black.webp'
import React from 'react'
import { SiDiscord, SiFacebook, SiGithub, SiGmail, SiLinkedin, SiYoutube } from 'react-icons/si'

export default function FooterBlock() {
  return (
    <footer className={`mx-48 mb-8 flex flex-row items-center justify-between text-[#FFFFFF]`}>
      <div className={`flex flex-row gap-8`}>
        <a href={`https://discord.purefunc.net`}>
          <SiDiscord size={24} />
        </a>
        <a href={`https://facebook.com/purefuncinc`}>
          <SiFacebook size={24} />
        </a>
        <a href={`https://github.com/PureFuncInc`}>
          <SiGithub size={24} />
        </a>
        <a href={`mailto:help@purefunc.net`}>
          <SiGmail size={24} />
        </a>
        <a href={`https://linkedin.com/company/purefuncinc`}>
          <SiLinkedin size={24} />
        </a>
        <a href={`https://youtube.com/@purefuncinc`}>
          <SiYoutube size={24} />
        </a>
      </div>
      <div className={`flex flex-row gap-2`}>
        Copyright &copy; 2021-{(new Date()).getFullYear()} PureFunc Co., Ltd. All Rights Reserved.
        <img
          src={ImageBlackLogo}
          alt={`$_purefunc Black Logo`}
          width={24}
          height={24} />
      </div>
    </footer>
  )
}
