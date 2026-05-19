import React from 'react'
import group46 from '../../assets/image/Group 46.png'
import pngwing1 from '../../assets/image/pngwing 1.png'
import pngwing2 from '../../assets/image/pngwing 2.png'
import Footer from '../Footer/Footer'

export default function Newsletter() {
    return (
        <div id='signin' className="relative w-full text-center  font-semibold justify-center overflow-hidden">
            <div className="relative z-20 w-full h-80  my-10 flex flex-col px-8 md:px-20 text-white ">
                <h1 className="text-2xl md:text-5xl  text-gray-200 mb-6">
                    Subscribe to get the Latest News
                </h1>
                <p className="text-lg md:text-lg text-gray-200 mb-6">
                    Don’t miss out on our latest news, updates, tips and special offers
                </p>
                <div className="flex items-center m-4 justify-center">
                    <input
                        type="email"
                        placeholder="Enter your mail"
                        className="p-2 sm:px-4 sm:py-3 rounded-l-md text-gray-400  bg-[#FFF9F1] sm:w-96"
                    />
                    <button className="bg-[#F9C06A] hover:bg-[#f4b26b] p-2 sm:px-6 sm:py-3 rounded-r-md text-[#603809] font-semibold">
                        Subscribe
                    </button>
                </div>
            </div>      
            <img
                src={group46}
                alt="Coffee Background"
                className="absolute inset-0 w-full h-full object-cover "
            />          
            <img
                src={pngwing1}
                alt="Beans Overlay"
                className="absolute left-0 top-40 z-30 w-48 md:w-64 object-contain lg:block hidden "
            />
            <Footer />          
            <img
                src={pngwing2}
                alt="Coffee Cup"
                className="absolute right-0 z-30 top-40 w-48 md:w-64 object-contain  lg:block hidden"
            /> 
        </div>
    )
}





<div className="bg-[url('/coffee-bg.jpg')] bg-cover bg-center py-16 text-center text-white relative">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 max-w-xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Subscribe to get the Latest News</h2>
        <p className="mb-6">Don’t miss out on our latest news, updates, tips and special offers</p>
        <div className="flex items-center justify-center gap-2">
            <input
                type="email"
                placeholder="Enter your mail"
                className="px-4 py-2 rounded-l-md text-black w-64"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-r-md text-white font-semibold">
                Subscribe
            </button>
        </div>
    </div>
</div>



