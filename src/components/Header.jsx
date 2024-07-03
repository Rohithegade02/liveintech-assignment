import React, { useEffect, useState } from 'react';
import HeaderOptions from './HeaderOptions';
import { Parallax } from 'react-scroll-parallax';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 200) {
        navbar.style.backgroundColor = 'white';
      } else {
        navbar.style.backgroundColor = '#A5DBFA';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className=' fixed top-0 left-0 navbar flex justify-between z-100  items-center md:gap-5 text-blue-600 w-[100vw] h-[10vh] px-8 bg-[#A5DBFA]'>
      <div>
        <p className='font-medium text-[20px] text-[#225599]' style={{ letterSpacing: '2px' }}>LIVEINTECH</p>
      </div>
      <div className='hidden md:flex lg:flex justify-between lg:w-[10vw] md:w-[70vw]  items-center'>
        <div className='flex lg:gap-12 md:gap-4'>
          <HeaderOptions text={'Home'} />
          <HeaderOptions text={'About'} />
          <HeaderOptions text={'Services'} />
          <HeaderOptions text={'Contact'} />
          <HeaderOptions text={'Blog'} />
          <HeaderOptions text={'Careers'} />
        </div>
        
      </div>
      <div className='lg:hidden md:hidden flex items-center gap-5'>
        <button onClick={toggleMenu} className='text-[#617F82] focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
        <div className='sm:hidden lg:block md:block'>
          <button className='bg-[#225599] text-[16px] text-white px-3 py-1'>PITCH</button>
      </div>
      </div>
      {menuOpen && (
        <div className='absolute top-[0] left-0 w-full bg-[white] lg:hidden flex flex-col border-b-2 items-center gap-4 py-4'>
          <div className='flex justify-end w-full px-4'>
            <button onClick={toggleMenu} className='text-[#617F82] focus:outline-none'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            </button>
          </div>
          <HeaderOptions text={'Home'} />
          <HeaderOptions text={'About'} />
          <HeaderOptions text={'Services'} />
          <HeaderOptions text={'Contact'} />
          <HeaderOptions text={'Blog'} />
          <HeaderOptions text={'Careers'} />
        </div>
      )}
      <div className='hidden lg:block md:block'>
      <button className='bg-[#225599] text-[16px] text-white px-3 py-1'>PITCH</button>
      </div>
    </div>
   
  );
};

export default Header;
