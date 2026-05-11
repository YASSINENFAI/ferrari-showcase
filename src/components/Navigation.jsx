import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Navigation.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Collection', id: 'collection' },
    { label: 'Heritage', id: 'heritage' },
    { label: 'Reserve', id: 'reserve' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo / wordmark */}
        <motion.a
          href="#home"
          className="nav-logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="nav-logo-text">SCUDERIA</span>
          <span className="nav-logo-indicator" />
        </motion.a>

        {/* Center: section links */}
        <div className="nav-center">
          {navItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className="nav-item"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
            >
              <span className="nav-item-index">0{i + 1}</span>
              <span className="nav-item-label">{item.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Right: status block */}
        <motion.div
          className="nav-status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="nav-status-dot" />
          <span className="nav-status-text">ENQUIRE</span>
        </motion.div>
      </div>
    </nav>
  )
}
