import { createTheme } from "@mui/system"

function handleTheme(mode = "") {
   return createTheme({
      palette: {
         mode,
         ...(mode === "light" ? {
            primary: {
               main: '#a74fc3',
            },
            secondary: {
               main: '#da326a',
            },
            error: {
               main: '#f5090d',
            },
            success: {
               main: '#1fb71f',
            },
         } : {
            primary: {
               main: '#1f9652',
            },
            secondary: {
               main: '#673ab7',
            },
            error: {
               main: '#ec1d00',
            },
            success: {
               main: '#f7a100',
            },
         })
      }
   })
}

export default handleTheme; 