import React from 'react'
import { CiHeart } from "react-icons/ci";
import { SlEqualizer } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";



const Section_1 = () => {
    return (
        <div>

            {/* ------------------- Section-1 ------------------- */}

            <div className='flex justify-center relative'>
                <div className=''>
                    <div className='flex justify-center items-center text-center '>
                        <div>
                            <p className='font-bold text-2xl mb-2'>Trending Products</p>
                            <p className='text-sm mb-4'>Top View In This Week</p>
                        </div>
                    </div>
                    <div className='group'>
                        <div className='w-64 h-80 '>
                            <div className='absolute '>
                                <img className='w-64 h-80' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2020/12/28.jpg" alt="" />
                            </div>
                            <div className='absolute group-hover:block hidden'>
                                <div className='w-64 grid justify-end p-4 '>
                                    <div className='size-8 rounded bg-white hover:bg-[#ba933e] hover:text-white flex justify-center items-center mb-3'>
                                        <CiHeart className='size-6 ' />
                                    </div>
                                    <div className='size-8 rounded bg-white hover:bg-[#ba933e] hover:text-white flex justify-center items-center mb-3'>
                                        <SlEqualizer className='size-4' />
                                    </div>
                                    <div className='size-8 rounded bg-white hover:bg-[#ba933e] hover:text-white flex justify-center items-center'>
                                        <IoEyeOutline className='size-5' />
                                    </div>
                                </div>
                            </div>
                            <div className='absolute group-hover:block hidden'>
                                <div className='w-64 h-80 items-end grid'>
                                    <div className='mt-4 px-5 pb-5 py-2.5 flex justify-center items-end '>
                                        <div className='bg-black w-[98%] h-10 flex justify-center items-center rounded hover:bg-[#ba933e] '>
                                            <div className='flex justify-center items-center'>
                                                <SlHandbag className='text-white mr-2 size-4' />
                                                <p className='flex items-center justify-center rounded-md text-center text-sm font-medium text-white '>Add to cart</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='font text-sm font-bold text-[#444444] hover:text-[#bd9b4c]'>Turning Table</p>
                        <div className='flex text-xs '>
                            <p className='mr-2 line-through text-gray-400'>$57.00</p>
                            <p className='text-[#bd9b4c]'>$52.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_1
