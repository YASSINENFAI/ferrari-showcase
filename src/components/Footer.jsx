import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        {/* Main grid */}
        <div className="footer-grid">
          {/* Brand */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="footer-wordmark">FERRARI</span>
            <span className="footer-wordmark-bar" />
            <span className="footer-tagline">Maranello, Modena, Italia</span>
            <span className="footer-coords">44.5324° N, 10.8638° E</span>
          </motion.div>

          {/* Navigate */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-col-heading">NAVIGATE</h4>
            <ul className="footer-col-list">
              <li><a href="#collection">Collection</a></li>
              <li><a href="#heritage">Heritage</a></li>
              <li><a href="#reserve">Reserve</a></li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-col-heading">CONNECT</h4>
            <ul className="footer-col-list">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </motion.div>

          {/* System */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-col-heading">SYSTEM</h4>
            <ul className="footer-col-list">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="footer-copyright">© {currentYear} FERRARI S.P.A.</span>
            <div className="footer-status">
              <span className="footer-status-dot" />
              <span className="footer-status-text">ALL SYSTEMS ONLINE</span>
            </div>
          </div>
          <span className="footer-legal">
            Ferrari and the Prancing Horse are registered trademarks.
          </span>
        </div>
      </div>
    </footer>
  )
}
