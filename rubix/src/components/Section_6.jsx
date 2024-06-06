import React from 'react'
import image28 from "../assets/asset 28.jpeg";
import image29 from "../assets/asset 29.jpeg";
import image30 from "../assets/asset 30.jpeg";
import image31 from "../assets/asset 31.jpeg";
import image32 from "../assets/asset 32.jpeg";
import image33 from "../assets/asset 33.jpeg";

const Section_6 = () => {
    return (
        <div>

            {/* ------------------- Section-6 ------------------- */}

            <div className='flex justify-center mt-14 '>
                <div className='w-[1340px] h-[226px] logos'>
                    <div className='flex py-7 border-y-[1px] space-x-24 justify-evenly logos-slide'>
                        <div className=''>
                            <img className='w-[130px]' src={image28} alt="" />
                        </div>
                        <div className=''>
                            <img className='w-[130px]' src={image29} alt="" />
                        </div>
                        <div className=''>
                            <img className='w-[130px]' src={image30} alt="" />
                        </div>
                        <div className=''>
                            <img className='w-[130px]' src={image31} alt="" />
                        </div>
                        <div className=''>
                            <img className='w-[130px]' src={image32} alt="" />
                        </div>
                        <div className=''>
                            <img className='w-[130px]' src={image33} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_6
