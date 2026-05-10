import { motion } from 'framer-motion'
import './Features.css'

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Cutting-edge technology pushing boundaries of speed'
    },
    {
      icon: '🎨',
      title: 'Design',
      description: 'Italian elegance meets modern innovation'
    },
    {
      icon: '🔧',
      title: 'Engineering',
      description: 'Precision craftsmanship in every detail'
    },
    {
      icon: '🏆',
      title: 'Legacy',
      description: 'Decades of motorsport excellence'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Ferrari
        </motion.h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="feature-icon"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}