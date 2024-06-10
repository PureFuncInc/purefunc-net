import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import { useParams } from 'react-router-dom'

export default function Blog() {
  const [content, setContent] = useState('');
  const { id } = useParams()
  const articleId = id ? id : '1'

  useEffect(() => {
    fetch(`/articles/${articleId}.md`)
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
