import React from 'react'
import { motion } from 'framer-motion'

const Skills: React.FC = () => {
  return (
    <motion.div
      className="w-full max-w-xl mx-auto bg-white/70 rounded-2xl border border-white/10 p-6 md:p-8 backdrop-blur-xl"
      initial={{ opacity: 0, y: 75 }} // 初始狀態：透明、在下方 75px
      whileInView={{ opacity: 1, y: 0 }} // 進入畫面時：完全可見、回到原位
      viewport={{ once: true, margin: '-100px' }} // 動畫只播一次，並在元件距離底部 100px 時就觸發
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 className="font-pixel text-3xl md:text-4xl text-gray-500">{'Skills'}</h1>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* info block */}
        <div className="text-center py-2">
          <div className="flex justify-start gap-4 mt-6 flex-wrap">
            <motion.button
              className="font-pixel bg-[#00d8ff] text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>React</span>
            </motion.button>
            <motion.button
              className="font-pixel bg-[#42b883] text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Vue</span>
            </motion.button>
            <motion.button
              className="font-pixel bg-[#3178c6] text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>TypeScript</span>
            </motion.button>
            <motion.button
              className="font-pixel bg-[#37bcf8] text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Tailwind</span>
            </motion.button>
            <motion.button
              className="font-pixel bg-[#2196f3] text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>MUI</span>
            </motion.button>
            <motion.button
              className="font-pixel bg-[#f1502f] text-white px-6 py-2 rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>GIT</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
