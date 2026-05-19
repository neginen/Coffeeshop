
import React from 'react';

const Card = ({item,image}) => {
    return (
        <div className="relative w-64 h-80 gap-4 bg-[#FFF9F1] rounded-xl shadow-md  text-center mx-auto">
            <img
                src={image}
                alt="Cappuccino"
                className=" w-full h-48 object-cover mx-auto mb-4 shadow"
            />

            <h2 className="text-xl font-semibold text-brown-800">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-lg font-bold text-gray-800 mt-2">{item.price}</p>
            <button className="absolute -bottom-5 left-1/2 px-4 py-2 -translate-x-1/2 bg-[#F9C06A] text-[#603809] hover:bg-[#f4b26b]  font-semibold rounded-full shadow-lg transition">
                Order Now
            </button>
        </div>
    );
};

export default Card;


