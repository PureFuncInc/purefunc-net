import ImageBlackLogo from '../assets/purefunc_black.webp'
import React from 'react'

export default function FooterBlock() {
  return (
    <footer className={`mx-auto mb-8 flex flex-row items-center text-[#FFFFFF]`}>
      Copyright &copy; 2021-{(new Date()).getFullYear()} PureFunc Co., Ltd. All Rights Reserved.
      <img
        src={ImageBlackLogo}
        alt={`$_purefunc Black Logo`}
        width={24}
        height={24}
        className={`ml-2 inline`}/>
    </footer>
  )
}
