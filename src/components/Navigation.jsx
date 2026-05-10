import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Navigation.css'

export default function Navigation() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Collection', 'Heritage', 'Reserve']

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          Ferrari
          <span className="logo-accent" />
        </div>

        <div className="nav-links">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          className="reserve-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Enquire
        </motion.button>
      </div>
    </nav>
  )
}
