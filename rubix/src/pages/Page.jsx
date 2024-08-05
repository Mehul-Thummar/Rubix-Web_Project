import React from 'react'
import Navbar from '../components/Navbar'

const Page = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center '>
                <div className='w-screen relative'>
                    <div className='h-[330px] mb-[80px]'>
                        <div className='absolute '>
                            <img className='bg-fixed bg-no-repeat bg-cover w-screen' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/04/default_category.jpg" alt="" />
                        </div>
                        <div className='absolute w-screen px-8 p-20 mx-6 '>
                            <div className=''>
                                <h1 className='font-bold text-4xl'>About Us</h1>
                                <div className='flex '>
                                    <p className='hover:text-[#bd9b4c] mr-2'>Home / </p>
                                    <p className='text-gray-500'>About Us</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-96'>
                        <div className='mx-[30px] px-[30px]'>
                            <div>
                                <h1 className='text-[#bd9b4c] mb-[16px]'>Welcome to Rubix Store</h1>
                                <h1 className='text-4xl font-bold'>Our Success And Company History.</h1>
                            </div>
                        </div>
                    </div>









                </div>
            </div>
        </div>
    )
}

export default Page
