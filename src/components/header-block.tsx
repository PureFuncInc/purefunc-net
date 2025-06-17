import ImageNavyLogo from "../assets/purefunc_navy.webp";
import React from "react";
import { SiFacebook, SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";

interface Props {
  theme: string;
}

export default function HeaderBlock({ theme }: Props) {
  const textColor = theme === "light" ? "text-[#444444]" : "text-[#FFFFFF]";

  return (
    <header className={`mx-8 mt-8 flex flex-wrap items-center justify-between gap-2 ${textColor} lg:mx-24 xl:mx-36 2xl:mx-48`}>
      <a href={`/`}>
        <img src={ImageNavyLogo} alt={`$_purefunc Navy Logo`} width={200} height={60} />
      </a>
      <div className={`flex flex-row items-center gap-8`}>
        <a href={`https://facebook.com/purefuncinc`} className={`hidden md:block`}>
          <SiFacebook size={24} />
        </a>
        <a href={`https://github.com/PureFuncInc`} className={`hidden md:block`}>
          <SiGithub size={24} />
        </a>
        <a href={`https://linkedin.com/company/purefuncinc`} className={`hidden md:block`}>
          <SiLinkedin size={24} />
        </a>
        <a href={`https://youtube.com/@purefuncinc`} className={`hidden md:block`}>
          <SiYoutube size={24} />
        </a>
      </div>
    </header>
  );
}
