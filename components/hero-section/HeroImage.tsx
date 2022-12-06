import Image from 'next/image'

function HeroImage() {
  return (
    <div className="relative">
      <Image
        data-cy="hero-image"
        src={`/images/image-web-3-mobile.jpg`}
        alt="Hero Image"
        width={0}
        height={0}
        className="min-h-[300px] object-cover"
        layout="responsive"
      />
    </div>
  )
}

export default HeroImage
