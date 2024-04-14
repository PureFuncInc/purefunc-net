import React from 'react'
import ImageWade from '../assets/team-wade.webp'
import ImageVincent from '../assets/team-vincent.webp'
import ImageNelson from '../assets/team-nelson.webp'
import ImageDaniel from '../assets/team-daniel.webp'
import ImageShawn from '../assets/team-shawn.webp'
import ImageCarlos from '../assets/team-carlos.webp'

export default function TeamBlock() {
  return (
    <section className={`flex flex-col`}>
      <h2
        id={`team`}
        className={`h-0 text-purefunc-1`}>
        MEMBERS
      </h2>
      <div className={`mx-auto flex flex-row justify-center gap-8 text-[#FFFFFF]`}>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageWade}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Wade`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Wade, CEO</p>
          <p>#SDET</p>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageVincent}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Vincent`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Vincent</p>
          <p>#SRE</p>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageNelson}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Nelson`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Nelson</p>
          <p>#Mobile</p>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageDaniel}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Daniel`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Daniel</p>
          <p>#Frontend</p>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageShawn}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Shawn`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Shawn</p>
          <p>#Backend</p>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageCarlos}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Carlos`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Carlos</p>
          <p>#FullStack</p>
        </div>
      </div>
    </section>
  )
}
