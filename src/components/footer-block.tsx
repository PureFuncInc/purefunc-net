import ImageBlackLogo from "../assets/purefunc_black.webp";
import React from "react";
import { SiFacebook, SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";

interface Props {
  theme: string;
}

export default function FooterBlock({ theme }: Props) {
  const textColor = theme === "light" ? "text-[#444444]" : "text-[#FFFFFF]";

  return (
    <footer className={`mx-8 mb-8 flex flex-wrap items-center justify-between gap-2 ${textColor} lg:mx-24 xl:mx-36 2xl:mx-48`}>
      <div className={`flex min-h-[60px] flex-row items-center gap-8`}>
        <a href={`https://facebook.com/purefuncinc`}>
          <SiFacebook size={24} />
        </a>
        <a href={`https://github.com/PureFuncInc`}>
          <SiGithub size={24} />
        </a>
        <a href={`https://linkedin.com/company/purefuncinc`}>
          <SiLinkedin size={24} />
        </a>
        <a href={`https://youtube.com/@purefuncinc`}>
          <SiYoutube size={24} />
        </a>
      </div>
      <div className={`flex flex-wrap items-center gap-2`}>
        Copyright &copy; 2021-{new Date().getFullYear()} PureFunc Co., Ltd. All Rights Reserved.
        <img src={ImageBlackLogo} alt={`$_purefunc Black Logo`} width={28} height={28} className={`hidden md:block`} />
      </div>
    </footer>
  );
}
