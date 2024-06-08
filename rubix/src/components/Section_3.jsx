import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import image47 from "../assets/asset 47.jpeg";


const Section_3 = () => {
    return (
        <div>
            {/* ------------------- Section-3 ------------------- */}

            <div className='flex justify-center items-center h-[442px] bg-[#f5f2eb] mt-16'>
                <div className='relative '>
                    <img className=' h-[442px] ' src={image47} alt="" />
                </div>
                <div className='absolute ml-96'>
                    <div className='flex '>
                        <p className='font-bold text-xl text-gray-600 '>Quick parcel delivery,</p>
                        <p className='font-bold text-xl text-[#bd9b4c] ml-1'>from$25</p>
                    </div>
                    <div className=''>
                        <p className='font-bold text-[35px]'>Shop The New Brands</p>
                    </div>
                    <div className=''>
                        <p className='font-bold text-[35px]'>Up to 40% off now.</p>
                    </div>
                    <div className='mt-6 mb-8'>
                        <p className='text-sm' >Class aptent taciti sociosqu ad litora torquent per</p>
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
    )
}

export default Section_3
