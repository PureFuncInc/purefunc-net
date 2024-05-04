import React from 'react'
import ImageWade from '../assets/team-wade.webp'
import ImageVincent from '../assets/team-vincent.webp'
import ImageNelson from '../assets/team-nelson.webp'
import ImageDaniel from '../assets/team-daniel.webp'
import ImageShawn from '../assets/team-shawn.webp'
import ImageCarlos from '../assets/team-carlos.webp'

export default function TeamBlock() {
  return (
    <section className={`mx-48 flex flex-col items-center`}>
      <h2
        id={`team`}
        className={`h-0 text-purefunc-1`}>
        MEMBERS
      </h2>
      <div className={`flex flex-wrap justify-center gap-8`}>
        <div className={`flex flex-row gap-8`}>
          <div className={`flex flex-col items-center gap-2`}>
            <img
              src={ImageWade}
              className={`w-48 rounded-xl`}
              alt={`Avatar of Wade`} />
            <p className={`text-xl font-extrabold text-[#FFFFFF]`}>Wade, CEO</p>
          </div>
          <div className={`h-[200px] w-[512px] border-2 border-[#FFFFFF]`}>
          </div>
        </div>
        <div className={`flex flex-row gap-8`}>
          <div className={`flex flex-col items-center gap-2`}>
            <img
              src={ImageVincent}
              className={`w-48 rounded-xl`}
              alt={`Avatar of Vincent`} />
            <p className={`text-xl font-extrabold text-[#FFFFFF]`}>Vincent</p>
          </div>
          <div className={`h-[200px] w-[512px] border-2 border-[#FFFFFF]`}>
          </div>
        </div>
        <div className={`flex flex-row gap-8`}>
          <div className={`flex flex-col items-center gap-2`}>
            <img
              src={ImageNelson}
              className={`w-48 rounded-xl`}
              alt={`Avatar of Nelson`} />
            <p className={`text-xl font-extrabold text-[#FFFFFF]`}>Nelson</p>
          </div>
          <div className={`h-[200px] w-[512px] border-2 border-[#FFFFFF]`}>
          </div>
        </div>
        <div className={`flex flex-row gap-8`}>
          <div className={`flex flex-col items-center gap-2`}>
            <img
              src={ImageDaniel}
              className={`w-48 rounded-xl`}
              alt={`Avatar of Daniel`} />
            <p className={`text-xl font-extrabold text-[#FFFFFF]`}>Daniel</p>
          </div>
          <div className={`h-[200px] w-[512px] border-2 border-[#FFFFFF]`}>
          </div>
        </div>
        <div className={`flex flex-row gap-8`}>
          <div className={`flex flex-col items-center gap-2`}>
            <img
              src={ImageShawn}
              className={`w-48 rounded-xl`}
              alt={`Avatar of Shawn`} />
            <p className={`text-xl font-extrabold text-[#FFFFFF]`}>Shawn</p>
          </div>
          <div className={`h-[200px] w-[512px] border-2 border-[#FFFFFF]`}>
          </div>
        </div>
        <div className={`flex flex-row gap-8`}>
          <div className={`flex flex-col items-center gap-2`}>
            <img
              src={ImageCarlos}
              className={`w-48 rounded-xl`}
              alt={`Avatar of Carlos`} />
            <p className={`text-xl font-extrabold text-[#FFFFFF]`}>Carlos</p>
          </div>
          <div className={`h-[200px] w-[512px] border-2 border-[#FFFFFF]`}>
          </div>
        </div>
      </div>
    </section>
  )
}
