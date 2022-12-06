import HeroSection from '../components/hero-section'
import { Inter } from '@next/font/google'
import TopBar from '../components/top-bar'
const inter = Inter({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
})
export default function Home() {
  return (
    <div
      className={`
        ${inter.variable} 
        lg:max-w-[1100px]
        lg:mx-auto
      `}
    >
      <TopBar />
      <HeroSection />
    </div>
  )
}
