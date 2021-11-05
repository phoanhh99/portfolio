import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useMemo } from 'react'

export default function SharedHeader() {
   const [isON, setOFF] = useState(false);

   useMemo(() => {
      if (typeof window === 'object') {
         document.cookie = `switch=${isON}; path='/'; max-age = 60*60*24*10;`;
      }
   }, [isON])

   useEffect(() => {
      const getCookie = document.cookie.split(';')
         .find(row => row.trim().startsWith('switch='))
         .split('=')[1];
      setOFF((getCookie === 'false')); // Convert `getCookie` to bool false or true

   }, [])

   return (
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
         <div className="flex-none px-2 mx-2">
            <h4 className="text-3xl md:text-xl font-bold">
               Port
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-pink-500 ">
                  folio
               </span>

            </h4>
         </div>
         <div className="flex-auto px-2 mx-2">
            <div className="items-stretch hidden md:flex">
               <a className="btn btn-ghost btn-sm rounded-btn">
                  About
               </a>
               <a className="btn btn-ghost btn-sm rounded-btn">
                  Contact
               </a>
            </div>
         </div>
         <div className="flex-none">
            <button className="btn btn-square btn-ghost" onClick={() => setOFF(!isON)} >
               {isON ? <Fa icon={faToggleOn} size='2x' /> : <Fa icon={faToggleOff} size='2x' />}
            </button>
         </div>
         <div className="flex-none">
            <button className="btn btn-square btn-ghost">
               <Fa icon={faSignInAlt} size='2x' />
            </button>
         </div>
      </div>
   )
}