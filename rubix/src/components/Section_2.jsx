import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import image45 from "../assets/asset 45.jpeg";
import image46 from "../assets/asset 46.jpeg";
import image10 from "../assets/asset 10.jpeg";
import image11 from "../assets/asset 11.jpeg";
import image12 from "../assets/asset 12.jpeg";

const Section_2 = () => {
    return (
        <div>

            {/* ------------------- Section-2 ------------------- */}


            <div className='flex justify-center items-center mt-20 relative'>
                {/* <div className=' absolute w-[660px] h-[410px] z-50 hover:border-white hover:border-2 '></div> */}
                <div className=' '>
                    <div className='w-[650px] h-[442px] image-container bg-gray-100 relative '>
                        <div className='absolute '>
                            <img className='w-[650px] h-[442px] image ' src={image45} alt="" />
                        </div>
                        <div className='flex items-center h-[442px] ml-12 '>
                            <div className='absolute '>
                                <div className='flex '>
                                    <p className='font-bold text-xl text-gray-600 '>Quick parcel delivery,</p>
                                    <p className='font-bold text-xl text-[#bd9b4c] ml-1'>from$25</p>
                                </div>
                                <div className=''>
                                    <p className='font-bold text-[33px]'>Up to 70% Off</p>
                                </div>
                                <div className=''>
                                    <p className='font-bold text-[33px]'>Interior Home Decor</p>
                                </div>
                                <div className='mt-6 mb-8'>
                                    <p className=''>Class aptent taciti sociosqu ad litora</p>
                                </div>
                                <div className='w-52 h-12 bg-black rounded flex justify-center items-center'>
                                    <div className='flex items-center'>
                                        <p className='text-white font-bold text-lg '>Shop Collection</p>
                                        <FaAngleRight className='text-white ml-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className=' absolute w-[660px] h-[410px] z-50 hover:border-white hover:border-2 '></div> */}
                <div className='ml-10 '>
                    <div className='w-[650px] h-[442px] image-container bg-gray-100 relative '>
                        <div className='absolute '>
                            <img className='w-[650px] h-[442px] image' src={image46} alt="" />
                        </div>
                        <div className='flex items-center h-[442px] ml-12 '>
                            <div className='absolute '>
                                <div className='flex '>
                                    <p className='font-bold text-xl text-gray-100 '>Quick parcel delivery,</p>
                                    <p className='font-semibold text-xl text-[#a28749] ml-1'>from$25</p>
                                </div>
                                <div className=''>
                                    <p className='font-bold text-[33px] text-white'>Up to 70% Sale Off</p>
                                </div>
                                <div className=''>
                                    <p className='font-bold text-[33px] text-white'>Pendent Lamp</p>
                                </div>
                                <div className='mt-6 mb-8'>
                                    <p className='text-gray-100'>Class aptent taciti sociosqu ad litora</p>
                                </div>
                                <div className='w-52 h-12 bg-black rounded flex justify-center items-center'>
                                    <div className='flex items-center'>
                                        <p className='text-white font-bold text-lg '>Shop Collection</p>
                                        <FaAngleRight className='text-white ml-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mt-10 relative'>
                <div className=''>
                    <div className='w-[305px] h-[442px]  bg-gray-100 relative '>
                        <div className='absolute image-container'>
                            <img className='w-[305px] h-[442px] image' src={image10} alt="" />
                        </div>
                        <div className='flex h-[442px] p-6'>
                            <div className='absolute '>
                                <div className='flex '>
                                    <p className='font-semibold text-2xl '>Turning Table</p>
                                </div>
                                <div className='mt-5 mb-3'>
                                    <p className='text-gray-600'>Class aptent taciti socios</p>
                                </div>
                                <div className=''>
                                    <p className='font-semibold  underline text-[#bd9b4c]'>From$45.59</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ml-10 '>
                    <div className='w-[305px] h-[442px]  bg-gray-100 relative '>
                        <div className='absolute image-container'>
                            <img className='w-[305px] h-[442px] image' src={image11} alt="" />
                        </div>
                        <div className='flex h-[442px] p-6'>
                            <div className='absolute '>
                                <div className='flex '>
                                    <p className='font-semibold text-2xl '>Turning Table</p>
                                </div>
                                <div className='mt-5 mb-3'>
                                    <p className='text-gray-600'>Class aptent taciti socios</p>
                                </div>
                                <div className=''>
                                    <p className='font-semibold  underline text-[#bd9b4c]'>From$45.59</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ml-10 '>
                    <div className='w-[650px] h-[442px]  bg-gray-100 relative '>
                        <div className='absolute image-container'>
                            <img className='w-[650px] h-[442px] image' src={image12} alt="" />
                        </div>
                        <div className='flex h-[442px] p-6'>
                            <div className='absolute '>
                                <div className='flex '>
                                    <p className='font-semibold text-2xl '>Modern Nutshell Lounge Chair</p>
                                </div>
                                <div className='mt-5 mb-3'>
                                    <p className='text-gray-600'>Class aptent taciti sociosqu ad litora torquent per</p>
                                </div>
                                <div className=''>
                                    <p className='font-semibold  underline text-[#bd9b4c]'>Extra 20% off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_2
