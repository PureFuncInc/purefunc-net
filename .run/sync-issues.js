import fs from 'node:fs'

const token = process.env.GITHUB_TOKEN

let headers = {
  'Accept': 'application/vnd.github+json',
  'Authorization': `Bearer ${token}`,
  'X-GitHub-Api-Version': '2022-11-28'
}

fetch('https://api.github.com/repos/PureFuncInc/purefunc-net/issues', { method: 'GET', headers: headers })
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(data => {
    data.forEach(issue => {
      fs.writeFile(`public/articles/${issue.number}.md`, issue.body, (err) => {
        if (err) throw err
        console.log('The file has been saved!')
      })
    })
  })

