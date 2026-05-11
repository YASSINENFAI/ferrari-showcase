import { useEffect } from 'react'
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
  useEffect(() => {
    // Global scroll-triggered section reveals
    const sections = document.querySelectorAll('.gallery, .features, .cta, .footer')
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 95%',
          once: true,
        },
        opacity: 0.6,
        duration: 1.2,
        ease: 'power2.out',
      })
    })

    // Cinematic strip parallax
    const cinematicImg = document.querySelector('.gallery-cinematic-img')
    const cinematicWrap = document.querySelector('.gallery-cinematic-strip')
    if (cinematicImg && cinematicWrap) {
      gsap.fromTo(cinematicImg,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: cinematicWrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }

    // Smooth fade for navigation on scroll
    const nav = document.querySelector('.nav')
    if (nav) {
      ScrollTrigger.create({
        start: 'top -80',
        onUpdate: (self) => {
          if (self.direction === 1) {
            nav.classList.add('nav--scrolled')
          }
          if (self.scroll() < 80) {
            nav.classList.remove('nav--scrolled')
          }
        },
      })
    }
  }, [])

  return (
    <main className="app">
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
