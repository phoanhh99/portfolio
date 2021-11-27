import fs from 'fs/promises'
import path from 'path'

const getCardList = async () => {
  const fileDir = path.join(process.cwd(), 'database/card-user-list.json')
  const readFile = await fs.readFile(fileDir, 'utf8')
  const content = JSON.parse(readFile)
  return content
}

export {getCardList}
