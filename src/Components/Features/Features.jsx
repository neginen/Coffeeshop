import React from 'react';
import Cardfeatures from './Cardfeatures'
import coffeecup from '../../assets/image/coffee-cup 1.png';
import bestprice from '../../assets/image/best-price 1.png';
import badge from '../../assets/image/badge 1.png';
import coffeebeans from '../../assets/image/coffee-beans 1.png';
import Coffeeblast2 from '../../assets/image/Coffee_blast 2.png'

export default function Features() {
    const images = {
        coffeecup,
        bestprice,
        badge,
        coffeebeans,
    };

    const data = [
        { id: "1", name: "Extraordinary ", price: "$8.50", description: "Coffee like you have never tasted", img: "coffeecup" },
        { id: "2", name: "Affordable Price", price: "$8.50", description: "Our Coffee prices are easy to afford", img: "bestprice" },
        { id: "3", name: "High Quality", price: "$8.50", description: "We provide the highest quality", img: "badge" },
        { id: "4", name: "Supreme Beans", price: "$8.50", description: "Beans that provides great taste", img: "coffeebeans" },
    ];

    return (
        <>
            <div className='relative '>
                <div className="m-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-semibold mt-20  text-[#603809]">
                        Why are we different?
                    </h1>
                    <p className="text-[#707070] text-sm my-5">
                        We don’t just make your coffee, we make your day!
                    </p>
                </div>
                <div className="absolute bottom-0  right-0   ">
                    <img
                        src={Coffeeblast2}
                        alt="Chocolate Decoration"
                        className="  hidden lg:block w-full h-auto"
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-8 lg:grid-cols-4 justify-center ">
                {data.map((item) => (
                    <Cardfeatures key={item.id} item={item} image={images[item.img]} />
                ))}
            </div>
            <div className="m-4 text-center">
                <h1 className="text-[#707070] text-sm my-5">
                    Great ideas start with great coffee, Lets help you achieve that
                </h1>
                <h5 className="text-sm md:text-2xl font-semibold   text-[#603809]">
                    Get started today.
                </h5>
                <button className="  bg-[#F9C06A] text-[#603809] hover:bg-[#f4b26b]  m-4  px-4 py-2 font-semibold rounded-full shadow-lg transition">
                    Join Us
                </button>
            </div>
        </>

    );
}
