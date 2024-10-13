import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedSubtitle() {
  const words = ["Data Engineer", "Problem Solver", "Tech Enthusiast"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.h2
      key={words[index]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-semibold text-gray-300 mt-4"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {words[index]}
    </motion.h2>
  )
}
