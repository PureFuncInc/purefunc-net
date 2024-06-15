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
    let script = 'export interface Article {\n'
    script += '    number: number\n'
    script += '    title: string\n'
    script += '}\n'
    script += '\n'
    script += 'export const Articles: Article[] = [\n'
    data.forEach(issue => {
      const { number, title } = issue
      script += '    {\n'
      script += `        number: ${number},\n`
      script += `        title: '${title}',\n`
      script += '    },\n'
    })
    script += ']\n'

    fs.writeFile('src/components/articles.ts', script, (err) => {
      if (err) throw err
      console.log('The articles.ts has been saved!')
    })

    return data
  })
  .then(data => data.forEach(issue => {
      fs.writeFile(`public/articles/${issue.number}.md`, issue.body, (err) => {
        if (err) throw err
        console.log(`The article${issue.number}.md has been saved!`)
      })
    })
  )
  .finally(() => {
    const data = new Date().toISOString()
    fs.writeFile('public/ts', data, () => {})
    console.log('Sync issues completed!')
  })
