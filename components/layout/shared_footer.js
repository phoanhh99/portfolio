import Image from "next/image"
import styles from "styles/modules/svgColor.module.css"
import cn from "classnames"

export default function SharedFooter() {
  return (
    <footer className='flex items-center justify-center w-full h-24 border-t'>
      <a
        className='flex items-center justify-center'
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{" "}
        <Image
          className={cn(styles["fill--pink"], "!mt-1 !py-1")}
          src='/vercel.svg'
          alt='Vercel Logo'
          width={"60%"}
          height={"60%"}
          priority
        />
      </a>
    </footer>
  )
}
