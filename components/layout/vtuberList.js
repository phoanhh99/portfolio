import Image from 'next/image'
import classNames from 'classnames'
import React, {useState, useRef, useEffect, useMemo} from 'react'
export default function VtuberList() {
  const [isShow, setShow] = useState({
    whichOne: '',
    status: false,
  })
  const imgRef = useRef([])
  useEffect(() => {
    imgRef.current = imgRef.current.slice(0, arr.length)
  }, [arr])
  //For Debugging purpose
  const arr = useMemo(
    () => [
      {
        name: 'Gawr gura 🔱',
        alt: 'GawrGuraIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/251247_457554.jpeg',
      },
      {
        name: `Ninomae Ina'nis 🐙`,
        alt: 'NinomaeInanisIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/712914_145875.jpeg',
      },
    ],
    []
  )

  const handleEvent = ({currentTarget}) =>
    currentTarget && imgRef.current.includes(currentTarget)
      ? setShow(prev => {
          return {
            whichOne: currentTarget,
            status: !prev.status,
          }
        })
      : setShow(prev => {
          return {
            whichOne: null,
            status: !prev.status,
          }
        })

  return (
    <div className='grid py-5 grid-cols-1 gap-y-5 items-center md:grid-cols-2 md:grid-row-2 md:gap-6'>
      {arr.map(({name, alt, imgSrc}, i) => (
        <div
          className='relative col-auto row-auto flex items-end justify-center h-64 w-full text-center text-gray-700 bg-center bg-no-repeat cursor-default'
          onMouseEnter={handleEvent}
          onMouseLeave={handleEvent}
          ref={el => (imgRef.current[i] = el)}
          key={alt}
        >
          <Image
            className='rounded-md'
            alt={alt}
            src={imgSrc}
            layout='fill'
            objectFit='cover'
            objectPosition='50% 50%'
            quality={100}
            loading='lazy'
          />
          <div
            className={classNames(
              'absolute font-bold text-xl md:text-2xl lg:text-3xl text-white bg-gray-700 h-1/3 w-full bg-opacity-80 flex justify-center items-center transition duration-300 ease-linear',
              isShow.status && isShow.whichOne === imgRef.current[i]
                ? 'opacity-100'
                : 'opacity-0'
            )}
          >
            {name}
          </div>
        </div>
      ))}
    </div>
  )
}
