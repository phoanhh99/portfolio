import SharedFooter from "../layout/shared_footer"
import SharedHeader from "../layout/shared_header"
import SharedSideBar from "../layout/shared_sidebar"

export default function Layout({children}) {
  return (
    <div className='bg-base-200 drawer'>
      <input type='checkbox' id='my-drawer-3' className='drawer-toggle' />
      <div className='flex-grow drawer-content text-base-content'>
        <SharedHeader />

        <main>{children}</main>

        <SharedFooter />
      </div>
      <SharedSideBar />
    </div>
  )
}
