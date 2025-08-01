"use client";

import Image from 'next/image';
import React from 'react';
import aboutImg from '@/assets/images/it.jpeg';

const AboutMe = () => {
    return (
        <div id="home" className='grid grid-cols-1 bg-white md:grid-cols-2 px-6 md:px-20 py-16 gap-10 items-center'>
            <div>
                <h1 className='text-4xl font-bold mb-4 text-black'>About Me</h1>
                <p className='leading-7 text-gray-700'>
                    I am a Bangalore-based freelance digital marketing specialist helping businesses rank
                    higher, get discovered, and grow faster — without paying for bloated agency packages. With
                    over <strong>8 years</strong> of hands-on experience, I provide results-driven strategies across SEO, paid
                    ads, content, and design.
                </p>
                <p className='mt-6 text-gray-700'>
                    Whether you are a small business, ecommerce store, or local service provider — I build the
                    strategy, execute the campaigns, and deliver reports that drive ROI.
                </p>
            </div>

            <div className='flex justify-center'>
                <div className='relative h-[350px] lg:h-[500px] w-[700px] rounded-lg overflow-hidden shadow-lg'>
                    <Image
                        src={aboutImg}
                        alt="About Me Image"
                        fill
                        className='object-cover transition duration-300 ease-in-out hover:scale-110'
                        priority

                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
