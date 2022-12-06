import Image from 'next/image'

function Logo() {
  return (
    <Image
      src="/images/logo.svg"
      alt="News Homepage Brand"
      width={45}
      height={28}
    />
  )
}

export default Logo
