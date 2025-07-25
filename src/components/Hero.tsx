import React from 'react'
import { motion } from 'framer-motion'
import duckAvatar from '../assets/images/duckAvatar.png'
// --- Hero (英雄登場區塊) ---
const Hero: React.FC = () => {
  return (
    // 卡片容器
    <motion.div
      className="w-full max-w-3xl mx-auto bg-white/70 rounded-2xl border border-white/10 p-6 md:p-8 backdrop-blur-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* 大頭貼 */}
        <motion.div
          className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden"
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

        {/* 右側資訊 */}
        <div className="text-center md:text-left py-2">
          <h1 className="font-pixel text-4xl md:text-5xl text-gray-500">YATZU HSU</h1>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <motion.button
              className="font-pixel bg-[#5cc278] text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Frontend
            </motion.button>
            <motion.button
              className="font-pixel bg-[#5cc278] text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Backend
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
