import React from 'react'
import { CiHeart } from "react-icons/ci";
import { SlEqualizer } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";

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

                    <div className='flex justify-center items-center '>
                        <div className='w-64 h-72 bg-gray-100 group '>
                            <div className=''>
                                <div className='flex justify-between p-5'>
                                    <div className=' rounded bg-[#bd9b4c]  w-12 h-6 flex justify-center items-center'>
                                        <p className=' font-bold text-sm text-white'>Sale!</p>
                                    </div>
                                    <div className='group-hover:block hidden '>
                                        <div className='size-10 bg-white mb-3 flex justify-center items-center'>
                                            <CiHeart className='size-6' />
                                        </div>
                                        <div className='size-10  bg-white mb-3 flex justify-center items-center'>
                                            <SlEqualizer className='size-4' />
                                        </div>
                                        <div className='size-10  bg-white mb-3 flex justify-center items-center'>
                                            <IoEyeOutline className='size-5' />
                                        </div>
                                    </div>
                                </div>
                                <div className='group-hover:block hidden'>
                                    <div className='flex justify-center text-center'>
                                        <div className='flex justify-center items-center text-white bg-black hover:bg-[#bd9b4c] font-bold  rounded text-sm w-[85%] h-10'>
                                            <SlHandbag className='' />
                                            <button type="button" className='ml-2'>Add to Card</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <img className='' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2020/12/30_1.jpg" alt="" />
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
                    <div className='flex justify-center items-center '>
                        <div className=' bg-black'>
                            <div className=' '>

                            </div>
                        </div>
                    </div>


















                </div>
            </div>
        </div >
    )
}

export default Home_page
