'use client'

import Image from 'next/image'
import { useMobile } from '../../hooks/useMobile'
function HeroImage() {
  const isMobile = useMobile()
  return (
    <div
      className="
        relative
        lg:col-span-2
      "
    >
      <Image
        data-cy="hero-image"
        src={
          isMobile
            ? `/images/image-web-3-mobile.jpg`
            : `/images/image-web-3-desktop.jpg`
        }
        alt="Hero Image"
        width={0}
        height={0}
        className="min-h-[300px]"
        layout="responsive"
      />
    </div>
  )
}

export default HeroImage
