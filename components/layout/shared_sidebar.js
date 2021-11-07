import Link from "next/link"
import {FontAwesomeIcon as Fa} from "@fortawesome/react-fontawesome"
import {faHomeLg} from "@fortawesome/free-solid-svg-icons"

export default function SharedSideBar() {
  return (
    <div className='drawer-side'>
      <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
      <aside className='flex flex-col justify-between border-r border-base-100 bg-base-100 text-base-content w-80'>
        <div className='sticky inset-x-0 w-full py-1 transition duration-100 ease-in-out border-b border-base-200 bg-base-100'>
          <ul className='menu flex flex-col p-4 pt-2 compact'>
            <li className='menu-title mt-4'>
              <span>Pages</span>
            </li>
            <li>
              <Link href='/' replace>
                <a>
                  <Fa
                    icon={faHomeLg}
                    className='text-2xl tracking-wider md:text-3xl'
                  ></Fa>
                  <span className='text-md tracking-wider mx-1 md:text-xl'>
                    Homepage
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
