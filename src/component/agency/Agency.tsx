import { Card } from 'antd'
import { title } from 'process'
import React from 'react'

const reason = [

    {
        image: "/personal.webp",
        title: "Personalized Strategy.",
        description: "You work directly with the expert — no account managers."

    },

    {
        image: "/image3.webp",
        title: "Faster Communication",
        description: "WhatsApp, Email, or Zoom — I'm just a message away."

    },
    {
        image: "/img2.webp",
        title: "Affordable Pricing:",
        description: " Save 30-50% compared to agencies with better ROI.."

    },
    {
        image: "/about.webp",
        title: "Transparent Reporting",
        description: " Monthly performance reports you can understand."

    },
    {
        image: "/img2.jpg",
        title: "Growth-First Approach",
        description: " My focus? Leads, sales, and visibility — not just traffic."

    }
]




const Agency = () => {
    return (
        <div className='px-4 lg:px-60 '>
            <h1 className='text-4xl font-bold lg:text-center py-6 mt-20'> Why Choose Me Over <span className='text-pink-400'>an Agency?</span></h1>
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
                    <div key={title} className='w-full mx-auto mt-5 border border-transparent transition-all duration-300 group hover:border-yellow-500 rounded-lg'>
                        <Card  className=''>
                            <div className='flex flex-col md:flex-row lg:gap-16'>
                                <img src={item.image} alt="" className='w-[300px] h-[200px] rounded-xl transition duration-300 ease-in-out hover:scale-110' />
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