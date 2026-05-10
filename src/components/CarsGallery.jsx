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
        y: 60,
        duration: 1,
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
      engine: '2.9L Twin-Turbo V8',
      description: 'The last Ferrari personally approved by Enzo. Raw, uncompromising, legendary. A twin-turbocharged declaration of intent that redefined what a road car could be.',
      index: '01',
    },
    {
      id: 2,
      name: 'F50',
      year: '1995',
      power: '512',
      speed: '325',
      accel: '3.7',
      engine: '4.7L Naturally Aspirated V12',
      description: 'Born from Formula One. The 4.7-litre V12 is a direct descendant of the 1990 Ferrari 641 grand prix car. No turbochargers, no power steering. Pure.',
      index: '02',
    },
    {
      id: 3,
      name: 'Enzo',
      year: '2002',
      power: '660',
      speed: '360',
      accel: '3.1',
      engine: '6.0L Naturally Aspirated V12',
      description: 'Named for the founder. Active aerodynamics, carbon-ceramic brakes, a naturally aspirated V12 producing 660 cavalli. The definitive hypercar of its era.',
      index: '03',
    },
    {
      id: 4,
      name: 'LaFerrari',
      year: '2013',
      power: '950',
      speed: '370',
      accel: '2.4',
      engine: '6.3L Hybrid V12 + HY-KERS',
      description: 'The hybrid revolution. 800 CV from a naturally aspirated V12, 163 CV from electric motors. Combined: 950 cavalli of relentless, instantaneous power.',
      index: '04',
    },
  ]

  return (
    <section ref={sectionRef} className="gallery" id="collection">
      <div className="gallery-header">
        <div className="container">
          <motion.div
            className="gallery-label"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="label-line" />
            <span className="label-text">The Collection</span>
          </motion.div>

          <motion.h2
            className="gallery-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Four Decades of
            <br />
            <em>Supremacy</em>
          </motion.h2>
        </div>
      </div>

      <div className="gallery-entries">
        {cars.map((car, i) => (
          <div key={car.id} className={`car-entry car-entry--${i % 2 === 0 ? 'left' : 'right'}`}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </section>
  )
}
