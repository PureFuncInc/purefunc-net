const fs = require('node:fs')

fetch(
  `https://api.github.com/repos/PureFuncInc/purefunc-net/issues?page=${process.argv[2]}&per_page=100`,
  {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${process.argv[3]}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }
)
  .then(response => response.json())
  // === === === === === code gen for articles.ts === === === === ===
  .then(data => {
    let onlineData = data
      .filter(issue => issue.labels.map(label => label.name)
      .indexOf('draft') === -1)

    let articles = onlineData
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

    let articleTsHeader = `export interface Article {
  number: number
  title: string
  labels: string[]
  createdAt: string
}
`
    let articleTsBody = `
export const Articles: Article[] = [
${articles}
]
`

    fs.writeFile('src/components/articles.ts', articleTsHeader + articleTsBody, (err) => {
      if (err) throw err
      console.log('The articles.ts has been saved!')
    })

    return onlineData
  })
  // === === === === === code gen for blogN.tsx === === === === ===
  .then(onlineData => {
    onlineData.forEach(issue => {
      let blogTsxScript = `import React from 'react'
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

      fs.writeFile(`src/pages/blog${issue.number}.tsx`, blogTsxScript, (err) => {
        if (err) throw err
        console.log(`The src/pages/blog${issue.number}.tsx has been saved!`)
      })
    })

    return onlineData
  })
  // === === === === === code gen for App.tsx === === === === ===
  .then(onlineData => {
    let blogImports = onlineData.map(issue => `import Blog${issue.number} from './pages/blog${issue.number}'`).join('\n')
    let blogRoutes = onlineData.map(issue => `        <Route path={\`/blog/${issue.number}\`} element={<Blog${issue.number} />} />`).join('\n')

    let appTsxHeader = `import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
${blogImports}
`

    let appTsxBody = `
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

    fs.writeFile('src/App.tsx', appTsxHeader + appTsxBody, (err) => {
      if (err) throw err
      console.log('The App.tsx has been saved!')
    })

    return onlineData
  })
  .finally(() => {
    // write timestamp for avoiding git commit fail with no changes
    const data = `Built at ${new Date().toISOString()}`
    fs.writeFile('public/timestamp', data, () => {})
    console.log('Sync issues completed!')
  })
