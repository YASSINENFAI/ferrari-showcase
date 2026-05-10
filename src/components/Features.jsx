import { motion } from 'framer-motion'
import './Features.css'

export default function Features() {
  const features = [
    {
      number: '01',
      title: 'Aerodinamica',
      subtitle: 'Performance',
      description: 'Active aerodynamics sculpted in the wind tunnel. Every curve calculated to slice through air with surgical precision at velocities exceeding 350 km/h.',
    },
    {
      number: '02',
      title: 'Artigianato',
      subtitle: 'Design',
      description: 'Hand-stitched leather, hand-laid carbon fibre, hand-painted coachwork. Each Ferrari requires over 600 hours of meticulous craftsmanship in Maranello.',
    },
    {
      number: '03',
      title: 'Ingegneria',
      subtitle: 'Engineering',
      description: 'Formula One technology distilled for the road. Carbon-ceramic brakes, magnetorheological suspension, side-slip angle control — precision without compromise.',
    },
    {
      number: '04',
      title: 'Patrimonio',
      subtitle: 'Legacy',
      description: 'From the 125 S in 1947 to the SF90 Stradale. Seven decades of victories at Le Mans, Monza, and Monaco forge the soul of every road car we build.',
    },
  ]

  return (
    <section className="features" id="heritage">
      <div className="features-diagonal-line" />

      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="features-label">
            <span className="label-line" />
            <span className="label-text">Heritage</span>
          </div>
          <h2 className="features-title">
            Built on
            <br />
            <em>Obsession</em>
          </h2>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="feature-number">{feature.number}</span>
              <div className="feature-content">
                <span className="feature-subtitle">{feature.subtitle}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
