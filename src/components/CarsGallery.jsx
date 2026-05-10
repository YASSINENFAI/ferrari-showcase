import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import './CarsGallery.css'

export default function CarsGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)

  const cars = [
    {
      id: 1,
      name: 'F40',
      year: '1987',
      power: '478 hp',
      speed: '324 km/h',
      engine: '2.9L Twin-Turbo V8',
      image: 'https://images.unsplash.com/photo-1592198084033-a99626785960?auto=format&fit=crop&q=80&w=1200',
      color: '#dc143c',
      description: 'The ultimate expression of raw power and legendary status.'
    },
    {
      id: 2,
      name: 'F50',
      year: '1995',
      power: '512 hp',
      speed: '325 km/h',
      engine: '4.7L V12',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f17?auto=format&fit=crop&q=80&w=1200',
      color: '#b22222',
      description: 'A tribute to F1 technology, bringing the track to the road.'
    },
    {
      id: 3,
      name: 'Enzo',
      year: '2002',
      power: '660 hp',
      speed: '360 km/h',
      engine: '6.0L V12',
      image: 'https://images.unsplash.com/photo-1594736797933-d0577578b984?auto=format&fit=crop&q=80&w=1200',
      color: '#8b0000',
      description: 'The masterpiece named after the founder himself.'
    },
    {
      id: 4,
      name: 'LaFerrari',
      year: '2013',
      power: '950 hp',
      speed: '370 km/h',
      engine: '6.3L Hybrid V12',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200',
      color: '#ff4d4d',
      description: 'The peak of hybrid performance and aerodynamic art.'
    },
    {
      id: 5,
      name: 'SF90 Stradale',
      year: '2019',
      power: '986 hp',
      speed: '340 km/h',
      engine: 'Turbo Hybrid V8',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d62621?auto=format&fit=crop&q=80&w=1200',
      color: '#ff0000',
      description: 'The most advanced and powerful road car in history.'
    },
    {
      id: 6,
      name: '812 Superfast',
      year: '2017',
      power: '789 hp',
      speed: '340 km/h',
      engine: '6.5L V12',
      image: 'https://images.unsplash.com/photo-1594736797933-d0577578b984?auto=format&fit=crop&q=80&w=1200',
      color: '#a52a2a',
      description: 'Pure V12 symphony and unmatched elegance.'
    },
    {
      id: 7,
      name: 'Roma',
      year: '2020',
      power: '612 hp',
      speed: '320 km/h',
      engine: '3.9L V8 Turbo',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f17?auto=format&fit=crop&q=80&w=1200',
      color: '#dc143c',
      description: 'La Nuova Dolce Vita - a blend of luxury and speed.'
    },
    {
      id: 8,
      name: 'Portofino M',
      year: '2020',
      power: '612 hp',
      speed: '320 km/h',
      engine: '3.9L V8 Turbo',
      image: 'https://images.unsplash.com/photo-1592198084033-a99626785960?auto=format&fit=crop&q=80&w=1200',
      color: '#ff0000',
      description: 'The perfect grand tourer for open-air adventures.'
    },
    {
      id: 9,
      name: '296 GTB',
      year: '2022',
      power: '819 hp',
      speed: '330 km/h',
      engine: 'V6 Hybrid',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d62621?auto=format&fit=crop&q=80&w=1200',
      color: '#e60000',
      description: 'Next-generation hybrid power and agility.'
    },
    {
      id: 10,
      name: '488 Pista',
      year: '2018',
      power: '710 hp',
      speed: '340 km/h',
      engine: '3.9L V8 Turbo',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200',
      color: '#ff4500',
      description: 'A track-focused beast designed for ultimate lap times.'
    },
    {
      id: 11,
      name: 'Testarossa',
      year: '1984',
      power: '390 hp',
      speed: '290 km/h',
      engine: '4.9L Flat-12',
      image: 'https://images.unsplash.com/photo-1592198084033-a99626785960?auto=format&fit=crop&q=80&w=1200',
      color: '#dc143c',
      description: 'The 80s icon that defined a generation.'
    },
    {
      id: 12,
      name: 'Dino 246',
      year: '1969',
      power: '150 hp',
      speed: '240 km/h',
      engine: '2.4L V6',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f17?auto=format&fit=crop&q=80&w=1200',
      color: '#ff6347',
      description: 'Graceful, timeless, and purely Italian.'
    }
  ]

  const nextCar = () => setActiveIndex((prev) => (prev + 1) % cars.length)
  const prevCar = () => setActiveIndex((prev) => (prev - 1 + cars.length) % cars.length)

  return (
    <section ref={sectionRef} className="gallery-pro" id="gallery">
      <div className="gallery-bg" style={{ backgroundColor: cars[activeIndex].color }}></div>
      
      <div className="container">
        <h2 className="gallery-title">Elite Collection</h2>
        
        <div className="main-viewer">
          <AnimatePresence mode="wait">
            <motion.div 
              key={cars[activeIndex].id}
              className="car-display"
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.8 }}
              transition={{ duration: 0.6, ease: 'circOut' }}
            >
              <div className="car-image-container">
                <img 
                  src={cars[activeIndex].image} 
                  alt={cars[activeIndex].name} 
                  className="main-car-img"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/1200x800?text=Ferrari+Luxury';
                  }}
                />
              </div>
              
              <div className="car-details">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.2 }}
                >
                  {cars[activeIndex].name}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.3 }}
                  className="car-desc"
                >
                  {cars[activeIndex].description}
                </motion.p>
                <div className="specs-grid">
                  <div className="spec-item"><span>Power</span> <strong>{cars[activeIndex].power}</strong></div>
                  <div className="spec-item"><span>Speed</span> <strong>{cars[activeIndex].speed}</strong></div>
                  <div className="spec-item"><span>Engine</span> <strong>{cars[activeIndex].engine}</strong></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="nav-arrows">
            <button onClick={prevCar} className="arrow-btn">←</button>
            <button onClick={nextCar} className="arrow-btn">→</button>
          </div>
        </div>

        <div className="thumbnail-strip">
          {cars.map((car, index) => (
            <motion.div 
              key={car.id}
              className={`thumb ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img 
                src={car.image} 
                alt={car.name} 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/100x60?text=Ferrari';
                }}
              />
              <span className="thumb-name">{car.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}