import path from 'path'
import fs from 'fs/promises'
import {getPlaiceholder} from 'plaiceholder'

const getHobbies = async () => {
  const fileDir = path.join(process.cwd(), 'database/hobbies.json')
  const reading = await fs.readFile(fileDir, 'utf8')
  return JSON.parse(reading)
}
const getVtuberList = async () => {
  const fileDir = path.join(process.cwd(), '/database/vtuberList.json')
  const readFile = await fs.readFile(fileDir, 'utf8')
  const content = JSON.parse(readFile)
  for await (const obj of content) {
    const {imgSrc} = obj
    const {base64} = await getPlaiceholder(imgSrc)
    obj['base64BlurSrc'] = base64
  }
  return content
}

export {getHobbies, getVtuberList}
