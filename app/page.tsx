import HeroSection from '../components/hero-section'
import { Inter } from '@next/font/google'
const inter = Inter({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
})
export default function Home() {
  return (
    <div className={`${inter.variable}`}>
      <HeroSection />
    </div>
  )
}
