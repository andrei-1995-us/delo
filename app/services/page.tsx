'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ServicesHero from '@/components/ServicesHero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'

export default function ServicesPage() {
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
      <ServicesHero />
      <Services />
      <Process />
      <Pricing />
    </div>
  )
}
