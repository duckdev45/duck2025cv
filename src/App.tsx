import duckImage from './assets/images/duck.png'

function App() {
  return (
    <div className="bg-[#5cc278] min-h-screen flex justify-center items-center">
      <div className={'flex flex-col'}>
        <div className={'rounded-full h-60 w-60 overflow-hidden'}>
          <img src={duckImage} alt="duck" className={'w-full h-full object-cover'} />
        </div>
        <div>
          <p className="font-pixel mt-2 text-4xl font-bold text-white text-right">
            YATZU HSU </p>
          <p className="font-pixel mt-4 text-3xl font-bold text-white">
            FrontEnd Developer</p>
        </div>
        <h1 className="font-pixel mt-36 text-4xl font-bold text-center text-white animate-bounce ">
          ▼ </h1>
      </div>
    </div>
  )
}

export default App
