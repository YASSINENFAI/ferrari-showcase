import { motion } from 'framer-motion'
import './Features.css'

export default function Features() {
  const features = [
    {
      code: 'AERO',
      title: 'Aerodinamica',
      category: 'PERFORMANCE',
      description: 'Active aerodynamics sculpted in the wind tunnel. Every curve calculated to slice through air with surgical precision at velocities exceeding 350 km/h.',
      stat: '350+',
      statUnit: 'KM/H',
    },
    {
      code: 'CRFT',
      title: 'Artigianato',
      category: 'DESIGN',
      description: 'Hand-stitched leather, hand-laid carbon fibre, hand-painted coachwork. Each Ferrari requires over 600 hours of meticulous craftsmanship in Maranello.',
      stat: '600+',
      statUnit: 'HRS',
    },
    {
      code: 'ENGR',
      title: 'Ingegneria',
      category: 'ENGINEERING',
      description: 'Formula One technology distilled for the road. Carbon-ceramic brakes, magnetorheological suspension, side-slip angle control — precision without compromise.',
      stat: 'F1',
      statUnit: 'DNA',
    },
    {
      code: 'HRTG',
      title: 'Patrimonio',
      category: 'LEGACY',
      description: 'From the 125 S in 1947 to the SF90 Stradale. Seven decades of victories at Le Mans, Monza, and Monaco forge the soul of every road car we build.',
      stat: '75+',
      statUnit: 'YRS',
    },
  ]

  return (
    <section className="features" id="heritage">
      <div className="features-top-rule" />

      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="features-header-top">
            <div className="features-label">
              <span className="label-line" />
              <span className="label-text">HERITAGE</span>
            </div>
            <span className="features-header-code">SYS.CORE_VALUES</span>
          </div>

          <div className="features-title-block">
            <h2 className="features-title">BUILT ON</h2>
            <span className="features-title-italic">obsession</span>
          </div>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-cell"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="feature-cell-header">
                <span className="feature-cell-code">{feature.code}</span>
                <span className="feature-cell-category">{feature.category}</span>
              </div>

              <div className="feature-cell-stat">
                <span className="feature-cell-stat-value">{feature.stat}</span>
                <span className="feature-cell-stat-unit">{feature.statUnit}</span>
              </div>

              <h3 className="feature-cell-title">{feature.title}</h3>
              <p className="feature-cell-description">{feature.description}</p>
              <div className="feature-cell-accent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
