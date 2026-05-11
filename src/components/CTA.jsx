import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CTA.css'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const bgRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (bgRef.current && sectionRef.current) {
      gsap.fromTo(bgRef.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }
  }, [])

  return (
    <section className="cta" id="reserve" ref={sectionRef}>
      {/* Full-bleed cinematic background */}
      <div className="cta-bg-wrap">
        <img
          ref={bgRef}
          src="https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=1920&q=80"
          alt="Ferrari Maranello factory at dusk"
          className="cta-bg-image"
          loading="lazy"
          decoding="async"
        />
        <div className="cta-bg-overlay" />
      </div>

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
            {/* Aside image */}
            <div className="cta-aside-image">
              <img
                src="/images/ferrari-daytona-sp3-3840x2160-24127.jpg"
                alt="Ferrari Daytona SP3 interior detail"
                loading="lazy"
                decoding="async"
              />
              <div className="cta-aside-image-overlay" />
              <span className="cta-aside-image-tag">ATELIER_VIEW</span>
            </div>

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
