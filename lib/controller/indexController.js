import path from 'path'
import fs from 'fs/promises'
const getHobbies = async () => {
  const fileDir = path.join(process.cwd(), 'database/hobbies.json')
  const reading = await fs.readFile(fileDir, 'utf8')
  return JSON.parse(reading)
}
const getVtuberList = async () => {
  const fileDir = path.join(process.cwd(), '/database/vtuberList.json')
  const fileContent = await fs.readFile(fileDir, 'utf8')
  return JSON.parse(fileContent)
}

export {getHobbies, getVtuberList}
