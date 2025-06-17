import ImageIMac from "../assets/imac.webp";
import React from "react";
import { Link } from "react-router-dom";

export default function MainBlock() {
  return (
    // <section className={`md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 flex flex-wrap justify-center md:gap-16 lg:gap-24 xl:gap-36 2xl:gap-48`}>
    <section className={`mx-auto flex flex-wrap justify-center md:gap-16 lg:gap-24 xl:gap-36 2xl:gap-48`}>
      <nav className={`hidden justify-center gap-8 text-xl font-medium text-[#FFFFFF] md:flex md:flex-col`}>
        {/* <Link to={`/blog`}>技術網誌</Link> */}
        {/*<a href={`#services`}>服務類型</a>*/}
        {/*<a href={`#product`}>產品專案</a>*/}
        <Link to={`#team`}>團隊成員</Link>
      </nav>
      <img src={ImageIMac} className={`w-[360px] md:w-[425px] lg:w-[625px] xl:w-[725px] 2xl:w-[800px]`} alt={`write an email to $_purefunc`} />
    </section>
  );
}
