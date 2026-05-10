import { motion } from 'framer-motion'
import './CarCard.css'

export default function CarCard({ car }) {
  return (
    <div className="car-card">
      <div className="car-card-index">{car.index}</div>

      <div className="car-card-layout">
        <div className="car-card-info">
          <div className="car-card-meta">
            <span className="car-card-year">{car.year}</span>
            <span className="car-card-dot" />
            <span className="car-card-engine">{car.engine}</span>
          </div>

          <h3 className="car-card-name">{car.name}</h3>

          <p className="car-card-description">{car.description}</p>

          <motion.a
            href="#"
            className="car-card-link"
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
          >
            <span>Full Specifications</span>
            <span className="car-card-link-arrow">&rarr;</span>
          </motion.a>
        </div>

        <div className="car-card-specs">
          <div className="spec-item">
            <span className="spec-number">{car.power}</span>
            <span className="spec-unit">cv</span>
            <span className="spec-label">Power</span>
          </div>
          <div className="spec-divider" />
          <div className="spec-item">
            <span className="spec-number">{car.speed}</span>
            <span className="spec-unit">km/h</span>
            <span className="spec-label">Top Speed</span>
          </div>
          <div className="spec-divider" />
          <div className="spec-item">
            <span className="spec-number">{car.accel}</span>
            <span className="spec-unit">sec</span>
            <span className="spec-label">0-100</span>
          </div>
        </div>
      </div>

      <div className="car-card-border-top" />
      <div className="car-card-border-bottom" />
    </div>
  )
}
