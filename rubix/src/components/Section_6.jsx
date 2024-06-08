import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowRight } from "react-icons/sl";
import image24 from "../assets/asset 24.jpeg";
import image25 from "../assets/asset 25.jpeg";
import image26 from "../assets/asset 26.jpeg";
import image27 from "../assets/asset 27.jpeg";



const Section_6 = () => settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};
//     return (
//         <div className='p-4'>

//             <div>
//                 <div className='flex justify-center items-center text-center'>
//                     <div>
//                         <p className='font-bold text-3xl mb-2'>Latest From Blog</p>
//                         <p className='mb-4'>Class Aptent Taciti Sociosqu Ad Litora Torquent Per</p>
//                     </div>
//                 </div>
//             </div>
//             <div className=' h-[546px] flex justify-center mt-5'>

//                 {/* ************** Card-2 ************** */}

//                 <div className='relative '>
//                     <div className='w-[502px] h-[338px]'>
//                         <div className=''>
//                             <div className=''>
//                                 <div className='absolute overflow-hidden '>
//                                     <img className='hover:scale-110 hover:ease-in-out' src={image24} alt="" />
//                                 </div>
//                                 <div className='absolute'>
//                                     <div className='p-3 flex '>
//                                         <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white mr-1'>CONSTRUCTION</h1>
//                                         <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white '>FURNITURE</h1>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='w-[502px] h-[208px]'>
//                         <div className=''>
//                             <div className='flex '>
//                                 <h1 className='font-bold text-[#bd9b4c]'>Admin</h1>
//                                 <h1 className='font-semibold'>.</h1>
//                                 <h1 className=''>December 21, 2020</h1>
//                             </div>
//                             <h1 className='font-bold text-[26px] hover:text-[#bd9b4c] mt-1 mb-3'>Anteposuerit litterarum formas.</h1>
//                             <p className='mb-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste voluptatem commodi ea eius ipsum, reiciendis ...</p>
//                             <button className='flex items-center border-2 rounded px-6 py-3 hover:bg-[#bd9b4c] hover:text-white hover:border-[#bd9b4c]'>
//                                 <h1 className='font-semibold'>Read More</h1>
//                                 <SlArrowRight className='size-4 ml-3' />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ************** Card-2 ************** */}

//                 <div className='relative '>
//                     <div className='w-[502px] h-[338px]'>
//                         <div className=''>
//                             <div className=''>
//                                 <div className='absolute overflow-hidden '>
//                                     <img className='hover:scale-110 hover:ease-in-out' src={image25} alt="" />
//                                 </div>
//                                 <div className='absolute'>
//                                     <div className='p-3 flex '>
//                                         <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white mr-1'>FURNITURE</h1>
//                                         <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white '>TRAVEL</h1>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='w-[502px] h-[208px]'>
//                         <div className=''>
//                             <div className='flex '>
//                                 <h1 className='font-bold text-[#bd9b4c]'>Admin</h1>
//                                 <h1 className='font-semibold'>.</h1>
//                                 <h1 className=''>December 20, 2020</h1>
//                             </div>
//                             <h1 className='font-bold text-[26px] hover:text-[#bd9b4c] mt-1 mb-3'>Stylish color scheme in interior</h1>
//                             <p className='mb-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste voluptatem commodi ea eius ipsum, reiciendis ...</p>
//                             <button className='flex items-center border-2 rounded px-6 py-3 hover:bg-[#bd9b4c] hover:text-white hover:border-[#bd9b4c]'>
//                                 <h1 className='font-semibold'>Read More</h1>
//                                 <SlArrowRight className='size-4 ml-3' />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ************** Card-3 ************** */}

//                 <div className='relative '>
//                     <div className='w-[502px] h-[338px]'>
//                         <div className=''>
//                             <div className=''>
//                                 <div className='absolute overflow-hidden '>
//                                     <img className='hover:scale-110 hover:ease-in-out' src={image26} alt="" />
//                                 </div>
//                                 <div className='absolute'>
//                                     <div className='p-3 flex '>
//                                         <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white mr-1'>EDUCATION</h1>
//                                         <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white '>FURNITURE</h1>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='w-[502px] h-[208px]'>
//                         <div className=''>
//                             <div className='flex '>
//                                 <h1 className='font-bold text-[#bd9b4c]'>Admin</h1>
//                                 <h1 className='font-semibold'>.</h1>
//                                 <h1 className=''>December 19, 2020</h1>
//                             </div>
//                             <h1 className='font-bold text-[26px] hover:text-[#bd9b4c] mt-1 mb-3'>The color scheme for bedrooms </h1>
//                             <p className='mb-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste voluptatem commodi ea eius ipsum, reiciendis ...</p>
//                             <button className='flex items-center border-2 rounded px-6 py-3 hover:bg-[#bd9b4c] hover:text-white hover:border-[#bd9b4c]'>
//                                 <h1 className='font-semibold'>Read More</h1>
//                                 <SlArrowRight className='size-4 ml-3' />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ************** Card-4 ************** */}
//                 <div className='relative '>
//                     <div className='w-[502px] h-[338px]'>
//                         <div className=''>
//                             <div className=''>
//                                 <div className='absolute overflow-hidden '>
//                                     <img className='hover:scale-110 hover:ease-in-out' src={image27} alt="" />
//                                 </div>
//                                 <div className='absolute'>
//                                     <div className='p-3 flex '>
//                                         <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white mr-1'>FURNITURE</h1>
//                                         <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white '>SOCIAL</h1>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='w-[502px] h-[208px]'>
//                         <div className=''>
//                             <div className='flex '>
//                                 <h1 className='font-bold text-[#bd9b4c]'>Admin</h1>
//                                 <h1 className='font-semibold'>.</h1>
//                                 <h1 className=''>December 18, 2020</h1>
//                             </div>
//                             <h1 className='font-bold text-[26px] hover:text-[#bd9b4c] mt-1 mb-3'>According to feng shui, the indoor</h1>
//                             <p className='mb-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste voluptatem commodi ea eius ipsum, reiciendis ...</p>
//                             <button className='flex items-center border-2 rounded px-6 py-3 hover:bg-[#bd9b4c] hover:text-white hover:border-[#bd9b4c]'>
//                                 <h1 className='font-semibold'>Read More</h1>
//                                 <SlArrowRight className='size-4 ml-3' />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Section_6






