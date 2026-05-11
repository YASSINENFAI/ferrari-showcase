import { motion } from 'framer-motion'
import './CarCard.css'

export default function CarCard({ car }) {
  return (
    <div className="car-card">
      {/* Massive background index number */}
      <div className="car-card-bg-index">{car.index}</div>

      {/* Top metadata bar */}
      <div className="car-card-topbar">
        <div className="car-card-topbar-left">
          <span className="car-card-index-label">NO.{car.index}</span>
          <span className="car-card-sep">—</span>
          <span className="car-card-year">{car.year}</span>
        </div>
        <div className="car-card-topbar-right">
          <span className={`car-card-status ${car.status === 'ACTIVE' ? 'car-card-status--active' : ''}`}>
            ● {car.status}
          </span>
        </div>
      </div>

      {/* Main content grid */}
      <div className="car-card-body">
        {/* Left: Name + description */}
        <div className="car-card-info">
          <h3 className="car-card-name">{car.name}</h3>
          <span className="car-card-engine">{car.engine}</span>
          <p className="car-card-description">{car.description}</p>

          <motion.a
            href="#"
            className="car-card-link"
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="car-card-link-dot" />
            <span>FULL SPEC SHEET</span>
            <span className="car-card-link-arrow">→</span>
          </motion.a>
        </div>

        {/* Right: Specs telemetry block */}
        <div className="car-card-specs">
          <div className="car-card-specs-header">
            <span className="car-card-specs-title">PERFORMANCE DATA</span>
          </div>

          <div className="car-card-spec-row">
            <span className="car-card-spec-key">PWR</span>
            <span className="car-card-spec-value">{car.power}</span>
            <span className="car-card-spec-unit">CV</span>
          </div>

          <div className="car-card-spec-divider" />

          <div className="car-card-spec-row">
            <span className="car-card-spec-key">V_MAX</span>
            <span className="car-card-spec-value">{car.speed}</span>
            <span className="car-card-spec-unit">KM/H</span>
          </div>

          <div className="car-card-spec-divider" />

          <div className="car-card-spec-row">
            <span className="car-card-spec-key">0—100</span>
            <span className="car-card-spec-value">{car.accel}</span>
            <span className="car-card-spec-unit">SEC</span>
          </div>
        </div>
      </div>
    </div>
  )
}
