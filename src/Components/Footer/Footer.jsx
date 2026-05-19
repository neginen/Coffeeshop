 import React from "react";
import footerimg from "../../assets/image/fotter_image2.png";
import BeanScens from '../../assets/image/BeanScene.png';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative z-10 font-semibold   w-full bg-[#603809] text-white  font-sans overflow-hidden">
            <img
                src={footerimg}
                alt="Coffee beans scattered on a table"
                className="absolute inset-0 h-full w-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-[#603809]/70 z-0"></div>

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4 lg:py-20">

                <div className="space-y-4  ">
                    <div className="flex  justify-center ">
                        <img src={BeanScens} alt="Bean Scene Logo" className="h-10 w-auto " />
                    </div>
                    <p className="text-sm text-white/90">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard...
                    </p>
                    <div className="flex gap-4 pt-2 text-lg  justify-center ">
                        <a href="#" aria-label="Facebook" className="transition hover:text-[#f4b26b]">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Instagram" className="transition hover:text-[#f4b26b]">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="Twitter" className="transition hover:text-[#f4b26b]">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="YouTube" className="transition hover:text-[#f4b26b]">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className="text-center md:text-start">
                    <h4 className="mb-3 font-semibold">About</h4>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li>
                            <a href="#" className="hover:text-[#f4b26b]">Menu</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#f4b26b]">Features</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#f4b26b]">News &amp; Blogs</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#f4b26b]">Help &amp; Supports</a>
                        </li>
                    </ul>
                </div>
                <div className="text-center md:text-start">
                    <h4 className="mb-3 font-semibold">Company</h4>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li>
                            <a href="#" className="hover:text-[#f4b26b]">How we work</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#f4b26b]">Terms of service</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#f4b26b]">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#f4b26b]">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-2 text-sm text-white/90 text-center md:text-start">
                    <h4 className="mb-3 font-semibold text-white">Contact Us</h4>
                    <address className="not-italic leading-relaxed">
                      Gilan,Rasht
                    </address>
                    <p>+98 919 066 2275</p>
                    <p>
                        <a href="nginenayati@gmail.com" className="hover:text-[#f4b26b]">
                           nginenayati@gmail.com
                        </a>
                    </p>
                    <p>
                        <a href="https://www.neginenayati.com" target="_blank" rel="noreferrer" className="hover:text-[#f4b26b]">
                            www.neginenayati.com
                        </a>
                    </p>
                </div>
            </div>
            <div className="relative z-10 border-t border-white/20 bg-black/20 py-4 text-center text-xs md:text-sm">
                &copy; {year} NeginEnayati. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

