import Image from 'next/image'
import classNames from 'classnames'
import React, {useRef, useEffect, useContext} from 'react'
import useOpenInformation from '~/utils/hooks/useOpenInformation'
import MyDialog from '~/components/container/modal'
import useMouseHover from '~/utils/hooks/useMouseHover'
import {ThemeContext} from '../layout/layout'
export default function VtuberList(props) {
  const {arr} = props
  const {theme} = useContext(ThemeContext)
  const imgRef = useRef([])

  useEffect(() => {
    imgRef.current = imgRef.current.slice(0, arr.length)
  }, [arr])

  const {
    isShow: {status, whichOne},
    handleEventIn,
    handleEventOut,
  } = useMouseHover(imgRef)
  const {
    target: {isOpenModal, content},
    openInformation,
    closeInformation,
  } = useOpenInformation()

  return (
    <>
      <div className='grid py-5 grid-cols-1 gap-10 items-center md:grid-cols-2 md:grid-row-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10'>
        {arr.map(({name, alt, imgSrc, base64BlurSrc, description, url}, i) => (
          <div
            className='relative col-auto h-full w-full drop-shadow-lg border-primary border-2 border-solid rounded-md bg-center bg-no-repeat cursor-pointer'
            onMouseEnter={handleEventIn}
            onMouseLeave={handleEventOut}
            onClick={e =>
              openInformation(e, {
                image: imgSrc,
                name: name,
                description: description,
                alt: alt,
                url: url,
              })
            }
            ref={el => (imgRef.current[i] = el)}
            key={alt}
          >
            <Image
              className='object-top object-cover filter blur-lg transform scale-100 rounded-md'
              alt={alt}
              src={imgSrc}
              width={350}
              height={350}
              layout='responsive'
              placeholder='blur'
              blurDataURL={base64BlurSrc}
            />
            <div
              className={classNames(
                'absolute flex items-center justify-center rounded-b-md bottom-0 left-0 font-bold text-lg sm:text-xl xl:text-2xl text-white bg-black h-1/4 lg:h-1/3 w-full bg-opacity-60 transition duration-300 ease-linear',
                status && whichOne === imgRef.current[i]
                  ? 'opacity-100'
                  : 'opacity-0'
              )}
            >
              {name}
            </div>
          </div>
        ))}
      </div>
      <MyDialog
        isOpenModal={isOpenModal}
        openInformation={openInformation}
        closeInformation={closeInformation}
        content={content}
        theme={theme}
      />
    </>
  )
}
