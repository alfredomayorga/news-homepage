import NewSection from '../new-section'
import HeroDescription from './HeroDescription'
import HeroImage from './HeroImage'
import HeroText from './HeroText'

function HeroSection() {
  return (
    <div
      className="
        flex 
        flex-col
        lg:grid
        lg:grid-cols-3
        lg:grid-rows-2
        lg:max-h-[511px]
        lg:gap-8
      "
    >
      <HeroImage />
      <HeroText />
      <HeroDescription />
      <NewSection />
    </div>
  )
}

export default HeroSection
