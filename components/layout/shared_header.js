import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import cn from 'classnames';
import { UseAnimation } from 'utils/hooks/shared_header'

const getCookie = () => {
   if (typeof window === 'object') {
      const arr = document.cookie.split(';');
      const existed = arr.some(r => r.trim().startsWith('switch='));
      if (existed) {
         const string = arr.find(r => r.trim().startsWith('switch=')).split('=')[1];
         const toBool = string === 'true';
         return toBool
      }
      document.cookie = `switch=${true}; path='/'; max-age = ${60 * 60 * 24 * 10};`;
      return true;
   }
}


export default function SharedHeader() {
   const [status, setStatus] = useState(getCookie);
   const { state: { lightMode, darkMode, style }, handleAnimation } = UseAnimation();

   useEffect(() => {
      if (typeof window === "object") {
         document.cookie = `switch=${status}; path='/'; max-age = ${60 * 60 * 24 * 10};`;
      }
      return status ? document.documentElement.setAttribute('data-theme', 'halloween')
         : document.documentElement.setAttribute('data-theme', 'cupcake')
   }, [status])

   return (
      <div className="navbar mb-2 bg-base-200">
         <div className="flex-none px-2 mx-2">
            <h4 className="text-3xl md:text-2xl lg:text-xl font-bold">
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-pink-500 ">
                  Portfolio
               </span>
            </h4>
         </div>
         <div className="flex-auto px-2 mx-2">
            <div className="items-stretch hidden md:flex">
               <a className="btn btn-ghost btn-sm rounded-btn">
                  Homepage
               </a>
               <a className="btn btn-ghost btn-sm rounded-btn">
                  Skillstack
               </a>
               <a className="btn btn-ghost btn-sm rounded-btn">
                  My CV
               </a>
            </div>
         </div>
         <div className="flex-none hidden md:inline-flex">
            <div className="mx-1 flex-nowrap w-max flex items-center">
               <Fa icon={faSun} color="#f8c50d" size='lg' className={cn("mx-1", lightMode)}
                  style={style}
                  onMouseEnter={() => handleAnimation('start', 'light')}
                  onMouseLeave={() => handleAnimation('stop', 'light')}
               />
               <div className="form-control">
                  <input type="checkbox" className="toggle toggle-lg toggle-primary" onChange={() => {
                     status ? setStatus(false) : setStatus(true)
                  }} defaultChecked={status} />

               </div>
               <Fa icon={faMoon} color="#D1D5DB" size='lg' className={cn("mx-1", darkMode)}
                  style={style}
                  onMouseEnter={() => handleAnimation('start', 'dark')}
                  onMouseLeave={() => handleAnimation('stop', 'dark')}

               />
            </div>
            <div className="mx-1">
               <button className="btn btn-square btn-ghost">
                  <Fa icon={faSignInAlt} size='2x' />
               </button>
            </div>
         </div>
      </div>
   )
}