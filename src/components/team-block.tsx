import React from 'react'
import ImageWade from '../assets/team-wade.webp'
import ImageVincent from '../assets/team-vincent.webp'
import ImageNelson from '../assets/team-nelson.webp'
import ImageDaniel from '../assets/team-daniel.webp'
import ImageShawn from '../assets/team-shawn.webp'
import ImageCarlos from '../assets/team-carlos.webp'

export default function TeamBlock() {
  return (
    <section className={`flex flex-col items-center`}>
      <h2
        id={`team`}
        className={`h-0 text-purefunc-1`}>
        MEMBERS
      </h2>
      <div className={`flex flex-row gap-8`}>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageWade}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Wade`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Wade, CEO</p>
        </div>
        <div className={`border-2 border-[#FFFFFF] w-[512px] h-[200px]`}>
        </div>
      </div>
      <div className={`flex flex-row gap-8 items-center`}>
        <div className={`border-2 border-[#FFFFFF] w-[512px] h-[200px]`}>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageVincent}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Vincent`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Vincent</p>
        </div>
      </div>
      <div className={`flex flex-row gap-8`}>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageNelson}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Nelson`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Nelson</p>
        </div>
        <div className={`border-2 border-[#FFFFFF] w-[512px] h-[200px]`}>
        </div>
      </div>
      <div className={`flex flex-row gap-8 items-center`}>
        <div className={`border-2 border-[#FFFFFF] w-[512px] h-[200px]`}>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageDaniel}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Daniel`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Daniel</p>
        </div>
      </div>
      <div className={`flex flex-row gap-8`}>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageShawn}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Shawn`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Shawn</p>
        </div>
        <div className={`border-2 border-[#FFFFFF] w-[512px] h-[200px]`}>
        </div>
      </div>
      <div className={`flex flex-row gap-8 items-center`}>
        <div className={`border-2 border-[#FFFFFF] w-[512px] h-[200px]`}>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageCarlos}
            className={`w-48 rounded-xl`}
            alt={`Avatar of Carlos`}/>
          <p className={`text-xl font-extrabold text-purefunc-2`}>Carlos</p>
        </div>
      </div>
    </section>
  )
}
