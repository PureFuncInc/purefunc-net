import React from 'react'
import TeamBlock from './components/team-block'
import FooterBlock from './components/footer-block'
import ProductBlock from './components/product-block'
import TechniqueBlock from './components/technique-block'
import HeaderBlock from './components/header-block'
import MainBlock from './components/main-block'
// import ServiceBlock from './components/service-block'


export default function App() {
  return (
    <div className={`flex w-full flex-col gap-16`}>
      <HeaderBlock/>

      <MainBlock/>

      {/*<ServiceBlock/>*/}

      <ProductBlock/>

      <TechniqueBlock/>

      <TeamBlock/>

      <FooterBlock/>
    </div>
  )
}
