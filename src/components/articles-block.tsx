import React from 'react'
import { Article, Articles } from '../components/articles'
import { Link } from 'react-router-dom'

export default function ArticlesBlock() {
  const memes: Article[] = Articles
    .filter((article: Article) => !article.labels.includes('draft'))
    .filter((article: Article) => article.labels.includes('meme'))
  const selfs: Article[] = Articles
    .filter((article: Article) => !article.labels.includes('draft'))
    .filter((article: Article) => article.labels.includes('self'))
  const references: Article[] = Articles
    .filter((article: Article) => !article.labels.includes('draft'))
    .filter((article: Article) => article.labels.includes('reference'))
  const newss: Article[] = Articles
    .filter((article: Article) => !article.labels.includes('draft'))
    .filter((article: Article) => article.labels.includes('news'))

  return (
    <article className={`mx-auto flex flex-col gap-4 text-xs md:text-base`}>
      <h1 className={`mx-auto text-3xl`}>INDEX</h1>
      {/*<div className={`flex flex-row gap-2`}>*/}
      {/*  <Link to={`#meme`}>meme</Link>*/}
      {/*  <Link to={`#self`}>self</Link>*/}
      {/*  <Link to={`#reference`}>reference</Link>*/}
      {/*  <Link to={`#news`}>news</Link>*/}
      {/*</div>*/}
      <span className={`flex flex-row items-center justify-between border-b-2 border-[#000000]`}>
        <h2 id={`meme`} className={`text-lg`}>meme</h2>
        {memes.length}
      </span>
      {
        memes
          .map((article: Article, _) => {
            return (
              <Link
                key={`article${article.number}`}
                to={`/blog/${article.number}`}>
                <span className={`hidden md:mr-2 md:inline`}>{article.createdAt.substring(0, 10)}</span>
                <span className={``}>{article.title}</span>
              </Link>
            )
          })
      }
      <span className={`flex flex-row items-center justify-between border-b-2 border-[#000000]`}>
        <h2 id={`self`} className={`text-lg`}>self</h2>
        {selfs.length}
      </span>
      {
        selfs
          .map((article: Article, _) => {
            return (
              <Link
                key={`article${article.number}`}
                to={`/blog/${article.number}`}>
                <span className={`hidden md:mr-2 md:inline`}>{article.createdAt.substring(0, 10)}</span>
                <span className={``}>{article.title}</span>
              </Link>
            )
          })
      }
      <span className={`flex flex-row items-center justify-between border-b-2 border-[#000000]`}>
        <h2 id={`reference`} className={`text-lg`}>reference</h2>
        {references.length}
      </span>
      {
        references
          .map((article: Article, _) => {
            return (
              <Link
                key={`article${article.number}`}
                to={`/blog/${article.number}`}>
                <span className={`hidden md:mr-2 md:inline`}>{article.createdAt.substring(0, 10)}</span>
                <span className={``}>{article.title}</span>
              </Link>
            )
          })
      }
      <span className={`flex flex-row items-center justify-between border-b-2 border-[#000000]`}>
        <h2 id={`news`} className={`text-lg`}>news</h2>
        {newss.length}
      </span>
      {
        newss
          .map((article: Article, _) => {
            return (
              <Link
                key={`article${article.number}`}
                to={`/blog/${article.number}`}>
                <span className={`hidden md:mr-2 md:inline`}>{article.createdAt.substring(0, 10)}</span>
                <span className={``}>{article.title}</span>
              </Link>
            )
          })
      }
    </article>
  )
}
