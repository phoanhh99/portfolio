import SharedFooter from "../layout/shared_footer"
import SharedHeader from "../layout/shared_header"


export default function Layout({ children }) {
   return (
      <>
         <SharedHeader />

         <main>{children}</main>

         <SharedFooter />
      </>
   )
}