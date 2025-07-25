import React from 'react'
import { motion } from 'framer-motion'

const Skills: React.FC = () => {
  return (
    <motion.div
      className="w-full max-w-xl mx-auto bg-white/70 rounded-2xl border border-white/10 p-6 md:p-8 backdrop-blur-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* info block */}
        <div className="text-center py-2">
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              className="font-pixel bg-gray-600 text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>React</span>
            </motion.button>
            <motion.button
              className="font-pixel bg-gray-600 text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>TypeScript</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
