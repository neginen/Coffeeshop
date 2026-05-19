import React, { useState } from 'react';
import BeanScens from '../../assets/image/BeanScene1.png';
import { Menu, X } from 'lucide-react'; // آیکون‌های همبرگری و بستن منو
import { Link } from 'react-router-dom';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" px-6 py-4 flex items-center text-[#603809]/90 justify-between relative z-50">
            {/* Logo */}
            <div className="flex items-center  w-30 md:w-50 text-[#603809]/90">
                <Link to="/">
                    <img src={BeanScens} alt="Bean Scene Logo" className="h-10   " />
                </Link>
            </div>

        
          

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none ">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {
                isOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#1f1818]/95 text-white flex flex-col gap-4 px-6 py-4 md:hidden shadow-xl">
                        <a href="#Home" className="hover:text-[#f4b26b] ">Home</a>
                        <a href="#Menu" className="hover:text-[#f4b26b]">Menu</a>
                        <a href="#About" className="hover:text-[#f4b26b]">About Us</a>
                        <a href="#Contact" className="hover:text-[#f4b26b]">Contact Us</a>
                        <hr className="border-gray-500 my-2" />
                        <button className="text-left hover:text-[#f4b26b]">Sign In</button>
                        <button className="text-left hover:text-[#f4b26b]">Sign Up</button>
                    </div>
                )
            }
        </nav >
    );
}

