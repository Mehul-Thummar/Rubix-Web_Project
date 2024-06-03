import React from 'react'
import { CiHeart } from "react-icons/ci";
import { SlEqualizer } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa";
import image45 from "../assets/asset 45.jpeg";
import image46 from "../assets/asset 46.jpeg";
import image47 from "../assets/asset 47.jpeg";
import image48 from "../assets/asset 48.jpeg";
import image10 from "../assets/asset 10.jpeg";
import image11 from "../assets/asset 11.jpeg";
import image12 from "../assets/asset 12.jpeg";
import image34 from "../assets/asset 34.jpeg";
import image35 from "../assets/asset 35.jpeg";
import image36 from "../assets/asset 36.jpeg";
import image37 from "../assets/asset 37.jpeg";
import image38 from "../assets/asset 38.jpeg";
import image39 from "../assets/asset 39.jpeg";
import image28 from "../assets/asset 28.jpeg";
import image29 from "../assets/asset 29.jpeg";
import image30 from "../assets/asset 30.jpeg";
import image31 from "../assets/asset 31.jpeg";
import image32 from "../assets/asset 32.jpeg";
import image33 from "../assets/asset 33.jpeg";
import Footer from './Footer';

const Home_page = () => {
    return (
        <div>
            <div className='container'>
                <div className='w-screen h-screen '>
                    {/* ------------------- Nav bar ------------------- */}
                    <div className='flex justify-between items-center px-6 h-20'>
                        <div className='flex items-center '>
                            <img className='h-6 pr-4 ' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/05/logo_x2.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <ul className='flex justify-center items-center'>
                                <li><a className='px-5 hover:text-[#ba933e] ' href="">Home<i class="fa-solid fa-angle-down"></i></a></li>
                                <li><a className='px-5  hover:text-[#ba933e]' href="">Shop<i class="fa-solid fa-angle-down"></i></a></li>
                                <li><a className='px-5  hover:text-[#ba933e]' href="">Page<i class="fa-solid fa-angle-down"></i></a></li>
                                <li><a className='px-5  hover:text-[#ba933e]' href="">Blog<i class="fa-solid fa-angle-down"></i></a></li>
                            </ul>
                            <div className='flex items-center px-5  '>
                                <a className='px-2 hover:text-[#ba933e]' href="">Contact</a>
                                <img className='size-3 ' src="https://static.thenounproject.com/png/2169315-200.png" alt="" />
                            </div>
                        </div>
                        <div className='flex justify-center items-center '>
                            <img className='size-4 mx-2' src="https://e7.pngegg.com/pngimages/530/907/png-clipart-computer-icons-person-user-head-and-neck-desktop-wallpaper-area.png" alt="" />
                            <p className=' mx-1 hover:text-[#ba933e]'>Login /</p>
                            <p className=' mr-1 hover:text-[#ba933e]'>Register</p>
                            <p className=' mx-5 hover:text-[#ba933e]'>|</p>
                            <div className='flex justify-center items-center'>
                                <img className=' size-4 mx-3 ' src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-heart-icon-png-image_927021.jpg" alt="" />
                                <img className=' size-4 mx-3 ' src="https://toppng.com/uploads/preview/freebag-vector-retail-shopping-cart-bag-icon-11553505193l9s1kngqvt.png" alt="" />
                                <img className=' size-4 mx-3 ' src="https://www.pikpng.com/pngl/m/109-1092659_search-icon-small-png-clipart.png" alt="" />
                            </div>
                        </div>
                    </div>



                    {/* ------------------- Section-1 ------------------- */}

                    <div className='flex justify-center'>
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

                    {/* ------------------- Section-2 ------------------- */}


                    <div className='flex justify-center items-center mt-20 '>
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

                    <div className='flex justify-center items-center mt-10 '>
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



                    {/* ------------------- Section-3 ------------------- */}

                    <div>
                        <div>

                        </div>
                    </div>













                    {/* <div className='flex justify-center items-center h-[442px] pl-96 '>
                                    <div className='absolute '>
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
                                </div> */}

                    {/* ------------------- Section-4 ------------------- */}

                    <div className='flex justify-center mt-14 relative'>
                        <div className=''>
                            <div className='flex justify-center items-center text-center'>
                                <div>
                                    <p className='font-bold text-2xl mb-2'>Best Seller Products</p>
                                    <p className='text-sm mb-4'>Top Sale In This Week</p>
                                </div>
                            </div>
                            <div className='group mt-4 '>
                                <div className='w-64 h-80 '>
                                    <div className='absolute '>
                                        <img className='w-64 h-80 ' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2020/12/26-700x870.jpg" alt="" />
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
                                <p className='font text-sm font-bold text-[#444444] hover:text-[#bd9b4c]'>Mogens Koch Bookcase</p>
                                <div className='flex text-xs '>
                                    <p className='mr-2 text-gray-500 font-mediumbold'>$39.00</p>
                                    {/* <p className='text-[#bd9b4c]'>$52.00</p> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ------------------- Section-5 ------------------- */}
                    {/* <div className='flex justify-center mt-20'>
                        <div className='relative w-[100%] '>
                            <div className='bg-fixed '>
                                <img className='absolute w-[100%] h-auto' src={image48} alt="" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='absolute w-72 h-52 px-10 py-20 text-center bg-red-200'>
                                    <h1 className='font-bold text-[32px]'>Subcribe To Our Newsletter</h1>
                                <p>Sign up for the weekly newsletter and build better ecommerce stores.</p>
                                <input type="email" id="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="name@flowbite.com" required />
                                </div>
                            </div>
                        </div>
                    </div> */}


                    {/* <div className='flex justify-center  mt-20'>
                        <div className=''>
                            <img className='w-screen relative' src={image48} alt="" />
                            <div className='px-10 py-20 absolute text-center opacity-75'>
                                <h1 className='font-bold text-[32px]'>Subcribe To Our Newsletter</h1>
                                <p>Sign up for the weekly newsletter and build better ecommerce stores.</p>
                                <input type="email" id="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="name@flowbite.com" required />
                            </div>
                        </div>
                    </div> */}





                    {/* ------------------- Section-last second ------------------- */}

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


                    {/* ------------------- Section-last ------------------- */}

                    <div className='flex justify-center mt-14 '>
                        <div className='w-[1340px] h-[226px] p-4'>
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
                </div >
            </div >
        </div >
        
    )
}

export default Home_page
