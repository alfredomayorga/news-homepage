import NewSection from '../new-section'
import HeroDescription from './HeroDescription'
import HeroImage from './HeroImage'
import HeroText from './HeroText'

function HeroSection() {
  return (
    <div className="flex flex-col">
      <HeroImage />
      <HeroText />
      <HeroDescription />
      <NewSection />
    </div>
  )
}

export default HeroSection
