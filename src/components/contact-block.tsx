import { SiDiscord, SiFacebook, SiGithub, SiGmail, SiLinkedin, SiYoutube } from 'react-icons/si'
import React from 'react'

export default function ContactBlock() {
  return (
    <section className={`flex flex-col`}>
      <h2
        id={`contact`}
        className={`text-purefunc-1 h-0`}>
        CONTACT
      </h2>
      <div className={`mx-auto flex flex-row justify-center gap-8 text-[#FFFFFF]`}>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiGmail size={192}/>
          <p className={`font-extrabold text-xl`}>Gmail</p>
        </div>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiFacebook size={192}/>
          <p className={`font-extrabold text-xl`}>Facebook</p>
        </div>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiLinkedin size={192}/>
          <p className={`font-extrabold text-xl`}>LinkedIn</p>
        </div>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiGithub size={192}/>
          <p className={`font-extrabold text-xl`}>GitHub</p>
        </div>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiYoutube size={192}/>
          <p className={`font-extrabold text-xl`}>YouTube</p>
        </div>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiDiscord size={192}/>
          <p className={`font-extrabold text-xl`}>Discord</p>
        </div>
      </div>
    </section>
  )
}
