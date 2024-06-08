import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import image21 from "../assets/asset 21.png";
import image22 from "../assets/asset 22.png";
import image23 from "../assets/asset 23.png";


const Section_5 = () => {
    return (
        <div>
            {/* ------------------- Section-5 ------------------- */}
            <div className='flex justify-center mt-20'>
                <div className=''>
                    <div className=''>
                        <div class="bg-fixed bg-newsletter bg-no-repeat bg-cover w-screen " >
                            <div className='flex justify-center text-center py-24 px-24' >
                                <div className='py-20 px-24 newsletter'>
                                    <h1 className='font-bold text-[32px]'>Subcribe To Our Newsletter</h1>
                                    <p className=' mb-4'>Sign up for the weekly newsletter and build better ecommerce stores.</p>
                                    <div>
                                        <div className='flex justify-center items-center mt-5'>
                                            <input type="email" id="email" className=' border border-gray-300 text-gray-900 text rounded w-[580px] py-3' placeholder="Enter your email address " required />
                                            <button type="button" className=' text-white bg-black border-gray-300 hover:bg-[#bd9b4c] font-bold rounded text-sm px-8 py-3 ml-3'>Subcribe</button>
                                        </div>
                                    </div>
                                    <p className='mt-8'>We respect your privacy, so we never share your info.</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-gray-100 '>
                            <div className='text-center pt-20 pb-16 mb-14 flex justify-center items-center' >

                                <div className='w-96 '>
                                    <div className='border-r-2'>
                                        <div className='flex justify-center logo-shake'>
                                            <img className='size-12 mb-4' src={image21} alt="" />
                                        </div>
                                        <h1 className='font-bold mb-1'>Free Worldwide Shipping</h1>
                                        <p className='mb-4 text-gray-600'>On all orders over $75.00</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='font-semibold'>Learn More</h1>
                                        <SlArrowRight className='size-4 ml-4' />
                                    </div>
                                </div>

                                <div className='w-96 '>
                                    <div className='border-r-2'>
                                        <div className='flex justify-center logo-shake'>
                                            <img className='size-12 mb-4' src={image22} alt="" />
                                        </div>
                                        <h1 className='font-bold mb-1'>100% Payment Secureg</h1>
                                        <p className='mb-4 text-gray-600'>We ensure secure payment with PEV</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='font-semibold'>Learn More</h1>
                                        <SlArrowRight className='size-4 ml-4' />
                                    </div>
                                </div>

                                <div className='w-96 '>
                                    <div className=''>
                                        <div className='flex justify-center logo-shake'>
                                            <img className='size-12 mb-4' src={image23} alt="" />
                                        </div>
                                        <h1 className='font-bold mb-1'>30 Days Return</h1>
                                        <p className='mb-4 text-gray-600'>Return it within 20 day for an exchange</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='font-semibold'>Learn More</h1>
                                        <SlArrowRight className='size-4 ml-4' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Section_5
