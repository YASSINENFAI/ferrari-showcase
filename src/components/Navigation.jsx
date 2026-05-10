import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import './Navigation.css'

export default function Navigation() {
  const navRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    // Logo animation
    gsap.from(logoRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    // Navigation scroll effect
    let lastScroll = 0
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll <= 0) {
        gsap.to(navRef.current, {
          background: 'rgba(10, 10, 10, 0.4)',
          duration: 0.3
        })
      } else {
        gsap.to(navRef.current, {
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(20px)',
          duration: 0.3
        })
      }

      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Gallery', 'Models', 'Performance', 'Contact']

  return (
    <motion.nav 
      ref={navRef}
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="nav-container">
        <motion.div
          ref={logoRef}
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🏁 FERRARI
        </motion.div>

        <div className="nav-links">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ color: 'var(--primary-red)' }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reserve
        </motion.button>
      </div>
    </motion.nav>
  )
}