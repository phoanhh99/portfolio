import Image from 'next/image'
import classNames from 'classnames'
import React, {useRef} from 'react'
import useOpenInformation from '~/utils/hooks/useOpenInformation'
import MyDialog from '~/components/layout/modal'
import useMouseHover from '~/utils/hooks/useMouseHover'
import {getVtuberList} from '~/lib/getVtuberList'

export async function getStaticProps(context) {
  const {
    params: {id},
    preview,
    previewData,
    locale,
    locales,
    defaultLocale,
  } = context
  console.log(
    `ID: ${id}\n\t preview: ${preview}\n\t previewData: ${previewData}\n\t locale: ${locale}\n\t locales: ${locales}\n\t defaultLocale: ${defaultLocale}`
  )
  const datas = await getVtuberList()
  return {
    props: {
      arr: datas,
    },
  }
}

export default function VtuberList(props) {
  const {theme, arr} = props
  const imgRef = useRef([])
  // useEffect(() => {
  //   imgRef.current = imgRef.current.slice(0, arr.length)
  // }, [arr])

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
        {arr.map(({name, alt, imgSrc}, i) => (
          <div
            className='relative col-auto h-full w-full  bg-center bg-no-repeat cursor-pointer border-primary border-2 border-solid border-opacity-25 '
            onMouseEnter={handleEventIn}
            onMouseLeave={handleEventOut}
            onClick={e =>
              openInformation(e, {
                image: imgSrc,
                name: name,
              })
            }
            ref={el => (imgRef.current[i] = el)}
            key={alt}
          >
            <Image
              className='object-top object-cover'
              alt={alt}
              src={imgSrc}
              width={350}
              height={350}
              layout='responsive'
              quality={100}
              loading='lazy'
            />
            <div
              className={classNames(
                'absolute flex items-center justify-center bottom-0 left-0 font-bold text-3xl md:text-2xl lg:text-xl text-white bg-black h-1/4 lg:h-1/3 w-full bg-opacity-60 transition duration-300 ease-linear',
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
