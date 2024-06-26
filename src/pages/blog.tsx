import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import ArticlesBlock from '../components/articles-block'

export default function Blog() {
  return (
    <div className={`flex w-full flex-col gap-16`}>
      <HeaderBlock theme={`light`} />
      <ArticlesBlock />
      <FooterBlock theme={`light`} />
    </div>
  )
}