return (
    <div className="slider-container">
        <Slider {...settings}>
            <div>
                <div className='relative '>
                    <div className='w-[502px] h-[338px]'>
                        <div className=''>
                            <div className=''>
                                <div className='absolute overflow-hidden '>
                                    <img className='hover:scale-110 hover:ease-in-out' src={image26} alt="" />
                                </div>
                                <div className='absolute'>
                                    <div className='p-3 flex '>
                                        <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white mr-1'>EDUCATION</h1>
                                        <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white '>FURNITURE</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[502px] h-[208px]'>
                        <div className=''>
                            <div className='flex '>
                                <h1 className='font-bold text-[#bd9b4c]'>Admin</h1>
                                <h1 className='font-semibold'>.</h1>
                                <h1 className=''>December 19, 2020</h1>
                            </div>
                            <h1 className='font-bold text-[26px] hover:text-[#bd9b4c] mt-1 mb-3'>The color scheme for bedrooms </h1>
                            <p className='mb-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste voluptatem commodi ea eius ipsum, reiciendis ...</p>
                            <button className='flex items-center border-2 rounded px-6 py-3 hover:bg-[#bd9b4c] hover:text-white hover:border-[#bd9b4c]'>
                                <h1 className='font-semibold'>Read More</h1>
                                <SlArrowRight className='size-4 ml-3' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='relative '>
                    <div className='w-[502px] h-[338px]'>
                        <div className=''>
                            <div className=''>
                                <div className='absolute overflow-hidden '>
                                    <img className='hover:scale-110 hover:ease-in-out' src={image26} alt="" />
                                </div>
                                <div className='absolute'>
                                    <div className='p-3 flex '>
                                        <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white mr-1'>EDUCATION</h1>
                                        <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white '>FURNITURE</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[502px] h-[208px]'>
                        <div className=''>
                            <div className='flex '>
                                <h1 className='font-bold text-[#bd9b4c]'>Admin</h1>
                                <h1 className='font-semibold'>.</h1>
                                <h1 className=''>December 19, 2020</h1>
                            </div>
                            <h1 className='font-bold text-[26px] hover:text-[#bd9b4c] mt-1 mb-3'>The color scheme for bedrooms </h1>
                            <p className='mb-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste voluptatem commodi ea eius ipsum, reiciendis ...</p>
                            <button className='flex items-center border-2 rounded px-6 py-3 hover:bg-[#bd9b4c] hover:text-white hover:border-[#bd9b4c]'>
                                <h1 className='font-semibold'>Read More</h1>
                                <SlArrowRight className='size-4 ml-3' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='relative '>
                    <div className='w-[502px] h-[338px]'>
                        <div className=''>
                            <div className=''>
                                <div className='absolute overflow-hidden '>
                                    <img className='hover:scale-110 hover:ease-in-out' src={image26} alt="" />
                                </div>
                                <div className='absolute'>
                                    <div className='p-3 flex '>
                                        <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white mr-1'>EDUCATION</h1>
                                        <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white '>FURNITURE</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[502px] h-[208px]'>
                        <div className=''>
                            <div className='flex '>
                                <h1 className='font-bold text-[#bd9b4c]'>Admin</h1>
                                <h1 className='font-semibold'>.</h1>
                                <h1 className=''>December 19, 2020</h1>
                            </div>
                            <h1 className='font-bold text-[26px] hover:text-[#bd9b4c] mt-1 mb-3'>The color scheme for bedrooms </h1>
                            <p className='mb-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste voluptatem commodi ea eius ipsum, reiciendis ...</p>
                            <button className='flex items-center border-2 rounded px-6 py-3 hover:bg-[#bd9b4c] hover:text-white hover:border-[#bd9b4c]'>
                                <h1 className='font-semibold'>Read More</h1>
                                <SlArrowRight className='size-4 ml-3' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='relative '>
                    <div className='w-[502px] h-[338px]'>
                        <div className=''>
                            <div className=''>
                                <div className='absolute overflow-hidden '>
                                    <img className='hover:scale-110 hover:ease-in-out' src={image26} alt="" />
                                </div>
                                <div className='absolute'>
                                    <div className='p-3 flex '>
                                        <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white mr-1'>EDUCATION</h1>
                                        <h1 className='font-bold bg-[#bd9b4c] px-2 py-1 text-sm rounded-md text-white '>FURNITURE</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[502px] h-[208px]'>
                        <div className=''>
                            <div className='flex '>
                                <h1 className='font-bold text-[#bd9b4c]'>Admin</h1>
                                <h1 className='font-semibold'>.</h1>
                                <h1 className=''>December 19, 2020</h1>
                            </div>
                            <h1 className='font-bold text-[26px] hover:text-[#bd9b4c] mt-1 mb-3'>The color scheme for bedrooms </h1>
                            <p className='mb-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste voluptatem commodi ea eius ipsum, reiciendis ...</p>
                            <button className='flex items-center border-2 rounded px-6 py-3 hover:bg-[#bd9b4c] hover:text-white hover:border-[#bd9b4c]'>
                                <h1 className='font-semibold'>Read More</h1>
                                <SlArrowRight className='size-4 ml-3' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
);

export default Section_6;
