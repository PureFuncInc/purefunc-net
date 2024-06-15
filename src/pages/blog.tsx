import React, { useEffect, useState } from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import { useParams } from 'react-router-dom'
import ArticlesBlock from '../components/articles-block'
import ArticleBlock from '../components/article-block'

export default function Blog() {
  const [content, setContent] = useState('');
  const { id } = useParams()

  useEffect(() => {
    fetch(`/articles/${(id ? id : '1')}.md`)
      .then(res => res.text())
      .then(md => setContent(md))
  })

  return (
    <div className={`flex w-full flex-col gap-16`}>
      <HeaderBlock theme={`light`} />
      {
        id
          ? <ArticleBlock content={content} />
          : <ArticlesBlock />
      }
      <FooterBlock theme={`light`} />
    </div>
  )
}
