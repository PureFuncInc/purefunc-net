import React from 'react'
import { Article, Articles } from '../components/articles'
import { Link } from 'react-router-dom'

export default function ArticlesBlock() {
  return (
    <article className={`mx-auto flex flex-col gap-4 text-xs md:text-base`}>
      <h2>meme</h2>
      {
        Articles
          .filter((article: Article) => !article.labels.includes('draft'))
          .filter((article: Article) => article.labels.includes('meme'))
          .map((article: Article, _) => {
            return (
              <Link
                key={`article${article.number}`}
                to={`/blog/${article.number}`}>
                <span className={`hidden md:mr-2 md:inline`}>{article.createdAt.substring(0, 10)}</span>
                <span className={`border-b-2 border-[#000000]`}>{article.title}</span>
              </Link>
            )
          })
      }
      <h2>self</h2>
      {
        Articles
          .filter((article: Article) => !article.labels.includes('draft'))
          .filter((article: Article) => article.labels.includes('self'))
          .map((article: Article, _) => {
            return (
              <Link
                key={`article${article.number}`}
                to={`/blog/${article.number}`}>
                <span className={`hidden md:mr-2 md:inline`}>{article.createdAt.substring(0, 10)}</span>
                <span className={`border-b-2 border-[#000000]`}>{article.title}</span>
              </Link>
            )
          })
      }
      <h2>reference</h2>
      {
        Articles
          .filter((article: Article) => !article.labels.includes('draft'))
          .filter((article: Article) => article.labels.includes('reference'))
          .map((article: Article, _) => {
            return (
              <Link
                key={`article${article.number}`}
                to={`/blog/${article.number}`}>
                <span className={`hidden md:mr-2 md:inline`}>{article.createdAt.substring(0, 10)}</span>
                <span className={`border-b-2 border-[#000000]`}>{article.title}</span>
              </Link>
            )
          })
      }
      <h2>news</h2>
      {
        Articles
          .filter((article: Article) => !article.labels.includes('draft'))
          .filter((article: Article) => article.labels.includes('news'))
          .map((article: Article, _) => {
            return (
              <Link
                key={`article${article.number}`}
                to={`/blog/${article.number}`}>
                <span className={`hidden md:mr-2 md:inline`}>{article.createdAt.substring(0, 10)}</span>
                <span className={`border-b-2 border-[#000000]`}>{article.title}</span>
              </Link>
            )
          })
      }
    </article>
  )
}
