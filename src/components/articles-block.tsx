import React from 'react'
import { Article, Articles } from '../components/articles'
import { Link } from 'react-router-dom'

export default function ArticlesBlock() {
  return (
    <article className={`mx-auto flex flex-col gap-4 text-xs md:text-base`}>
      {
        Articles.map((article: Article, _) => {
          return (
            <Link
              key={`article${article.number}`}
              to={`/blog/${article.number}`}>
              <span className={`hidden md:inline md:mr-2`}>{article.createdAt.substring(0, 10)}</span>
              <span className={`border-b-2 border-[#000000]`}>{article.title}</span>
            </Link>
          )
        })
      }
    </article>
  )
}
