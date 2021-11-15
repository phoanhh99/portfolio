import Image from 'next/image'
import classNames from 'classnames'
import React, {useRef, useEffect, useMemo} from 'react'
import useOpenInformation from '~/utils/hooks/useOpenInformation'
import MyDialog from '~/components/layout/modal'
import useMouseHover from '~/utils/hooks/useMouseHover'
export default function VtuberList(props) {
  const {theme} = props
  const imgRef = useRef([])
  useEffect(() => {
    imgRef.current = imgRef.current.slice(0, arr.length)
  }, [arr])
  //For Debugging purpose
  const arr = useMemo(
    () => [
      {
        name: 'Gawr Gura 🦈',
        alt: 'guraaIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/251247_457554.jpeg',
      },
      {
        name: `Ninomae Ina'nis 🐙`,
        alt: 'InaIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/712914_145875.jpeg',
      },
      {
        name: `Mori Calliope 💀`,
        alt: 'MoriIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/603788_561144.jpeg',
      },
      {
        name: `Takanashi Kiara 🍗`,
        alt: 'KiaraIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/207430_877763.jpeg',
      },
      {
        name: `Watson Amelia 🐶`,
        alt: 'AmeliaIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/112336_876930.jpeg',
      },
      {
        name: `Ceres Fauna 🌳`,
        alt: 'FaunaIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/725697_736344.png',
      },
      {
        name: `Nanashi Mumei 🦉`,
        alt: 'MumeiIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/441493_593755.png',
      },
      {
        name: `Shishiro Botan 🦁`,
        alt: 'BotanIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/737600_676337.png',
      },
      {
        name: `Tokino Sora 🐻`,
        alt: 'SoraIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_3000,w_2000,f_auto,q_auto/1369026/766395_704791.png',
      },
      {
        name: `Shirakami Fubuki 🦊`,
        alt: 'FubukiIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/215939_891350.png',
      },
      {
        name: `Hoshimachi Suisei ☄`,
        alt: 'SuiseiIcon',
        imgSrc:
          'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/718827_142512.png',
      },
      {
        name: `Ars Almal 🧙‍♀️`,
        alt: 'AlmalIcon',
        imgSrc:
          'https://images.microcms-assets.io/assets/08e9ffa2c9d94cf88900071dfa1879e9/feb5e5682a344a1f9716841996a51586/liver-cropped_Ars_Almal.png?fm=webp&w=564',
      },
      {
        name: `Tsukino Mito 👧`,
        alt: 'MitoIcon',
        imgSrc:
          'https://images.microcms-assets.io/assets/08e9ffa2c9d94cf88900071dfa1879e9/bea0bf53b6eb46f79bb54c65a01bfadf/liver-cropped_Mito_Tsukino.png?fm=webp&w=564',
      },
      {
        name: `Yuzuki Roa 😈`,
        alt: 'RoaIcon',
        imgSrc:
          'https://images.microcms-assets.io/assets/08e9ffa2c9d94cf88900071dfa1879e9/e0718c15e8954266b601e5596de4eb26/liver-cropped_Roa_Yuzuki.png?fm=webp&w=564',
      },
      {
        name: `Elira Pendora 🐲`,
        alt: 'EliraIcon',
        imgSrc:
          'https://images.microcms-assets.io/assets/08e9ffa2c9d94cf88900071dfa1879e9/7887b2f4b128421782b6c4b3ca007bd1/liver-cropped_Elira_Pendora.png?fm=webp&w=564',
      },
      {
        name: `Finana Ryugu 🐟`,
        alt: 'FinanaIcon',
        imgSrc:
          'https://images.microcms-assets.io/assets/08e9ffa2c9d94cf88900071dfa1879e9/853fa35dfae94e09b9358a5f60dceb90/liver-cropped_Finana_Ryugu.png?fm=webp&w=564',
      },
      {
        name: `Selen Tatsuki 🐉`,
        alt: 'SelenIcon',
        imgSrc:
          'https://images.microcms-assets.io/assets/08e9ffa2c9d94cf88900071dfa1879e9/a273e52e035846dca1610e49352e24cd/liver-cropped_Selen_Tatsuki.png?fm=webp&w=564',
      },
      {
        name: `Petra Gurin 🐧`,
        alt: 'PetraIcon',
        imgSrc:
          'https://images.microcms-assets.io/assets/08e9ffa2c9d94cf88900071dfa1879e9/871d2bc4465d4ac393e9d2a0bc910fd5/liver-cropped_Petra_Gurin.png?fm=webp&w=564',
      },
      {
        name: `Millie Parfait 🐈 🎃 👒`,
        alt: 'MillieIcon',
        imgSrc:
          'https://images.microcms-assets.io/assets/08e9ffa2c9d94cf88900071dfa1879e9/76a52cbfbbae449f99cc22637a088eab/liver-cropped_Millie_Parfait.png?fm=webp&w=564',
      },
    ],
    []
  )
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
