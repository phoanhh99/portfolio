import fs from 'fs'
import path from 'path'

export function getVtuberList() {
  const databaseDir = path.join(process.cwd(), '/database/vtuberList.json')
  const fileContent = fs.readFile(
    databaseDir,
    {encoding: 'utf8'},
    (err, data) => {
      if (err) return console.log(err)
      const {name, alt, imgSrc} = JSON.parse(data)
      return {name, alt, imgSrc}
    }
  )
  return {
    props: {
      arr: fileContent,
    },
  }
}
