import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    // Animated background particles
    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.width = Math.random() * 3 + 'px'
        particle.style.height = particle.style.width
        particle.style.animation = `float ${5 + Math.random() * 5}s infinite`
        particle.style.animationDelay = Math.random() * 2 + 's'
        particlesRef.current?.appendChild(particle)
      }
    }

    createParticles()

    // Title animation
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out'
    })

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      delay: 0.3,
      ease: 'power3.out'
    })

    // Floating animation
    gsap.to(titleRef.current, {
      y: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

  }, [])

  return (
    <section ref={heroRef} className="hero" id="home">
      <div ref={particlesRef} className="particles"></div>

      <div className="hero-content">
        <motion.h1
          ref={titleRef}
          className="hero-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          FERRARI
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Experience the Art of Performance
        </motion.p>

        <motion.button
          className="hero-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Collection
        </motion.button>
      </div>

      <motion.div
        className="hero-glow"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      ></motion.div>
    </section>
  )
}