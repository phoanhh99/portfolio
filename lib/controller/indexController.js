import path from 'path'
import fs from 'fs/promises'

const getHobbies = async () => {
  const fileDir = path.join(process.cwd(), 'database/hobbies.json')
  const reading = await fs.readFile(fileDir, 'utf8')
  return JSON.parse(reading)
}
const getVtuberList = async () => {
  const fileDir = path.join(process.cwd(), '/database/vtuberList.json')
  const content = await fs.readFile(fileDir, 'utf8')
  return JSON.parse(content)
}

export {getHobbies, getVtuberList}
