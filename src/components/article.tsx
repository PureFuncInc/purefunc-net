import React from 'react'
import Markdown from 'react-markdown'

interface Props {
  content: string
}

export default function Article({ content }: Props) {
  return (
    <Markdown>{content}</Markdown>
  )
}
