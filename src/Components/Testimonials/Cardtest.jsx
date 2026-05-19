import React from 'react';
import badge from '../../assets/image/A.png';

export default function Cardtest({ item, img }) {
    return (
        <section className="py-8 px-4 sm:px-6">
            <div className="relative bg-[#FDF5EC] text-gray-700 border border-[#FFE4BF] rounded-xl shadow-lg px-6 sm:px-10 pt-10 pb-20 max-w-3xl mx-auto">
                
                {/* Badge */}
                <div className="flex justify-center">
                    <img src={badge} alt="badge" className="w-12 sm:w-16" />
                </div>

                {/* Description - limited to 2 lines */}
                <p className="text-center text-sm sm:text-base leading-relaxed line-clamp-2 mt-4">
                    {item.description}
                </p>

                {/* Name & Title */}
                <div className="mt-6 text-center">
                    <h3 className="text-lg sm:text-2xl font-semibold text-[#6D3D0F]">{item.name}</h3>
                    <p className="text-gray-500 text-sm sm:text-base">{item.title}</p>
                </div>

                {/* Fixed size User image */}
                <div className="w-20 h-20 mx-auto absolute -bottom-10 left-1/2 -translate-x-1/2">
                    <img
                        src={img}
                        alt={item.name}
                        className="rounded-2xl w-full h-full object-cover border-2 border-white shadow-md"
                    />
                </div>
            </div>
        </section>
    );
}
