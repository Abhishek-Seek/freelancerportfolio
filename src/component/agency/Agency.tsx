import { Card } from 'antd'
import Image from 'next/image'
import React from 'react'
import AboutImg from "@/assets/images/about.webp";
import Image3 from "@/assets/images/image3.webp";
import Img2 from "@/assets/images/img2.jpg";
import Img1 from "@/assets/images/img2.webp";
import Personal from "@/assets/images/personal.webp";



const reason = [

    {
        image: Personal,
        title: "Personalized Strategy.",
        description: "You work directly with the expert — no account managers."

    },

    {
        image: Image3,
        title: "Faster Communication",
        description: "WhatsApp, Email, or Zoom — I'm just a message away."

    },
    {
        image: Img2,
        title: "Affordable Pricing:",
        description: " Save 30-50% compared to agencies with better ROI.."

    },
    {
        image: Img1,
        title: "Transparent Reporting",
        description: " Monthly performance reports you can understand."

    },
    {
        image: AboutImg,
        title: "Growth-First Approach",
        description: " My focus? Leads, sales, and visibility — not just traffic."

    }
]




const Agency = () => {
    return (
        <div className='px-4 lg:px-60 bg-white'>
            <h1 className='text-4xl font-bold lg:text-center py-6 mt-20 text-black'> Why Choose Me Over <span className='text-blue-400'>an Agency?</span></h1>
            {/* <div className='grid grid-cols-4 gap-4'>
                <Card
                    hoverable
                    style={{ width: 320, height: 400 }}
                    cover={<img alt="example" src="/personal.webp" />}
                >
                    <Meta title="Personalized Strategy" description="You work directly with the expert — no account managers." />
                </Card>

                <Card
                    hoverable
                    style={{ width: 320, height: 400 }}
                    cover={<img alt="example" src="/personal.webp" />}
                >
                    <Meta title="Personalized Strategy" description="You work directly with the expert — no account managers." />
                </Card>
                <Card
                    hoverable
                    style={{ width: 320, height: 400 }}
                    cover={<img alt="example" src="/personal.webp" />}
                >
                    <Meta title="Personalized Strategy" description="You work directly with the expert — no account managers." />
                </Card>
                <Card
                    hoverable
                    style={{ width: 320, height: 400 }}
                    cover={<img alt="example" src="/personal.webp" />}
                >
                    <Meta title="Personalized Strategy" description="You work directly with the expert — no account managers." />
                </Card>
                <Card
                    hoverable
                    style={{ width: 320, height: 400 }}
                    cover={<img alt="example" src="/personal.webp" />}
                >
                    <Meta title="Personalized Strategy" description="You work directly with the expert — no account managers." />
                </Card>
            </div> */}
            <div className='flex flex-col gap-4 pt-6'>
                {reason.map((item, index) => (
                    <div key={index} className='w-full mx-auto mt-5 border border-transparent transition-all duration-300 group hover:border-yellow-500 rounded-lg'>
                        <Card  className=''>
                            <div className='flex flex-col md:flex-row lg:gap-16'>
                                <Image src={item.image} alt="" className='w-[300px] h-[200px] rounded-xl transition duration-300 ease-in-out hover:scale-110' />
                                <div className='mt-14'>
                                    <h1 className="text-3xl font-bold transition-colors duration-300 hover:text-yellow-300">
                                        {item.title}
                                    </h1>

                                    <p className='text-lg'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Agency