import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import CarsGallery from './components/CarsGallery'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainRef = useRef(null)

  useEffect(() => {
    // Smooth scroll is now handled by CSS (scroll-behavior: smooth)
  }, [])

  return (
    <main ref={mainRef} className="app">
      <Navigation />
      <Hero />
      <CarsGallery />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}

export default App