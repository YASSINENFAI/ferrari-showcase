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
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%'
      },
      opacity: 0,
      y: 50,
      duration: 1
    })

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
      image: 'https://images.unsplash.com/photo-1592198084033-a99626785960?auto=format&fit=crop&q=80&w=800',
      color: '#FF0000',
      description: 'The legendary original. A masterpiece of engineering and raw power.'
    },
    {
      id: 2,
      name: 'F50',
      year: 1995,
      power: '512 hp',
      speed: '325 km/h',
      engine: '4.7L V12',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f17?auto=format&fit=crop&q=80&w=800',
      color: '#DC143C',
      description: 'Anniversary celebration. Pure F1 heritage for the road.'
    },
    {
      id: 3,
      name: 'Enzo',
      year: 2002,
      power: '660 hp',
      speed: '360 km/h',
      engine: '6.0L V12',
      image: 'https://images.unsplash.com/photo-1594736797933-d0577578b984?auto=format&fit=crop&q=80&w=800',
      color: '#8B0000',
      description: 'Named after the founder. The ultimate expression of performance.'
    },
    {
      id: 4,
      name: 'LaFerrari',
      year: 2013,
      power: '950 hp',
      speed: '370 km/h',
      engine: '6.3L Hybrid V12',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
      color: '#FF6347',
      description: 'The future is hybrid. A revolutionary leap in technology.'
    },
    {
      id: 5,
      name: 'SF90 Stradale',
      year: 2019,
      power: '986 hp',
      speed: '340 km/h',
      engine: 'Turbo Hybrid V8',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f17?auto=format&fit=crop&q=80&w=800',
      color: '#FF0000',
      description: 'The most powerful road car in Ferrari history.'
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