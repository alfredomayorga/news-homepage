import Logo from '../Logo'
import MobileMenuButton from '../MobileMenuButton'

function TopBar() {
  return (
    <div
      className="
        flex 
        flex-row 
        items-center
        justify-between
        mb-8 
        mt-4
      "
    >
      <Logo />
      <MobileMenuButton />
    </div>
  )
}

export default TopBar
