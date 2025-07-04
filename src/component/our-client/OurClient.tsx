"use client"

import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import React, { useEffect, useRef } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { CarouselRef } from 'antd/es/carousel';
import Image from 'next/image';
import NavImg from "@/assets/images/sunder.jpg";


const teamMembers = [
    {
        name: "Priya D.",
        role: "Real Estate Agent",
        image: NavImg,
        description: "We saw a 200% jump in organic traffic and leads after working with [Your Name]. His SEO and Google Ads strategies are rock solid!",
    },
    {
        name: "Raj M",
        role: "Clinic Owner",
        image: NavImg,
        description: "He revamped our website and ran high-ROI Facebook campaigns. We got more qualified leads in 30 days than in the last 6 months! ",
        
    },
    {
        name: "Arvind N.",
        role: "Ecommerce Business Owner",
        image: NavImg,
        description: "Excellent SEO and web development support. Truly a one-man army for digital marketing!",
       
    },
    {
        name: "John M",
        role: "Manager",
        image: NavImg,
        description: "Excellent SEO and web development support. Truly a one-man army for digital marketing!",
        
    },
]


const OurClient = () => {
   const carouselRef = useRef<CarouselRef>(null);
    const prevSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const nextSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: false,
            easing: "ease-in-out",
        });
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            <div data-aos="zoom-in-up">
                <div className="lg:h-[700px] xl:h-[800px] px-0 w-full mt-10 md:mt-32">

                    <div data-aos="zoom-in-up">
                        <h1 className="text-2xl md:text-4xl font-extrabold text-center text-gray-800">Client <span className='text-pink-400'>Testimonials</span></h1>
                    </div>

                    <div data-aos="zoom-in-up" className="relative mt-16 w-full ">
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 p-0 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10"
                        >
                            <LeftOutlined className="text-2xl text-gray-700" />
                        </button>

                        <Carousel
                            ref={carouselRef}
                            slidesToShow={4}
                            slidesToScroll={1}
                            infinite
                            autoplay
                            dots={false}
                            arrows={false}
                            className="w-full"
                            responsive={[
                                { breakpoint: 3300, settings: { slidesToShow: 6 } },
                                { breakpoint: 2560, settings: { slidesToShow: 5 } },
                                { breakpoint: 1920, settings: { slidesToShow: 4 } },
                                { breakpoint: 1440, settings: { slidesToShow: 3 } },
                                { breakpoint: 1280, settings: { slidesToShow: 3 } },
                                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                                { breakpoint: 768, settings: { slidesToShow: 1 } },
                                { breakpoint: 480, settings: { slidesToShow: 1 } },
                                { breakpoint: 330, settings: { slidesToShow: 1 } }
                            ]}
                        >
                            {teamMembers.map((item, index) => (
                                <div key={index} className="px-1 md:px-4 py-8">
                                    <div className="flex flex-col  hover:border-orange-400 items-center text-center shadow-lg rounded-2xl bg-white transition-transform duration-300 hover:scale-105 group">
                                        <div>
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                className="h-40 w-40 rounded-full object-cover mt-10 shadow-[0_0_0_4px_#d1d5db] transition-all duration-300 hover:scale-110 group-hover:shadow-orange-500"
                                            />
                                        </div>
                                        <h1 className="pt-10 text-2xl font-semibold text-gray-800">{item.name}</h1>

                                        <p
                                            className="py-4 px-4 text-gray-600 overflow-hidden text-ellipsis max-w-[400px]"
                                            style={{
                                                display: "-webkit-box",
                                                WebkitBoxOrient: "vertical",
                                                WebkitLineClamp: 2,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                maxHeight: "4em",
                                                lineHeight: "1.5em",
                                            }}
                                        >
                                            {item.description}
                                        </p>

                                        <h2 className="text-lg font-semibold text-gray-700 py-6 group-hover:text-orange-500">{item.role}</h2>
                                    </div>
                                </div>
                            ))}
                        </Carousel>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 md:right-8 top-1/2 transform -translate-y-1/2 bg-white  md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10"
                        >
                            <RightOutlined className="text-2xl text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClient