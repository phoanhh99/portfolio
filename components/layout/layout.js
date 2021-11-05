import SharedHeader from "./shared_header"

SharedHeader
export default function Layout({ children }) {
   return (
      <>
         <SharedHeader></SharedHeader>
         <main>{children}</main>

      </>
   )
}