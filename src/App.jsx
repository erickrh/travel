import './App.css'
import sanFrancisco from './img/sanFrancisco.jpg';
import { ReactComponent as TwitterIcon } from './svg/tw.svg';
import { ReactComponent as InstagramIcon } from './svg/ig.svg';
import { ReactComponent as HomeIcon } from './svg/home.svg';
import { ReactComponent as SearchIcon } from './svg/search.svg';
import { ReactComponent as RecommendsIcon } from './svg/like.svg';
import { ReactComponent as MoonIcon } from './svg/moon.svg';
import { ReactComponent as ProfileIcon } from './svg/profile.svg';

function App() {
  return (
    <>
      <nav></nav>

      <section className='w-full h-auto mb-10'>
        <div id='home'>
          <div className="w-full h-3/4">
            <div className='w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-20 lg:justify-start'>
              <input className='w-1/2 outline-none p-3 rounded-full shadow-sm transition-all ease-in-out duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden' placeholder='San Francisco' type="search" />
              <div className='hidden h-auto lg:w-2/5 lg:flex pb-6'>
                <p className='text-4xl ml-16 font-bold'>Find More Locations like this</p>
              </div>
              <button className='w-48 rounded-full text-lg text-primary font-semibold p-4 bg-white transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:translate-y-1 hover:scale-110 lg:ml-16'>
                Explorar
              </button>
            </div>
            <div className="w-full h-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
              <img className='lg:hidden' src={sanFrancisco} />
            </div>
          </div>
        </div>

        <div className='p-6' id='recomendados'>
          <p className='text-3xl font-semibold text-primary'>Recomendations</p>

          {/* Cards */}
          <div className='w-auto h-72 flex items-center mt-6 overflow-x-auto overscroll-x-contain overflow-y-hidden space-x-6'>
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

        {/* trendingStays */}
        <div>
          <div id='trendingStays' className='px-6 h-full w-full'>
            <p className='text-3xl text-primary font-semibold pb-6 mt-6'>Trending Stays</p>
            <div className='w-full h-auto flex flex-col space-y-6 items-center justify-center'>
              <div className='w-full h-96 bg-chicago bg-cover rounded-xl'>
                <p className='cardTitle'>Chicago</p>
                <p className='text-sm pl-8 mr-24 text-white font-semibold'>2 rooms, bathroom and kitchen.</p>
              </div>
              <div className='w-full h-96 bg-LA bg-cover rounded-xl'>
                <p className='cardTitle'>Europe</p>
                <p className='text-sm pl-8 mr-24 text-white font-semibold'>4 rooms, 3 bathrooms,  kitchen and private pool.</p>
              </div>
              <div className='w-full h-96 bg-miami bg-cover rounded-xl'>
                <p className='cardTitle'>Miami</p>
                <p className='text-sm pl-8 mr-24 text-white font-semibold'>3 rooms, 2 bathrooms,  kitchen and amazing sea view.</p>
              </div>
              <div className='w-full h-96 bg-bali bg-cover rounded-xl'>
                <p className='cardTitle'>Bali</p>
                <p className='text-sm pl-8 mr-24 text-white font-semibold'>2 rooms, 2 bathrooms,  kitchen and private pool.</p>
              </div>
            </div>
          </div>
        </div>

        <div id='faqs' className='w-full h-auto'>
          <div className='w-full h-full px-6 flex flex-col space-y-4'>
            <p className='text-3xl text-primary font-bold mt-6'>FAQs</p>
            <div>
              <p className='text-xl font-medium text-primary'>Payment Methods</p>
              <p className='font-medium pt-2'>
                We accept VISA, MasterCard, American Express, Paypal and Binance
              </p>
            </div>
            <div>
              <p className='text-xl font-medium text-primary'>Cancellation Policy</p>
              <p className='font-medium pt-2'>
                We accept VISA, MasterCard, American Express, Paypal and Binance
              </p>
            </div>
            <div>
              <p className='text-xl font-medium text-primary'>Long Stays</p>
              <p className='font-medium pt-2'>
                We accept VISA, MasterCard, American Express, Paypal and Binance
              </p>
            </div>
            <div>
              <p className='text-xl font-medium text-primary'>Payment Methods</p>
              <p className='font-medium pt-2'>
                We accept VISA, MasterCard, American Express, Paypal and Binance
              </p>
            </div>
            <div>
              <p className='text-xl font-medium text-primary'>Cancellation Policy</p>
              <p className='font-medium pt-2'>
                We accept VISA, MasterCard, American Express, Paypal and Binance
              </p>
            </div>
          </div>
        </div>

        <footer className='w-full h-auto bg-gray-50 p-6 space-y-2 flex flex-col'>
          <h3 className='text-lg text-gray-400 font-semibold'>About Us</h3>
          <a className='text-sm text-gray-400 cursor-pointer'>Investors</a>
          <a className='text-sm text-gray-400 cursor-pointer'>Jobs</a>
          <a className='text-sm text-gray-400 cursor-pointer'>Privacy policy</a>
          <a className='text-sm text-gray-400 cursor-pointer'>Terms and Conditions</a>
          <a className='text-sm text-gray-400 cursor-pointer'>Follow Us </a>
          <div className='flex space-x-4'>
            <button>
              <TwitterIcon className='w-7 h-7' />
            </button>
            <button>
              <InstagramIcon className='w-7 h-7' />
            </button>
          </div>
        </footer>
      </section>

      <div id='tabBar' className='w-full h-16 bg-white fixed left-0 bottom-0 shadow-md flex justify-center space-x-8 items-center lg:hidden'>
        <a href="#home">
          <HomeIcon className='w-7 h-7 fill-gray-200' />
        </a>
        <a href="#trendingStays">
          <SearchIcon className='w-7 h-7 fill-primary' />
        </a>
        <a href="#recomendados">
          <RecommendsIcon className='w-7 h-7 fill-gray-200' />
        </a>
        <button>
          <MoonIcon className='w-7 h-7 fill-gray-200' />
        </button>
        <button>
          <ProfileIcon className='w-7 h-7 fill-gray-200' />
        </button>
      </div>
    </>
  )
}

export default App
