import { motion } from 'framer-motion'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta" id="reserve">
      <div className="cta-diagonal" />

      <div className="container">
        <div className="cta-layout">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="cta-label">
              <span className="label-line" />
              <span className="label-text">PRIVATE ACCESS</span>
            </div>

            <h2 className="cta-title">YOUR FERRARI</h2>
            <p className="cta-title-sub">
              <em>awaits configuration</em>
            </p>

            <p className="cta-description">
              Every Ferrari begins with a conversation. Our atelier specialists
              guide you through the Tailor Made programme — a machine that is
              unmistakably, irreversibly yours.
            </p>

            <div className="cta-actions">
              <motion.button
                className="cta-btn-primary"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="cta-btn-dot" />
                <span>SCHEDULE A VISIT</span>
              </motion.button>

              <motion.a
                href="#collection"
                className="cta-btn-link"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
              >
                <span>VIEW COLLECTION</span>
                <span className="cta-btn-link-arrow">→</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="cta-aside"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-aside-block">
              <div className="cta-aside-header">
                <span className="cta-aside-dot" />
                <span className="cta-aside-label">ATELIER STATUS</span>
              </div>

              <div className="cta-aside-rows">
                <div className="cta-aside-row">
                  <span className="cta-aside-key">LOCATION</span>
                  <span className="cta-aside-value">MARANELLO, IT</span>
                </div>
                <div className="cta-aside-row">
                  <span className="cta-aside-key">PROGRAMME</span>
                  <span className="cta-aside-value">TAILOR MADE</span>
                </div>
                <div className="cta-aside-row">
                  <span className="cta-aside-key">WAIT</span>
                  <span className="cta-aside-value">18—24 MO</span>
                </div>
                <div className="cta-aside-row">
                  <span className="cta-aside-key">STATUS</span>
                  <span className="cta-aside-value cta-aside-value--active">● ACCEPTING</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
