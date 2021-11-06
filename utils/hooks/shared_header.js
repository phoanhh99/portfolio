import { useState } from 'react'
function useAnimation() {
   const [state, setState] = useState({
      lightMode: '',
      darkMode: '',
      style: {},
      distance: 0,
   })


   //Actions
   function handleAnimation(mode = "", target = "") {

      return mode === 'start'
         ? target === "light"
            ? setState(prev => {
               return {
                  ...prev,
                  lightMode: 'fa-fade',
                  style: {
                     '--fa-animation-duration': '1s',
                     '--fa-fade-opacity': '0.6'
                  }

               }
            })
            : setState(prev => {
               return {
                  ...prev,
                  darkMode: 'fa-fade',
                  style: {
                     '--fa-animation-duration': '1s',
                     '--fa-fade-opacity': '0.6'
                  }

               }
            })
         : setState(prev => {
            return {
               ...prev,
               lightMode: '',
               darkMode: '',
               style: {}
            }
         })
   }

   return {
      state, handleAnimation
   }
}

export { useAnimation };