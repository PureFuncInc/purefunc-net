import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'

export default function Blog() {
  const [content, setContent] = useState('');
  const paths: string[] = window.location.pathname.split('/')

  const index = paths[2] === undefined ? '1' : paths[2].toString()

  useEffect(() => {
    fetch(`/articles/${index}.md`)
      .then(res => res.text())
      .then(md => {
        setContent(md)
      })
  })

  return (
    <div className={`flex w-full flex-col gap-16`}>
      <HeaderBlock theme={`light`} />
      <article className={`mx-auto`}>
        <Markdown className={`prose lg:prose-lg xl:prose-xl`}>{content}</Markdown>
      </article>
      <FooterBlock theme={`light`} />
    </div>
  )
}