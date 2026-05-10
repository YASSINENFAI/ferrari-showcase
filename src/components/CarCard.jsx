import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import './CarCard.css'

export default function CarCard({ car, index }) {
  const cardRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    const image = imageRef.current

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      gsap.to(image, {
        rotationY: (x / rect.width) * 20 - 10,
        rotationX: (y / rect.height) * -20 + 10,
        duration: 0.5,
        transformOrigin: '50% 50%',
        perspective: 1000
      })
    }

    const handleMouseLeave = () => {
      gsap.to(image, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.5
      })
    }

    card?.addEventListener('mousemove', handleMouseMove)
    card?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card?.removeEventListener('mousemove', handleMouseMove)
      card?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className="car-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-glow"></div>

      <div className="card-header">
        <motion.h3
          className="car-name"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {car.name}
        </motion.h3>
        <span className="car-year">{car.year}</span>
      </div>

      <motion.div
        ref={imageRef}
        className="car-image"
        style={{
          background: `linear-gradient(135deg, ${car.color}15 0%, ${car.color}05 100%)`
        }}
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src={car.image} 
          alt={car.name} 
          className="car-img-element"
          loading="lazy"
        />
      </motion.div>

      <div className="card-specs">
        <motion.div
          className="spec-row"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="spec-label">Power</span>
          <span className="spec-value">{car.power}</span>
        </motion.div>

        <motion.div
          className="spec-row"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          <span className="spec-label">Speed</span>
          <span className="spec-value">{car.speed}</span>
        </motion.div>

        <motion.div
          className="spec-row"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="spec-label">Engine</span>
          <span className="spec-value">{car.engine}</span>
        </motion.div>
      </div>

      <motion.p
        className="car-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        {car.description}
      </motion.p>

      <motion.button
        className="card-button"
        whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${car.color}` }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  )
}