import ImageIMac from "../assets/imac.webp";
import React from "react";

export default function MainBlock() {
  return (
    <section className={`mx-auto flex flex-wrap justify-center md:gap-16 lg:gap-24 xl:gap-36 2xl:gap-48`}>
      <nav className={`hidden justify-center gap-8 text-xl font-medium text-[#FFFFFF] md:flex md:flex-col`}>
        <a href={`#team`}>團隊成員</a>
      </nav>
      <img src={ImageIMac} className={`w-[360px] md:w-[425px] lg:w-[625px] xl:w-[725px] 2xl:w-[800px]`} alt={`write an email to $_purefunc`} />
    </section>
  );
}
