import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-logo">Ferrari</h3>
            <span className="footer-logo-line" />
            <p className="footer-tagline">
              Maranello, Modena, Italia
            </p>
          </motion.div>

          <motion.div
            className="footer-links-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><a href="#collection">Collection</a></li>
              <li><a href="#heritage">Heritage</a></li>
              <li><a href="#reserve">Reserve</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-links-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Ferrari S.p.A.
          </p>
          <p className="footer-legal">
            All rights reserved. Ferrari and the Prancing Horse are registered trademarks.
          </p>
        </div>
      </div>
    </footer>
  )
}
