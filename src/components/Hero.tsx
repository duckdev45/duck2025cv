import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import duckAvatar from '../assets/images/duckAvatar.png'

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Duck'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) clearInterval(timer)
    }, 600)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="w-full max-w-xl mx-auto bg-white/70 rounded-2xl border border-white/10 p-6 md:p-8 backdrop-blur-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Avatar */}
        <motion.div
          className="w-32 h-32 md:w-38 md:h-38 flex-shrink-0 rounded-full overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <img
            src={duckAvatar}
            alt="Avatar"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/160x160/2A2A45/E040FB?text=Duck_H'
            }}
          />
        </motion.div>

        {/* info block */}
        <div className="text-center md:text-left py-2">
          <h1 className="font-pixel text-3xl md:text-4xl text-gray-500">{typedText}</h1>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <motion.button
              className="font-pixel bg-[#5cc278] text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="block md:hidden">#Frontend</span>
              <span className="hidden md:block">Frontend Developer</span>
            </motion.button>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <motion.button
              className="font-pixel bg-[#00CACA] text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="block md:hidden">#Taiwan</span>
              <span className="hidden md:block">based in Taiwan</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
