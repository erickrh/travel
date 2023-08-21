import './App.css'
import sanFrancisco from './img/sanFrancisco.jpg';
import sanFranciscoDesktop from './img/sanFranciscoDesktop.jpg';
import norway from './img/norway.jpg';
import new_york from './img/new_york.jpg';
import yosemite from './img/yosemite.jpg';
import seattle from './img/seattle.jpg';
import switzerland from './img/switzerland.jpg';
import sydney from './img/sydney.jpg';

import { ReactComponent as TwitterIcon } from './svg/tw.svg';
import { ReactComponent as InstagramIcon } from './svg/ig.svg';
import { ReactComponent as HomeIcon } from './svg/home.svg';
import { ReactComponent as SearchIcon } from './svg/search.svg';
import { ReactComponent as RecommendsIcon } from './svg/like.svg';
import { ReactComponent as MoonIcon } from './svg/moon.svg';
import { ReactComponent as ProfileIcon } from './svg/profile.svg';

function App() {
  const htmlElement = document.querySelector('html');
  const toggleDarkMode = () => {
    htmlElement.classList.toggle('dark');
  }

  return (
    <>
      <nav className='w-full h-14 hidden lg:flex items-center bg-white py-4 px-8 justify-between fixed z-50 dark:bg-gray-800'>
        <div className='h-auto w-auto'>
          <p className='text-xl text-primary font-black dark:text-white'>Travel</p>
        </div>
        <div className='flex space-x-8 items-center'>
          <a className='font-bold text-base text-primary dark:text-white' href="#home">Home</a>
          <a className='font-bold text-base text-primary dark:text-white' href="#recommended">Recommended</a>
          <a className='font-bold text-base text-primary dark:text-white' href="#trendingStays">Rents</a>
          <a className='font-bold text-base text-primary dark:text-white' href="#aboutUs">About Us</a>
        </div>
        <div className='flex items-center space-x-4'>
          <button>
            <SearchIcon className='w-7 fill-primary dark:fill-white' />
          </button>
          <button onClick={toggleDarkMode}>
            <MoonIcon className='w-7 fill-primary dark:fill-white' />
          </button>
          <button>
            <ProfileIcon className='w-4 fill-gray-300 dark:fill-white' />
          </button>
        </div>
      </nav>

      <section className='w-full h-auto mb-12 lg:h-screen'>
        <div className='w-full h-3/4' id='home'>
          <div className="w-full h-full">
            <div className='w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-48 lg:justify-start'>
              <input className='w-1/2 outline-none p-3 rounded-full shadow-sm transition-all ease-in-out duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden' placeholder='San Francisco' type="search" />
              <div className='hidden h-auto lg:w-2/5 lg:flex pb-6'>
                <p className='text-4xl ml-16 font-bold'>Find More Locations like this</p>
              </div>
              <button className='w-48 rounded-full text-lg text-primary font-semibold p-4 bg-white transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:translate-y-1 hover:scale-110 lg:ml-16'>
                Explorar
              </button>
            </div>
            <div className="w-full h-full lg:bg-cover lg:bg-center">
              <img className='lg:hidden' src={sanFrancisco} />
              <img className='hidden lg:flex h-full w-full object-cover' src={sanFranciscoDesktop} />
            </div>
          </div>
        </div>

        <div className='w-full h-auto' id='recommended'>
          <p className='text-3xl font-semibold text-primary dark:text-white pt-6 pl-6'>Recommended</p>

          {/* Cards */}
          <div className='w-auto h-72 flex items-center mt-6 p-6 overflow-x-auto overscroll-x-contain overflow-y-hidden space-x-6'>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg'>
                <img className='h-full w-full object-cover' src={norway} alt="Norway" />
              </div>
              <div className='w-full h-2/5 bg-secondary px-4 rounded-b-lg dark:bg-gray-700'>
                <p className='text-white font-bold text-lg py-2'>Norway</p>
                <p className='text-white text-base'>Beautiful landscapes</p>
              </div>
            </div>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg'>
                <img className='h-full w-full object-cover' src={new_york} alt="New York" />
              </div>
              <div className='w-full h-2/5 bg-white px-4 rounded-b-lg dark:bg-gray-800'>
                <p className='text-tertiary font-bold text-lg py-2 dark:text-white'>New York</p>
                <p className='text-tertiary text-base dark:text-white'>Concrete jungle</p>
              </div>
            </div>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg'>
                <img className='h-full w-full object-cover object-left' src={yosemite} alt="Yosemite" />
              </div>
              <div className='w-full h-2/5 bg-secondary px-4 rounded-b-lg dark:bg-gray-700'>
                <p className='text-white font-bold text-lg py-2'>Yosemite</p>
                <p className='text-white text-base'>A break from the world</p>
              </div>
            </div>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg'>
                <img className='h-full w-full object-cover object-left' src={seattle} alt="seattle" />
              </div>
              <div className='w-full h-2/5 bg-white px-4 rounded-b-lg dark:bg-gray-800'>
                <p className='text-tertiary font-bold text-lg py-2 dark:text-white'>Seattle</p>
                <p className='text-tertiary text-base dark:text-white'>Big City</p>
              </div>
            </div>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg'>
                <img className='h-full w-full object-cover object-left' src={switzerland} alt="switzerland" />
              </div>
              <div className='w-full h-2/5 bg-secondary px-4 rounded-b-lg  dark:bg-gray-700'>
                <p className='text-white font-bold text-lg py-2'>Switzerland</p>
                <p className='text-white text-base'>A great place</p>
              </div>
            </div>
            <div className="card">
              <div className='w-full h-3/5 rounded-t-lg'>
                <img className='h-full w-full object-cover object-right-bottom' src={sydney} alt="sydney" />
              </div>
              <div className='w-full h-2/5 bg-white px-4 rounded-b-lg dark:bg-gray-800'>
                <p className='text-tertiary font-bold text-lg py-2 dark:text-white'>Sydney</p>
                <p className='text-tertiary text-base dark:text-white'>Beautifull country</p>
              </div>
            </div>
          </div>
        </div>

        {/* trendingStays */}
        <div>
          <div id='trendingStays' className='px-2 h-full w-full lg:px-6'>
            <p className='text-3xl text-primary font-semibold pb-6 mt-6 dark:text-white'>Trending Stays</p>
            <div className='w-full h-auto flex flex-col items-center justify-center'>
              <div className='w-full h-96 bg-chicago bg-cover rounded-xl mb-8 lg:bg-center'>
                <p className='cardTitle lg:text-white lg:font-bold'>Chicago</p>
                <p className='text-sm pl-8 mr-24 text-white font-semibold lg:text-lg'>2 rooms, bathroom and kitchen.</p>
              </div>
              <div className='lg:flex lg:h-full lg:w-full lg:space-x-6'>
                <div className='w-full h-96 bg-LA bg-cover rounded-xl mb-8 lg:h-auto'>
                  <p className='cardTitle'>Europe</p>
                  <p className='text-sm pl-8 mr-24 text-white font-semibold lg:text-lg'>4 rooms, 3 bathrooms,  kitchen and private pool.</p>
                </div>
                <div className='h-full w-full'>
                  <div className='w-full h-96 bg-miami bg-cover rounded-xl mb-8'>
                    <p className='cardTitle'>Miami</p>
                    <p className='text-sm pl-8 mr-24 text-white font-semibold lg:text-lg'>3 rooms, 2 bathrooms,  kitchen and amazing sea view.</p>
                  </div>
                  <div className='w-full h-96 rounded-xl mb-8 bg-bali bg-cover'>
                    <p className='cardTitle'>Bali</p>
                    <p className='text-sm pl-8 mr-24 text-white font-semibold lg:text-lg'>2 rooms, 2 bathrooms,  kitchen and private pool.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='faqs' className='w-full h-auto mb-8'>
          <div className='w-full h-full px-6 flex flex-col space-y-4'>
            <p className='text-3xl text-primary font-bold mt-6 dark:text-white'>FAQs</p>
            <div>
              <p className='text-xl font-medium text-primary dark:text-white'>Payment Methods</p>
              <p className='font-medium pt-2 dark:text-white'>
                We accept VISA, MasterCard, American Express, Paypal and Binance
              </p>
            </div>
            <div>
              <p className='text-xl font-medium text-primary dark:text-white'>Cancellation Policy</p>
              <p className='font-medium pt-2 dark:text-white'>
                We accept VISA, MasterCard, American Express, Paypal and Binance
              </p>
            </div>
            <div>
              <p className='text-xl font-medium text-primary dark:text-white'>Long Stays</p>
              <p className='font-medium pt-2 dark:text-white'>
                We accept VISA, MasterCard, American Express, Paypal and Binance
              </p>
            </div>
            <div>
              <p className='text-xl font-medium text-primary dark:text-white'>Payment Methods</p>
              <p className='font-medium pt-2 dark:text-white'>
                We accept VISA, MasterCard, American Express, Paypal and Binance
              </p>
            </div>
            <div>
              <p className='text-xl font-medium text-primary dark:text-white'>Cancellation Policy</p>
              <p className='font-medium pt-2 dark:text-white'>
                We accept VISA, MasterCard, American Express, Paypal and Binance
              </p>
            </div>
          </div>
        </div>

        <footer id='aboutUs' className='w-full h-auto bg-gray-50 p-6 space-y-2 flex flex-col'>
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

      <div id='tabBar' className='w-full h-16 bg-white fixed left-0 bottom-0 shadow-md flex justify-center space-x-8 items-center lg:hidden dark:bg-gray-800'>
        <a href="#home">
          <HomeIcon className='w-7 h-7 fill-gray-200' />
        </a>
        <a href="#trendingStays">
          <SearchIcon className='w-7 h-7 fill-primary' />
        </a>
        <a href="#recommended">
          <RecommendsIcon className='w-7 h-7 fill-gray-200' />
        </a>
        <button onClick={toggleDarkMode}>
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
