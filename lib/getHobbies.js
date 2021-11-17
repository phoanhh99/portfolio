import path from 'path'
import fs from 'fs/promises'
export async function getHobbies() {
  const fileDir = path.join(process.cwd(), 'database/hobbies.json')
  const reading = await fs.readFile(fileDir, 'utf8')
  return JSON.parse(reading)
}
