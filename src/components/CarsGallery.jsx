import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CarCard from './CarCard'
import './CarsGallery.css'

gsap.registerPlugin(ScrollTrigger)

export default function CarsGallery() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    // Animate section title
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%'
      },
      opacity: 0,
      y: 50,
      duration: 1
    })

    // Animate cards
    const cards = document.querySelectorAll('.car-card-wrapper')
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        },
        opacity: 0,
        y: 80,
        rotation: 5,
        duration: 0.8,
        delay: index * 0.15
      })
    })
  }, [])

  const cars = [
    {
      id: 1,
      name: 'F40',
      year: 1987,
      power: '478 hp',
      speed: '324 km/h',
      engine: '2.9L Twin-Turbo V8',
      image: '🏎️',
      color: '#FF0000',
      description: 'The legendary original. A masterpiece of engineering.'
    },
    {
      id: 2,
      name: 'F50',
      year: 1995,
      power: '512 hp',
      speed: '325 km/h',
      engine: '4.7L V12',
      image: '🏁',
      color: '#DC143C',
      description: 'Anniversary celebration. Pure F1 heritage.'
    },
    {
      id: 3,
      name: 'Enzo',
      year: 2002,
      power: '660 hp',
      speed: '360 km/h',
      engine: '6.0L V12',
      image: '🚗',
      color: '#8B0000',
      description: 'Named after the founder. Ultimate performance.'
    },
    {
      id: 4,
      name: 'LaFerrari',
      year: 2013,
      power: '950 hp',
      speed: '370 km/h',
      engine: '6.3L Hybrid V12',
      image: '⚡',
      color: '#FF6347',
      description: 'The future is hybrid. Revolutionary technology.'
    }
  ]

  return (
    <section ref={sectionRef} className="gallery" id="gallery">
      <div className="container">
        <motion.h2
          ref={titleRef}
          className="gallery-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Iconic Collection
        </motion.h2>

        <div className="gallery-grid">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              className="car-card-wrapper"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <CarCard car={car} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}