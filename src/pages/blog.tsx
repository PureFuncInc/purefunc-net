import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import { Link, useParams } from 'react-router-dom'
import { Article, Articles } from '../components/articles'

export default function Blog() {
  const [content, setContent] = useState('');
  const { id } = useParams()
  const articleId: string = id ? id : '1'
  const blogIndexPage: boolean = id ? false : true

  useEffect(() => {
    fetch(`/articles/${articleId}.md`)
      .then(res => res.text())
      .then(md => setContent(md))
  })

  if (blogIndexPage) {
    return (
      <div className={`flex w-full flex-col gap-16`}>
        <HeaderBlock theme={`light`} />
        <article className={`mx-auto flex flex-col gap-4 text-xs md:text-base`}>
          {
            Articles.map((article: Article, _) => {
              return (
                <Link
                  key={`article${article.number}`}
                  to={`/blog/${article.number}`}>
                  {article.title}
                </Link>
              )
            })
          }
        </article>
        <FooterBlock theme={`light`} />
      </div>
    )
  } else {
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
}
