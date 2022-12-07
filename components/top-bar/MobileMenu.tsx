'use client'

import Image from 'next/image'
import NavMenu from '../nav-menu'

interface MobileMenuProps {
  handleMenuVisibility: () => void
}

function MobileMenu({ handleMenuVisibility }: MobileMenuProps) {
  return (
    <div
      data-cy="mobile-nav-menu"
      className="  
        fixed 
        top-0
        right-0
        w-[256px] 
        bg-white 
        h-full
        p-6
        z-50
      "
    >
      <Image
        data-cy="mobile-close-menu-button"
        src="/images/icon-menu-close.svg"
        alt="Close Menu"
        width={30}
        height={30}
        className="float-right"
        onClick={handleMenuVisibility}
      />
      <div className="mt-24">
        <NavMenu />
      </div>
    </div>
  )
}

export default MobileMenu
