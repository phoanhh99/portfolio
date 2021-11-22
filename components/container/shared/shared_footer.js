import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/modules/svgColor.module.css'
import cn from 'classnames'

export default function SharedFooter() {
  return (
    <footer className='pt-10 w-full h-44 footer bg-base-200 text-base-content footer-center relative bottom-0'>
      <div className='grid grid-flow-col gap-4'>
        <Link href='/#about'>
          <a className='link link-hover'>About me</a>
        </Link>
        <Link href='/Contact'>
          <a className='link link-hover'>Contact</a>
        </Link>
        <Link href='/Projects'>
          <a className='link link-hover'>Projects</a>
        </Link>
      </div>
      <div className='inline-flex m-auto'>
        Copyright © {new Date().getFullYear()} - Powered by{' '}
        <Image
          className={cn(styles['fill--pink'])}
          src='/vercel.svg'
          alt='Vercel Logo'
          width={'60%'}
          height={'60%'}
          quality={100}
        />
      </div>
    </footer>
  )
}
