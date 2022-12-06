import Image from 'next/image'

function MobileMenuButton() {
  return (
    <Image
      data-cy="mobile-menu-button"
      src="/images/icon-menu.svg"
      alt="Menu Button"
      width={40}
      height={17}
      className="cursor"
    />
  )
}

export default MobileMenuButton
