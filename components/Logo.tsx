import Image from 'next/image'

function Logo() {
  return (
    <Image
      data-cy="logo"
      src="/images/logo.svg"
      alt="News Homepage Brand"
      width={45}
      height={28}
    />
  )
}

export default Logo
