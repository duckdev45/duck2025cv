import React from 'react'
import { motion } from 'framer-motion'

const Experience: React.FC = () => {
  return (
    <motion.div
      className="w-full max-w-xl mx-auto bg-white/70 rounded-2xl border border-white/10 p-6 md:p-8 backdrop-blur-xl"
      initial={{ opacity: 0, y: 75 }} // 初始狀態：透明、在下方 75px
      whileInView={{ opacity: 1, y: 0 }} // 進入畫面時：完全可見、回到原位
      viewport={{ once: true, margin: '-100px' }} // 動畫只播一次，並在元件距離底部 100px 時就觸發
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 className="font-pixel text-3xl md:text-4xl text-gray-500">{'Experience'}</h1>
      <div className="flex flex-col items-start gap-2 md:gap-8">
        {/* info block */}
        <div className={'mt-6 py-4'}>
          <div className={'font-semibold text-xl'}>允博科技有限公司-前端工程師</div>
          <div className={'text-gray-500 text-lg'}>2023/10 - 2025/08</div>
        </div>
        <div className={'mt-1'}>
          <div className={'font-semibold text-xl'}>安通國際事業股份有限公司-前端工程師</div>
          <div className={'text-gray-500 text-lg'}>2021/08 - 2022/12</div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience
