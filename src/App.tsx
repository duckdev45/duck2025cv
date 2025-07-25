import Hero from './components/Hero.tsx'
import Skills from './components/Skills.tsx'
import heroBg from './assets/images/heroBg.png'

function App() {
  const BACKGROUND_URL = heroBg

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');
        
        body {
          font-family: 'Noto Sans TC', sans-serif;
        }
        
        .font-pixel {
          font-family: 'Press Start 2P', system-ui;
        }
      `}</style>

      {/* 主容器，設定背景圖和 padding */}
      <main
        className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${BACKGROUND_URL})` }}
      >
        <Hero />
        <h1 className="font-pixel text-4xl md:text-4xl text-gray-500 text-center mt-8 animate-bounce">
          ▼
        </h1>
        <Skills />
      </main>
    </>
  )
}

export default App
