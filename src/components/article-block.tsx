import Markdown from 'react-markdown'
import React from 'react'

interface Props {
  content: string
}

export default function ArticleBlock({content}: Props) {
  return (
    <article className={`mx-auto`}>
      <Markdown className={`prose lg:prose-lg xl:prose-xl`}>{content}</Markdown>
    </article>
  )
}
