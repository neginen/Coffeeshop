import React from 'react';
import Nav from './Nav';
import Coffeeimg from '../../assets/image/coffee_image.png';
import Coffee from '../../assets/image/Coffee.png';

export default function Header() {
  return (
    <>
      <div
        id='Home'
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${Coffeeimg})` }}
      >
        <Nav />
        <div className='max-w-4xl mx-auto px-4 pt-20 md:pt-32'>
          <p className='text-white text-lg md:text-xl lg:text-2xl mb-4'>
            We’ve got your morning covered with
          </p>

          <img src={Coffee} alt="Coffee Text" className='mb-4 w-[200px] md:w-[300px]' />

          <p className='text-white text-sm md:text-base lg:text-lg mb-6 leading-relaxed'>
            It is best to start your day with a cup of coffee. Discover the <br className="hidden sm:inline" />
            best flavours coffee you will ever have. We provide the best <br className="hidden sm:inline" />
            for our customers.
          </p>

          <button className="bg-[#F9C06A] text-[#603809] hover:bg-[#f4b26b] w-[134px] h-[40px] font-semibold rounded-full shadow-md transition">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}


