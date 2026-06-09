import React, { useState } from 'react';
import BeanScens from '../../assets/image/BeanScene.png';
import { Menu, X } from 'lucide-react'; // آیکون‌های همبرگری و بستن منو
import { Link } from 'react-router-dom';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-white  px-6 py-4 flex items-center justify-between relative z-50">
            {/* Logo */}
            <div className="flex items-center md:w-50  w-30">
                <Link to="/">
                    <img src={BeanScens} alt="Bean Scene Logo" className="h-10 w-auto " />
                </Link>            
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex  gap-6 text-sm md:text-lg ">       
                <li className="hover:text-[#f4b26b] hover:animate-bounce cursor-pointer transition"><a href="#Menu">Menu</a></li>
                <li className="hover:text-[#f4b26b] hover:animate-bounce cursor-pointer transition"><a href="#About">About Us</a></li>
                <li className="hover:text-[#f4b26b] hover:animate-bounce cursor-pointer transition"><a href="#Contact">Contact Us</a></li>
            </ul>

            {/* Desktop Auth Buttons */}
            <ul className="hidden md:flex items-center gap-4">
            <li className="hover:text-[#f4b26b] cursor-pointer transition"><a href="#signin">Sign In</a></li>               
                <li className="w-24 bg-[#F9C06A] text-[#603809] hover:bg-[#f4b26b] text-center   py-2 font-semibold rounded-full shadow-lg transition">
                    <Link to="/Signup" > Sign Up </Link>
                </li>
            </ul>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none ">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {
                isOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#1f1818]/95   text-white flex flex-col gap-4 px-6 py-4 md:hidden shadow-xl">                       
                        <a href="#Menu" className="hover:text-[#f4b26b]">Menu</a>
                        <a href="#About" className="hover:text-[#f4b26b]">About Us</a>
                        <a href="#Contact" className="hover:text-[#f4b26b]">Contact Us</a>
                        <hr className="border-gray-500 my-2" />
                        <a className="text-left hover:text-[#f4b26b]" href='#signin'>Sign In</a>
                        <Link to="/Signup" className="text-left hover:text-[#f4b26b]">Sign Up</Link>
                    </div>
                )
            }
        </nav >
    );
}

