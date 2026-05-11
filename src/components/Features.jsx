import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Features.css'

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const stripRef = useRef(null)

  useEffect(() => {
    // Horizontal parallax on the dual-image strip
    if (stripRef.current) {
      gsap.to(stripRef.current, {
        xPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: stripRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, [])

  const features = [
    {
      code: 'AERO',
      title: 'Aerodinamica',
      category: 'PERFORMANCE',
      description: 'Active aerodynamics sculpted in the wind tunnel. Every curve calculated to slice through air with surgical precision at velocities exceeding 350 km/h.',
      stat: '350+',
      statUnit: 'KM/H',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80',
    },
    {
      code: 'CRFT',
      title: 'Artigianato',
      category: 'DESIGN',
      description: 'Hand-stitched leather, hand-laid carbon fibre, hand-painted coachwork. Each Ferrari requires over 600 hours of meticulous craftsmanship in Maranello.',
      stat: '600+',
      statUnit: 'HRS',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
    },
    {
      code: 'ENGR',
      title: 'Ingegneria',
      category: 'ENGINEERING',
      description: 'Formula One technology distilled for the road. Carbon-ceramic brakes, magnetorheological suspension, side-slip angle control — precision without compromise.',
      stat: 'F1',
      statUnit: 'DNA',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80',
    },
    {
      code: 'HRTG',
      title: 'Patrimonio',
      category: 'LEGACY',
      description: 'From the 125 S in 1947 to the SF90 Stradale. Seven decades of victories at Le Mans, Monza, and Monaco forge the soul of every road car we build.',
      stat: '75+',
      statUnit: 'YRS',
      image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=600&q=80',
    },
  ]

  return (
    <section className="features" id="heritage">
      <div className="features-top-rule" />

      {/* Atmospheric dual-image strip with parallax */}
      <div className="features-image-strip">
        <div className="features-image-strip-inner" ref={stripRef}>
          <div className="features-strip-item">
            <img
              src="/images/novitec-ferrari-3840x2160-25771.jpeg"
              alt="Novitec Ferrari detail"
              loading="lazy"
              decoding="async"
            />
            <div className="features-strip-item-overlay" />
          </div>
          <div className="features-strip-item">
            <img
              src="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=900&q=80"
              alt="Ferrari engine bay close-up"
              loading="lazy"
              decoding="async"
            />
            <div className="features-strip-item-overlay" />
          </div>
        </div>
        <span className="features-strip-label">SYS.HERITAGE_ARCHIVE</span>
      </div>

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
              {/* Feature thumbnail image */}
              <div className="feature-cell-image">
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="feature-cell-image-overlay" />
              </div>

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
