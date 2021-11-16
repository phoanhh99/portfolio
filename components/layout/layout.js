import SharedFooter from 'components/container/shared_footer'
import SharedHeader from 'components/container/shared_header'

export default function Layout(props) {
  const {children, isPressed, openIt, closeIt, theme, saveLocal} = props
  return (
    <>
      <SharedHeader
        isPressed={isPressed}
        openIt={openIt}
        closeIt={closeIt}
        theme={theme}
        saveLocal={saveLocal}
      />
      <main>{children}</main>
      <SharedFooter />
    </>
  )
}
