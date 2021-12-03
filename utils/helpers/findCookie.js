export default function findCookies(keys) {
  const allCookies = document.cookie
  const splitArray = allCookies.split(';')
  const findKey = splitArray.find(row => row.trim().startsWith(`${keys}=`))
  return findKey && findKey.split('=')[1]
}
