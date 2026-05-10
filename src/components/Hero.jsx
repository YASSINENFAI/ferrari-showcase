import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import './Hero.css'

export default function Hero() {
  const lineRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.8, delay: 1.4, ease: 'power3.inOut' }
    )
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-bg-pattern" />

      <div className="hero-layout">
        <div className="hero-left">
          <motion.span
            className="hero-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Since 1947
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Velocit&agrave;
          </motion.h1>

          <div ref={lineRef} className="hero-gold-line" />

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Where Italian artistry meets
            <br />
            the physics of speed
          </motion.p>

          <motion.a
            href="#collection"
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <span className="hero-cta-text">Explore the Collection</span>
            <span className="hero-cta-arrow">&rarr;</span>
          </motion.a>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero-stat-block">
            <div className="hero-stat">
              <span className="hero-stat-number">370</span>
              <span className="hero-stat-unit">km/h</span>
              <span className="hero-stat-label">Top Speed</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">950</span>
              <span className="hero-stat-unit">cv</span>
              <span className="hero-stat-label">Power Output</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">2.4</span>
              <span className="hero-stat-unit">sec</span>
              <span className="hero-stat-label">0-100 km/h</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  )
}
