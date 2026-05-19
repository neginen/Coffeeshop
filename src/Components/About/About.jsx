import React from 'react';
import Coffe from '../../assets/image/Group 9.png'
import coffeeblast from '../../assets/image/coffee_blast 1.png'



const About = () => {
    return (
        <div id='About' className="flex  flex-col md:flex-row   bg-white relative overflow-hidden">
            <div className='flex justify-center lg:w-2/3 m-12 sm:w-full'>
                <div className="space-y-6 py-10 ">
                    <h1 className="text-4xl md:text-5xl font-semibold text-[#603809]">
                        Discover the best coffee
                    </h1>
                    <p className="text-[#707070] text-lg break-all">
                        Bean Scene is a coffee shop that provides you with quality coffee that helps boost your<br />
                        productivity and helps build your mood. Having a cup of coffee is good, but having a cup<br />
                        of real coffee is greater. There is no doubt that you will enjoy this coffee more than<br />
                        others you have ever tasted.
                    </p>
                    <button className="  w-[134px] h-[40px] font-semibold  my-6 rounded-full shadow-md  bg-[#F9C06A] text-[#603809] hover:bg-[#f4b26b] transition">
                        Learn More
                    </button>
                </div>
            </div>


            <div className="flex justify-center md:w-1/2  right-0 item-center ">
                <img
                    src={Coffe}
                    alt="Coffee Cup Beans"
                    className="sm:size-64 md:size-full hidden lg:block"
                />
            </div>
            <div className="absolute bottom-0 left-0   ">
                <img
                    src={coffeeblast}
                    alt="Chocolate Decoration"
                    className=" hidden lg:block w-full h-auto"
                />
            </div>
        </div>
    );
};

export default About;
