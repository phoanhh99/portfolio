// import Axios from 'axios'
import path from 'path'
import fs from 'fs/promises'
const getUserData = async () => {
  //Fake user json
  const fileDir = path.join(process.cwd(), 'database/user.json')
  const reading = await fs.readFile(fileDir, 'utf8')
  return JSON.parse(reading)
}

export {getUserData}
