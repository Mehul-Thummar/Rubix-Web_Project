import React from 'react'
import image34 from "../assets/asset 34.jpeg";
import image35 from "../assets/asset 35.jpeg";
import image36 from "../assets/asset 36.jpeg";
import image37 from "../assets/asset 37.jpeg";
import image38 from "../assets/asset 38.jpeg";
import image39 from "../assets/asset 39.jpeg";


const Section_8 = () => {
    return (
        <div>

            {/* ------------------- Section-7 ------------------- */}

            <div className='flex justify-center mt-10 h-80 '>
                <div>
                    <div className='flex justify-center items-center text-center'>
                        <div>
                            <p className='font-bold text-[28px] mb-2'>Follow us on Instagram</p>
                            <p className=' mb-4'>@ Rubix Instagram</p>
                        </div>
                    </div>
                    <div className='flex justify-evenly'>
                        <div className='hover:brightness-105 hover:duration-1000 hover:ease-linear'>
                            <img className='size-[209px] p-4' src={image34} alt="" />
                        </div>
                        <div className='hover:brightness-105 hover:duration-1000 hover:ease-linear'>
                            <img className='size-[209px] p-4 ' src={image35} alt="" />
                        </div>
                        <div className='hover:brightness-105 hover:duration-1000 hover:ease-linear'>
                            <img className='size-[209px] p-4 ' src={image36} alt="" />
                        </div>
                        <div className='hover:brightness-105 hover:duration-1000 hover:ease-linear'>
                            <img className='size-[209px] p-4 ' src={image37} alt="" />
                        </div>
                        <div className='hover:brightness-105 hover:duration-1000 hover:ease-linear'>
                            <img className='size-[209px] p-4 ' src={image38} alt="" />
                        </div>
                        <div className='hover:brightness-105 hover:duration-1000 hover:ease-linear'>
                            <img className='size-[209px] p-4 ' src={image39} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_8
