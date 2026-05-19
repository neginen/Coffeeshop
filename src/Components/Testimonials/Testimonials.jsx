import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coffeeblast2 from '../../assets/image/Coffee_blast 2.png';
import coffeeblast from '../../assets/image/Coffee_blast 1.png';
import person1 from '../../assets/image/person1.jpg';
import person2 from '../../assets/image/person2.jpg';
import person3 from '../../assets/image/person3.jpg';
import person4 from '../../assets/image/person4.jpg';
import Cardtest from "./Cardtest";

export default function Testimonials() {
    const images = {
        person1,
        person2,
        person3,
        person4,
    };

    const data = [
        {
            id: "1",
            name: "Jonny Thomas",
            title: "Project Manager",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            img: "person1"
        },
        {
            id: "2",
            name: "Jonny Thomas",
            title: "Project Manager",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            img: "person2"
        },
        {
            id: "3",
            name: "Jonny Thomas",
            title: "Project Manager",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            img: "person3"
        },
        {
            id: "4",
            name: "Jonny Thomas",
            title: "Project Manager",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            img: "person4"
        },
    ];

    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    };

    return (
        <div id="Contact" className="relative w-full py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
            <div className="text-center mb-10">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-[#603809]">
                    Our coffee perfection feedback
                </h1>
                <p className="text-[#707070] text-sm sm:text-base mt-4">
                    Our customers have amazing things to say about us
                </p>
            </div>

            <div className="max-w-screen-xl mx-auto">
                <Slider {...settings}>
                    {data.map((item) => (
                        <Cardtest key={item.id} item={item} img={images[item.img]} />
                    ))}
                </Slider>
            </div>           
            <div className="hidden lg:block absolute top-0 right-0 w-64 xl:w-80">
                <img src={Coffeeblast2} alt="Decoration Top Right" className="w-full h-auto" />
            </div>

            <div className="hidden lg:block absolute bottom-0 left-0 w-64 xl:w-80">
                <img src={coffeeblast} alt="Decoration Bottom Left" className="w-full h-auto" />
            </div>
        </div>
    );
}


