import { SiDiscord, SiFacebook, SiGithub, SiGmail, SiLinkedin, SiYoutube } from 'react-icons/si'
import React from 'react'

export default function ContactBlock() {
  return (
    <section className={`flex flex-col`}>
      <h2
        id={`contact`}
        className={`h-0 text-purefunc-1`}>
        CONTACT
      </h2>
      <div className={`mx-auto flex flex-row justify-center gap-8 text-[#FFFFFF]`}>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiGmail size={192}/>
          <p className={`text-xl font-extrabold`}>Gmail</p>
        </div>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiFacebook size={192}/>
          <p className={`text-xl font-extrabold`}>Facebook</p>
        </div>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiLinkedin size={192}/>
          <p className={`text-xl font-extrabold`}>LinkedIn</p>
        </div>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiGithub size={192}/>
          <p className={`text-xl font-extrabold`}>GitHub</p>
        </div>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiYoutube size={192}/>
          <p className={`text-xl font-extrabold`}>YouTube</p>
        </div>
        <div className={`flex w-[192px] flex-col items-center`}>
          <SiDiscord size={192}/>
          <p className={`text-xl font-extrabold`}>Discord</p>
        </div>
      </div>
    </section>
  )
}
