// import Axios from 'axios'
import axios from 'axios'
import fs from 'fs/promises'
import path from 'path'
import {getPlaiceholder} from 'plaiceholder'
const getUserData = async () => {
  //Fake user json
  const fileDir = path.join(process.cwd(), 'database/user.json')
  const reading = await fs.readFile(fileDir, 'utf8')
  return JSON.parse(reading)
}

const getRandomBgImage = async () => {
  const imgJson = await axios({
    method: 'get',
    baseURL: 'https://api.unsplash.com',
    url: '/photos/random',
    headers: {
      'Accept-Version': 'v1',
    },
    params: {
      topics: 'edQOmiheUtY',
      w: 1080,
      fit: 'max',
      client_id: process.env.UNSPLASH_ACCESS_KEY,
    },
    timeout: 2000,
  })

  const {base64} = await getPlaiceholder(imgJson.data.urls.full)
  return {
    imgSrc: imgJson.data.urls.full,
    blurImg: base64,
  }
}

export {getUserData, getRandomBgImage}
