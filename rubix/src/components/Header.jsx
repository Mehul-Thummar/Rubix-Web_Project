import React from 'react'
import { Carousel } from "flowbite-react";
import image55 from "../assets/asset 55.jpg";
import image56 from "../assets/asset 56.jpg";
import image57 from "../assets/asset 57.jpg";
import Section_1 from './Section_1';
import Section_2 from './Section_2';
import Section_3 from './Section_3';
import Section_4 from './Section_4';
import Section_5 from './Section_5';
import Section_6 from './Section_6';
import Section_7 from './Section_7';
import Section_8 from './Section_8';
import Footer from './Footer';


const Header = () => {
    return (
        <div>
            <div className='container'>
                <div className='w-screen h-screen '>

                    {/* ------------------- HEADER ------------------- */}

                    <div className='header-3'>
                        <div className='line'></div>
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                            <Carousel className='h-[500px] '>

                                {/* ****************** slide-1 ****************** */}

                                <div className=''>
                                    <div className='absolute px-20 py-32 textmain1 textmain'>
                                        <div className=' '>
                                            <div className='flex mb-2'>
                                                <p className='font-bold'>Quick parcel delivery,</p>
                                                <p className='text-yellow-600 font-bold'>from $25</p>
                                            </div>
                                            <h1 className='text-[45px] font-bold'>Normann Copenhagen -<br></br>Craft salt and pepper gririder</h1>
                                            <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
                                        </div>
                                    </div>
                                    <div className="flex h-[500px] items-center justify-center  dark:text-white">
                                        <img className='h-[500px] w-screen' src={image55} alt="" />
                                    </div>
                                </div>

                                {/* ****************** slide-2 ****************** */}

                                <div className=''>
                                    <div className='absolute px-20 py-32 textmain2 textmain'>
                                        <div className=' '>
                                            <div className='flex mb-2'>
                                                <p className='font-bold'>Quick parcel delivery,</p>
                                                <p className='text-yellow-600 font-bold'>from $25</p>
                                            </div>
                                            <h1 className='text-[45px] font-bold'>Wood Minimal Office Chair<br></br>Extra 40% off now.</h1>
                                            <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
                                        </div>
                                    </div>

                                    <div className="flex h-[500px]items-center justify-center dark:text-white">
                                        <img img className='h-[500px] w-screen' src={image56} alt="" />
                                    </div>
                                </div>

                                {/* ****************** slide-3 ****************** */}

                                <div className=''>
                                    <div className='absolute px-20 py-32 textmain3 textmain'>
                                        <div className=' '>
                                            <div className='flex mb-2'>
                                                <p className='font-bold'>Quick parcel delivery,</p>
                                                <p className='text-yellow-600 font-bold'>from $25</p>
                                            </div>
                                            <h1 className='text-[45px] font-bold'>Everyone's Talking About<br></br>Sweeper and funnel.</h1>
                                            <button className='text-white bg-black h-[50px] w-[150px] flex items-center rounded-md justify-center mt-3'>Start shopping</button>
                                        </div>
                                    </div>
                                    <div className="flex h-[500px] items-center justify-center dark:text-white">
                                        <img className='h-[500px] w-screen' src={image57} alt="" />
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div >
                </div >
            </div >
            <Section_1 />
            <Section_2 />
            <Section_3 />
            <Section_4 />
            <Section_5 />
            <Section_6 />
            <Section_7 />
            <Section_8 />
            <Footer />
        </div>
    )
}

export default Header
