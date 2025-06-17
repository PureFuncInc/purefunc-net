import React from "react";
import HeaderBlock from "../components/header-block";
import MainBlock from "../components/main-block";
import TechniqueBlock from "../components/technique-block";
import TeamBlock from "../components/team-block";
import FooterBlock from "../components/footer-block";

export default function Home() {
  return (
    <div className={`flex w-full flex-col gap-16 bg-purefunc-1`}>
      <HeaderBlock theme={`dark`} />
      <MainBlock />
      <TechniqueBlock />
      <TeamBlock />
      <FooterBlock theme={`dark`} />
    </div>
  );
}
