import React from 'react';
import coffee_bean from '../../assets/image/coffee_bean.png';
import group from '../../assets/image/Group 46.png';

const Promo = () => {
    return (
        <div className="relative w-full h-80 md:h-screen overflow-hidden">           
            <img
                src={group}
                alt="Coffee Background"
                className="absolute inset-0 w-full h-full object-cover"
            />         
            <img
                src={coffee_bean}
                alt="Beans Overlay"
                className="absolute right-0 top-0 bootom-0 h-full object-contain pointer-events-none "
            />  
            <div className="relative z-20 h-full flex flex-col justify-center px-6 sm:px-10 md:px-20 text-white max-w-xl">
                <h1 className="text-lg sm:text-xl md:text-3xl  font-bold leading-tight mb-4 sm:mb-6">
                    Get a chance to have an Amazing morning
                </h1>
                <p className="text-sm sm:text-md md:text-lg  text-gray-200 mb-4 sm:mb-6">
                    We are giving you a one-time opportunity to experience a better life with coffee.
                </p>
                <button className=" animate-bounce w-24 bg-[#F9C06A] text-[#603809] hover:bg-[#f4b26b]  m-4   py-2 font-semibold rounded-full shadow-lg transition">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Promo;
