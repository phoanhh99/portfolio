import {useEffect, useState} from 'react'
function useAutoSlide(arrList = []) {
  const [index, setActive] = useState(0)
  const [cardDetail, setCardDetail] = useState({
    name: arrList[index].name,
    says: arrList[index].says,
    avatar: arrList[index].avatar,
  })
  useEffect(() => {
    const auto = setInterval(() => {
      setActive(prev => (prev + 1) % arrList.length)
      setCardDetail(prev => {
        return {
          ...prev,
          transition: true,
        }
      })
    }, 10000)
    return () => clearInterval(auto)
  }, [arrList.length])
  useEffect(() => {
    setCardDetail(prev => {
      return {
        ...prev,
        name: arrList[index].name,
        says: arrList[index].says,
        avatar: arrList[index].avatar,
      }
    })
    const auto = setTimeout(() => {
      setCardDetail(prev => {
        return {
          ...prev,
          transition: false,
        }
      })
    }, 900)
    return () => clearTimeout(auto)
  }, [arrList, index])

  return {cardDetail, index}
}

export default useAutoSlide
