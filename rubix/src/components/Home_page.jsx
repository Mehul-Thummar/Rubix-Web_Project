import React from 'react'
import { CiHeart } from "react-icons/ci";
import { SlEqualizer } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa";

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

                    <div className='flex justify-center items-center text-center'>
                        <div>
                            <p className='font-bold text-2xl mb-2'>Trending Products</p>
                            <p className='text-sm mb-4'>Top View In This Week</p>
                        </div>
                    </div>

                    {/* ------------------- Section-2 ------------------- */}

                    <div className='flex justify-center'>
                        <div className='group'>
                            <div className='w-64 h-80 '>
                                <div className='absolute'>
                                    <img className='w-64 h-80' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2020/12/28.jpg" alt="" />
                                </div>
                                <div className='absolute group hover:block hidden'>
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
                                <div className='absolute group hover:block hidden'>
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
                            <div className='mt-3'>
                                <p className='font text-sm font-bold text-[#444444] hover:text-[#bd9b4c]'>Turning Table</p>
                                <div className='flex text-xs '>
                                    <p className='mr-2 line-through text-gray-400'>$57.00</p>
                                    <p className='text-[#bd9b4c]'>$52.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ------------------- Section-3 ------------------- */}
                    <div className='flex justify-center mt-20'>
                        <div className=' '>
                            <div className='w-[690px] h-[442px] bg-gray-100 mr-5 relative'>
                                <div className='absolute'>
                                    <img className='w-[690px] h-[442px]' src="https://t4.ftcdn.net/jpg/03/43/56/95/360_F_343569530_VlNBOxLKC7kaesmrnW68WwRUnGl0Eh8Z.jpg" alt="" />
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
                    </div>



























                </div>
            </div >
        </div >
    )
}

export default Home_page
