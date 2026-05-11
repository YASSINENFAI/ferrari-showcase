import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const redLineRef = useRef(null)
  const heroRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(redLineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, delay: 1.8, ease: 'power4.inOut' }
    )

    // Parallax on hero background image
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Full-bleed background image with parallax */}
      <div className="hero-bg-image-wrap">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1920&q=80"
          alt="Ferrari silhouette in dramatic lighting"
          className="hero-bg-image"
          loading="eager"
          fetchpriority="high"
        />
        <div className="hero-bg-image-overlay" />
      </div>

      <div className="hero-slash" />
      <div className="hero-grid-overlay" />

      <div className="hero-layout">
        <div className="hero-left">
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="hero-tag-dot" />
            <span className="hero-tag-text">EST. 1947 — MARANELLO</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            FERRARI
          </motion.h1>

          <div ref={redLineRef} className="hero-red-slash" />

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <em>Where physics surrenders to obsession.</em>
          </motion.p>

          <motion.a
            href="#collection"
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <span className="hero-cta-indicator" />
            <span className="hero-cta-text">ACCESS COLLECTION</span>
            <span className="hero-cta-arrow">→</span>
          </motion.a>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-telemetry">
            <div className="telemetry-header">
              <span className="telemetry-live" />
              <span className="telemetry-label">LIVE TELEMETRY</span>
            </div>

            <div className="telemetry-data">
              <div className="telemetry-row">
                <span className="telemetry-key">V_MAX</span>
                <span className="telemetry-value">370</span>
                <span className="telemetry-unit">KM/H</span>
              </div>
              <div className="telemetry-row">
                <span className="telemetry-key">PWR_OUT</span>
                <span className="telemetry-value">950</span>
                <span className="telemetry-unit">CV</span>
              </div>
              <div className="telemetry-row">
                <span className="telemetry-key">0—100</span>
                <span className="telemetry-value">2.4</span>
                <span className="telemetry-unit">SEC</span>
              </div>
              <div className="telemetry-row">
                <span className="telemetry-key">TORQ</span>
                <span className="telemetry-value">900</span>
                <span className="telemetry-unit">NM</span>
              </div>
            </div>

            <div className="telemetry-footer">
              <span className="telemetry-model">SF90_STRADALE</span>
              <span className="telemetry-status">● ACTIVE</span>
            </div>
          </div>

          <div className="hero-bg-number">370</div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
      >
        <span className="hero-scroll-line" />
        <span className="hero-scroll-text">SCROLL</span>
      </motion.div>

      <div className="hero-coords hero-coords--tl">44.5324° N</div>
      <div className="hero-coords hero-coords--br">10.8638° E</div>
    </section>
  )
}
