'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutHero from '@/components/AboutHero'
import Team from '@/components/Team'
import Values from '@/components/Values'
import History from '@/components/History'

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  return (
    <div className="overflow-hidden">
      <AboutHero />
      <History />
      <Values />
      <Team />
    </div>
  )
}
