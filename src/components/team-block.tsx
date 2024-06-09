import React from 'react'
import Member from './member'

export default function TeamBlock() {
  return (
    <section className={`mx-auto flex flex-col items-center`}>
      <h2
        id={`team`}
        className={`h-0 text-purefunc-1`}>
        MEMBERS
      </h2>
      <div className={`flex flex-wrap justify-center gap-8 lg:mx-24 xl:mx-48 xl:gap-16 2xl:mx-0 2xl:gap-8`}>
        <Member
          name={`Wade, CEO`}
          tags={`#Backend #SDET`} />
        <Member
          name={`Vincent`}
          tags={`#Backend #DevOps`} />
        <Member
          name={`Nelson`}
          tags={`#Frontend #Mobile`} />
        <Member
          name={`Daniel`}
          tags={`#Frontend #Gaming`} />
        <Member
          name={`Shawn`}
          tags={`#Backend #Blockchain`} />
        <Member
          name={`Carlos`}
          tags={`#FullStack`} />
      </div>
    </section>
  )
}
