const fs = require('node:fs')

fetch(
  'https://api.github.com/repos/PureFuncInc/purefunc-net/issues',
  {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${process.argv[2]}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }
)
  .then(response => response.json())
  .then(data => {
    // code gen for articles.ts

    let articles = data
      .map(issue => {
        const { number, title, labels, created_at } = issue
        return `  {
    number: ${number},
    title: '${title}',
    labels: [${labels.map(label => '\'' + label.name + '\'').join(',')}],
    createdAt: '${created_at}',
  }`
      })
      .join(',\n')

    let script = `
export interface Article {
  number: number
  title: string
  labels: string[]
  createdAt: string
}

export const Articles: Article[] = [
${articles}
]
`

    fs.writeFile('src/components/articles.ts', script, (err) => {
      if (err) throw err
      console.log('The articles.ts has been saved!')
    })

    return data
  })
  .then(data => {
    // code gen for blog1~blogN.tsx

    data.forEach(issue => {
      let script = `
import React from 'react'
import HeaderBlock from '../components/header-block'
import FooterBlock from '../components/footer-block'
import Markdown from 'react-markdown'

export default function Blog${issue.number}() {
  const content = \`\n${issue.body}\n\`

  return (
    <div className={\`flex w-full flex-col gap-16\`}>
      <HeaderBlock theme={\`light\`} />
      <article className={\`mx-auto\`}>
        <Markdown className={\`prose lg:prose-lg xl:prose-xl\`}>{content}</Markdown>
      </article>
      <FooterBlock theme={\`light\`} />
    </div>
  )
}
`

      fs.writeFile(`src/pages/blog${issue.number}.tsx`, script, (err) => {
        if (err) throw err
        console.log(`The src/pages/blog${issue.number}.tsx has been saved!`)
      })
    })

    return data
  })
  .then(data => {
    // code gen for App.tsx

    let blogImports = data.map(issue => `import Blog${issue.number} from './pages/blog${issue.number}'`).join('\n')
    let blogRoutes = data.map(issue => `        <Route path={\`/blog/${issue.number}\`} element={<Blog${issue.number} />} />`).join('\n')

    let script = `
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
${blogImports}

export default function App() {
  return (
    <>
      <Routes>
        <Route path={\`/\`} element={<Home />} />
        <Route path={\`/blog\`} element={<Blog />} />
${blogRoutes}
      </Routes>
    </>
  )
}
`

    fs.writeFile('src/App.tsx', script, (err) => {
      if (err) throw err
      console.log('The App.tsx has been saved!')
    })

    return data
  })
  .finally(() => {
    // write timestamp for avoiding git commit fail with no changes

    const data = `Built at ${new Date().toISOString()}`
    fs.writeFile('public/timestamp', data, () => {})
    console.log('Sync issues completed!')
  })
