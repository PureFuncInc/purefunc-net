import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

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
    <article>
      <Markdown className={`prose lg:prose-lg xl:prose-xl`}>{content}</Markdown>
    </article>
  )
}
