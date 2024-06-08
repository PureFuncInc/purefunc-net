import React from 'react'
import ImageWade from '../assets/team-wade.webp'
import ImageVincent from '../assets/team-vincent.webp'
import ImageNelson from '../assets/team-nelson.webp'
import ImageDaniel from '../assets/team-daniel.webp'
import ImageShawn from '../assets/team-shawn.webp'
import ImageCarlos from '../assets/team-carlos.webp'

interface Props {
  name: string
  description: string
}

export default function Member({name, description}: Props) {
  let imgSrc
  if (name === `Vincent`) {
    imgSrc = ImageVincent
  } else if (name === `Nelson`) {
    imgSrc = ImageNelson
  } else if (name === `Daniel`) {
    imgSrc = ImageDaniel
  } else if (name === `Shawn`) {
    imgSrc = ImageShawn
  } else if (name === `Carlos`) {
    imgSrc = ImageCarlos
  } else {
    imgSrc = ImageWade
  }

  return (
    <div className={`flex flex-row gap-8`}>
      <div className={`flex flex-col items-center gap-2`}>
        <img
          src={imgSrc}
          className={`w-[128px] md:w-[192px] xl:w-[208px] rounded-xl`}
          alt={`Avatar of ${name}`} />
        <p className={`text-xl font-extrabold text-[#FFFFFF]`}>{name}</p>
      </div>
      <p className={`text-[#FFFFFF] w-[150px] md:text-xl`}>
        {description}
      </p>
    </div>
  )
}
