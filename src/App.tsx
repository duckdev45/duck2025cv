import Hero from './components/Hero.tsx'
import Skills from './components/Skills.tsx'
import heroBg from './assets/images/heroBg.png'
import Experience from './components/Experience.tsx'

function App() {
  const BACKGROUND_URL = heroBg

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');
        
        body {
          font-family: 'Noto Sans TC', sans-serif;
          overflow: hidden;
        }
        
        .font-pixel {
          font-family: 'Press Start 2P', system-ui;
        }
      `}</style>

      <main
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${BACKGROUND_URL})` }}
      >
        {/* Hero page */}
        <section className="h-screen w-full snap-start flex flex-col items-center justify-center p-4 md:p-8">
          <Hero />
          <h1 className="font-pixel mt-8 animate-bounce text-center text-4xl text-gray-500 md:text-4xl">
            ▼
          </h1>
        </section>

        {/* Skills page */}
        <section className="h-screen w-full snap-start flex flex-col items-center justify-center p-4 md:p-8">
          <Skills />
        </section>

        {/* Experience page */}
        <section className="h-screen w-full snap-start flex flex-col items-center justify-center p-4 md:p-8">
          <Experience />
        </section>
      </main>
    </>
  )
}

export default App
