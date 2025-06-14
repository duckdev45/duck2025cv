import Hero from './components/Hero.tsx'
import heroBg from './assets/images/heroBg.png'

function App() {
  const BACKGROUND_URL = heroBg

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');
        
        body {
          font-family: 'Noto Sans TC', sans-serif; /* 使用更通用的中文字體作為內文 */
        }
        
        .font-pixel {
          font-family: 'Press Start 2P', system-ui;
        }
      `}</style>

      {/* 主容器，設定背景圖和 padding */}
      <main
        className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${BACKGROUND_URL})` }}
      >
        <Hero />
      </main>
    </>
  )
}

export default App
