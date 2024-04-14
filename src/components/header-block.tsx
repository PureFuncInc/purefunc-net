import ImageNavyLogo from '../assets/purefunc_navy.webp'
import React from 'react'

export default function HeaderBlock() {
  return (
    <header className={`mx-8 mt-8 flex flex-row items-center`}>
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
        className={`-ml-[100px] rounded-xl border-2 border-[#FFFFFF] px-4 py-2 text-[#FFFFFF]`}>
        聯絡我們
      </a>
    </header>
  )
}
