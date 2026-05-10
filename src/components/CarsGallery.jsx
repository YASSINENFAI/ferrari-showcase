import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CarsGallery.css'

gsap.registerPlugin(ScrollTrigger)

export default function CarsGallery() {
  const sectionRef = useRef(null)

  const cars = [
    {
      id: 1,
      name: 'F40',
      year: '1987',
      power: '478 hp',
      speed: '324 km/h',
      engine: '2.9L Twin-Turbo V8',
      image: 'https://images.unsplash.com/photo-1592198084033-a99626785960?auto=format&fit=crop&q=60&w=1200',
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
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f17?auto=format&fit=crop&q=60&w=1200',
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
      image: 'https://images.unsplash.com/photo-1594736797933-d0577578b984?auto=format&fit=crop&q=60&w=1200',
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
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=60&w=1200',
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
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d62621?auto=format&fit=crop&q=60&w=1200',
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
      image: 'https://images.unsplash.com/photo-1594736797933-d0577578b984?auto=format&fit=crop&q=60&w=1200',
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
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f17?auto=format&fit=crop&q=60&w=1200',
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
      image: 'https://images.unsplash.com/photo-1592198084033-a99626785960?auto=format&fit=crop&q=60&w=1200',
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
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d62621?auto=format&fit=crop&q=60&w=1200',
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
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=60&w=1200',
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
      image: 'https://images.unsplash.com/photo-1592198084033-a99626785960?auto=format&fit=crop&q=60&w=1200',
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
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f17?auto=format&fit=crop&q=60&w=1200',
      color: '#ff6347',
      description: 'Graceful, timeless, and purely Italian.'
    }
  ]

  useEffect(() => {
    const sections = document.querySelectorAll('.car-section')
    sections.forEach((section) => {
      gsap.fromTo(section.querySelector('.car-content'), 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 30%',
            scrub: true,
          }
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="vertical-gallery" id="gallery">
      <h2 className="gallery-title">Legendary Fleet</h2>
      
      <div className="cars-list">
        {cars.map((car, index) => (
          <div key={car.id} className="car-section" style={{ '--accent-color': car.color }}>
            <div className="car-content">
              <div className="car-visual">
                <motion.img 
                  src={car.image} 
                  alt={car.name} 
                  className="car-main-img"
                  loading="lazy"
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                <div className="image-overlay"></div>
              </div>
              
              <div className="car-info">
                <span className="car-year">{car.year}</span>
                <h3>{car.name}</h3>
                <p className="car-description">{car.description}</p>
                <div className="specs-bar">
                  <div className="spec"><span>Power</span> {car.power}</div>
                  <div className="spec"><span>Speed</span> {car.speed}</div>
                  <div className="spec"><span>Engine</span> {car.engine}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="final-cta">
        <h3>Ready to Drive?</h3>
        <button className="cta-btn">Join the Club</button>
      </div>
    </section>
  )
}