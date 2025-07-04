import { Button } from 'antd'
import React from 'react'
import NavImage from '@/assets/images/logo.png'
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center px-20'>
            <Image src={NavImage} alt='image' height={140} width={140} />
            <ul className='flex justify-center items-center gap-10 text-lg'>
                <a href=""><li>Home</li></a>
                <a href=""><li>Service</li></a>
                <a href=""><li>Team</li></a>
                <a href=""><li>Contact</li></a>
            </ul>
            <Button className='!py-4 !px-6 !bg-blue-400 !text-white'>
                Get Start
            </Button>
        </div>
    )
}

export default NavBar