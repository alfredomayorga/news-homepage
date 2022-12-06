'use client'

import Logo from '../Logo'
import MobileMenuButton from '../MobileMenuButton'
import { useMobile } from '../../hooks/useMobile'
import MobileMenu from './MobileMenu'
import { useState } from 'react'
function TopBar() {
  const isMobile = useMobile()
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false)
  function handelMobileMenuVisibility() {
    setMenuVisibility(!menuVisibility)
  }
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
      {isMobile && (
        <div onClick={handelMobileMenuVisibility}>
          <MobileMenuButton />
        </div>
      )}
      {menuVisibility && (
        <>
          <MobileMenu
            handleMenuVisibility={handelMobileMenuVisibility}
          />
          <div
            className="
          fixed 
          top-0 
          left-0 
          w-screen
          h-screen
          bg-[#000]
          opacity-80
          z-10
        "
          ></div>
        </>
      )}
    </div>
  )
}

export default TopBar
