import React from 'react'

const Footer = () => {
    return (
        <div className='px-2 lg:px-40 bg-white md:bg-gray-200  mt-10 lg:mt-20 pb-10'>
            <div className='flex flex-col md:flex-row lg:justify-between lg:items-end gap-4 h-[300px]'>
                <div>
                    <h1 className='text-2xl font-bold text-black'> Let’s Grow Your Business Together</h1>
                    <p>
                        Looking to build visibility, generate leads, and grow sales — without paying 6 figures to an agency? Let’s talk.
                    </p>
                </div>

                <div className='flex flex-col text-black'>
                    <a href="">Free SEO/PPC Audit</a>
                    <a href=""><strong>Call/WhatsApp:</strong> +91-XXXXXXXXXX</a>
                    <a href="">
                        <strong>Email:</strong> hello@yourfreelancename.com
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer