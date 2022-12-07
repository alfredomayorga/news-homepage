'use client'

import Image from 'next/image'
import { useMobile } from '../hooks/useMobile'
function Logo() {
  const isMobile = useMobile()
  return (
    <Image
      data-cy="logo"
      src="/images/logo.svg"
      alt="News Homepage Brand"
      width={isMobile ? 45 : 64}
      height={isMobile ? 28 : 40}
    />
  )
}

export default Logo
