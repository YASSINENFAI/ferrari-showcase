import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CarCard from './CarCard'
import './CarsGallery.css'

gsap.registerPlugin(ScrollTrigger)

export default function CarsGallery() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const entries = document.querySelectorAll('.car-entry')
    entries.forEach((entry) => {
      gsap.from(entry, {
        scrollTrigger: {
          trigger: entry,
          start: 'top 85%',
        },
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power3.out',
      })
    })
  }, [])

  const cars = [
    {
      id: 1,
      name: 'F40',
      year: '1987',
      power: '478',
      speed: '324',
      accel: '3.8',
      engine: '2.9L TWIN-TURBO V8',
      description: 'The last Ferrari personally approved by Enzo. Raw, uncompromising, legendary. A twin-turbocharged declaration of intent that redefined what a road car could be.',
      index: '01',
      status: 'ARCHIVED',
      image: 'https://images.unsplash.com/photo-1592198084033-a99626785960?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      name: 'F50',
      year: '1995',
      power: '512',
      speed: '325',
      accel: '3.7',
      engine: '4.7L NA V12',
      description: 'Born from Formula One. The 4.7-litre V12 is a direct descendant of the 1990 Ferrari 641 grand prix car. No turbochargers, no power steering. Pure.',
      index: '02',
      status: 'ARCHIVED',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f17?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      name: 'ENZO',
      year: '2002',
      power: '660',
      speed: '360',
      accel: '3.1',
      engine: '6.0L NA V12',
      description: 'Named for the founder. Active aerodynamics, carbon-ceramic brakes, a naturally aspirated V12 producing 660 cavalli. The definitive hypercar of its era.',
      index: '03',
      status: 'ARCHIVED',
      image: '/images/ferrari-f80-3840x2160-23811.jpg',
    },
    {
      id: 4,
      name: 'LaFerrari',
      year: '2013',
      power: '950',
      speed: '370',
      accel: '2.4',
      engine: '6.3L HYBRID V12',
      description: 'The hybrid revolution. 800 CV from a naturally aspirated V12, 163 CV from electric motors. Combined: 950 cavalli of relentless, instantaneous power.',
      index: '04',
      status: 'ACTIVE',
      image: '/images/ferrari-daytona-sp3-3840x2160-24127.jpg',
    },
  ]

  return (
    <section ref={sectionRef} className="gallery" id="collection">
      {/* Cinematic interstitial image strip */}
      <div className="gallery-cinematic-strip">
        <div className="gallery-cinematic-strip-inner">
          <img
            src="/images/ferrari-499p-3840x2160-25929.jpg"
            alt="Ferrari 499P racing silhouette"
            className="gallery-cinematic-img"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="gallery-cinematic-overlay" />
        <span className="gallery-cinematic-tag">ARCHIVIO FOTOGRAFICO</span>
      </div>

      <div className="gallery-header">
        <div className="container">
          <motion.div
            className="gallery-header-inner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="gallery-label">
              <span className="label-line" />
              <span className="label-text">THE COLLECTION</span>
            </div>

            <div className="gallery-title-row">
              <h2 className="gallery-title">FOUR DECADES</h2>
              <span className="gallery-title-accent">of supremacy</span>
            </div>

            <div className="gallery-meta">
              <span className="gallery-meta-item">4 UNITS</span>
              <span className="gallery-meta-sep">/</span>
              <span className="gallery-meta-item">1987—2013</span>
              <span className="gallery-meta-sep">/</span>
              <span className="gallery-meta-item">MARANELLO</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="gallery-entries">
        {cars.map((car) => (
          <div key={car.id} className="car-entry">
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </section>
  )
}
