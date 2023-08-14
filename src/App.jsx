import './App.css'
import sanFrancisco from './img/sanFrancisco.jpg';

function App() {

  return (
    <>
      <nav></nav>

      <div id='tabBar'></div>

      <section className='w-full h-screen'>
        <div id='home'>
          <div className="w-full h-3/4">
            <div className='w-full h-full flex flex-col absolute space-y-96 py-4 items-center'>
              <input className='outline-none p-3 rounded-full shadow-sm' placeholder='San Francisco' type="search" name="" id="" />
              <button className='w-36 rounded-full text-xl text-primary font-semibold p-4 bg-white'>
                Explorar
              </button>
            </div>

            <div className="w-full h-full">
              <img src={sanFrancisco} />
            </div>
          </div>
        </div>

        <div className='p-6' id='recomendados'>
          <p className='text-3xl font-semibold text-primary'>Recomendations</p>

          {/* Cards */}
          <div className='w-auto h-72 flex items-center mt-6 overflow-x-auto overscroll-x-contain space-x-6'>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg bg-norway bg-cover'></div>
              <div className='w-full h-2/5 bg-secondary px-4 rounded-b-lg'>
                <p className='text-white font-bold text-lg py-2'>Norway</p>
                <p className='text-white text-base'>Beautiful landscapes</p>
              </div>
            </div>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg bg-new_york bg-cover'></div>
              <div className='w-full h-2/5 bg-white px-4 rounded-b-lg'>
                <p className='text-tertiary font-bold text-lg py-2'>New York</p>
                <p className='text-tertiary text-base'>Concrete jungle</p>
              </div>
            </div>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg bg-yosemite bg-cover'></div>
              <div className='w-full h-2/5 bg-secondary px-4 rounded-b-lg'>
                <p className='text-white font-bold text-lg py-2'>Yosemite</p>
                <p className='text-white text-base'>A break from the world</p>
              </div>
            </div>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg bg-seattle bg-cover'></div>
              <div className='w-full h-2/5 bg-white px-4 rounded-b-lg'>
                <p className='text-tertiary font-bold text-lg py-2'>Seattle</p>
                <p className='text-tertiary text-base'>Big City</p>
              </div>
            </div>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg bg-switzerland bg-cover'></div>
              <div className='w-full h-2/5 bg-secondary px-4 rounded-b-lg'>
                <p className='text-white font-bold text-lg py-2'>Switzerland</p>
                <p className='text-white text-base'>A great place</p>
              </div>
            </div>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg bg-sydney bg-cover bg-right-bottom'></div>
              <div className='w-full h-2/5 bg-white px-4 rounded-b-lg'>
                <p className='text-tertiary font-bold text-lg py-2'>Sydney</p>
                <p className='text-tertiary text-base'>Beautifull country</p>
              </div>
            </div>
          </div>
        </div>

        <div id='rentasDestacadas'></div>
      </section>
    </>
  )
}

export default App
