import { motion } from 'framer-motion'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta" id="reserve">
      <div className="cta-pattern" />

      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="cta-eyebrow">Private Consultation</span>

          <h2 className="cta-heading">
            Your Ferrari
            <br />
            <em>Awaits</em>
          </h2>

          <p className="cta-text">
            Every Ferrari begins with a conversation. Our atelier specialists
            will guide you through the Tailor Made programme to create
            a machine that is unmistakably, irreversibly yours.
          </p>

          <div className="cta-actions">
            <motion.button
              className="cta-btn-primary"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              Schedule a Visit
            </motion.button>

            <motion.a
              href="#collection"
              className="cta-btn-secondary"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
            >
              <span>View Collection</span>
              <span>&rarr;</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="cta-accent-line" />
    </section>
  )
}
