import React from 'react'
import Navbar from '../components/Navbar'
import { TfiAngleDown } from "react-icons/tfi";
import { FaAngleRight, FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { SlEqualizer } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Shop = () => {


    return (
        <div>
            <Navbar />
            {/* ------------------- Shop Page ------------------- */}
            <div className='flex justify-center '>
                <div className='w-screen relative'>
                    <div className='h-[330px]'>
                        <div className='absolute '>
                            <img className='bg-fixed bg-no-repeat bg-cover w-screen' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/04/default_category.jpg" alt="" />
                        </div>
                        <div className='absolute w-screen px-8 p-20 mx-6 '>
                            <div className=''>
                                <h1 className='font-bold text-4xl'>Shop</h1>
                                <div className='flex '>
                                    <p className='hover:text-[#bd9b4c] mr-2'>Home / </p>
                                    <p className='text-gray-500'>Shop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-[65px] px-[15px] mb-[30px] '>
                        <div className='flex justify-center space-x-8 '>
                            <div className='w-[23%] h-[1500px] mb-10 '>
                                <h1 className='font-bold mb-4'>Product Categories</h1>
                                <div className='flex justify-between h-6 mb-[6px]'>
                                    <div className='flex items-center hover:cursor-pointer'>
                                        <div className="size-[15px] rounded-full border-2 object-cover"></div>
                                        <p className='pl-3 pr-1 text-sm'>Fashion</p>
                                    </div>
                                    <div className='hover:cursor-pointer'>
                                        <TfiAngleDown className='' />
                                    </div>
                                </div>

                                <div className='flex justify-between h-6 mb-[6px]'>
                                    <div className='flex items-center hover:cursor-pointer'>
                                        <div className="size-[15px] rounded-full border-2 object-cover"></div>
                                        <p className='pl-3 pr-1 text-sm'>Furniture</p>
                                    </div>
                                    <div className='hover:cursor-pointer'>
                                        <TfiAngleDown className='' />
                                    </div>
                                </div>

                                <div className='flex justify-between h-6 mb-[6px]'>
                                    <div className='flex items-center hover:cursor-pointer'>
                                        <div className="size-[15px] rounded-full border-2 object-cover"></div>
                                        <p className='pl-3 pr-1 text-sm'>Jewelly</p>
                                    </div>
                                    <div className='hover:cursor-pointer'>
                                        <TfiAngleDown className='' />
                                    </div>
                                </div>

                                <div className='flex justify-between h-6 mb-[6px] '>
                                    <div className='flex items-center hover:cursor-pointer'>
                                        <div className="size-[15px] rounded-full border-2 object-cover"></div>
                                        <p className='pl-3 pr-1 text-sm'>Organic</p>
                                    </div>
                                    <div className='hover:cursor-pointer'>
                                        <TfiAngleDown className='' />
                                    </div>
                                </div>

                                <div className='flex justify-between h-6 mb-[6px]'>
                                    <div className='flex items-center hover:cursor-pointer'>
                                        <div className="size-[15px] rounded-full border-2 object-cover"></div>
                                        <p className='pl-3 pr-1 text-sm'>Plant</p>
                                    </div>
                                </div>
                                <div className=' pt-8 mb-14'>
                                    <div className='bg-gray-200 h-[1px]'></div>
                                </div>

                                <h1 className='font-bold mb-6'>Price</h1>
                                <div className=''>
                                    <div className='flex items-center mb-3'>
                                        <h1 className='text-sm mr-1'>Price: </h1>
                                        <h1 className='font-bold text-sm'>$0</h1>
                                        <div className='h-[0.5px] mx-1 bg-black w-[15px]'></div>
                                        <h1 className='font-bold text-sm'>$9,230</h1>
                                    </div>
                                    <div className='flex '>
                                        <div className='text-sm font-bold bg-black hover:bg-[#bd9b4c] hover:cursor-pointer px-7 py-3 flex items-center rounded text-white'>Filter
                                            <FaAngleRight className='size-5 ml-[5px]' />
                                        </div>
                                    </div>
                                    <div className=' pt-8 mb-14'>
                                        <div className='bg-gray-200 h-[1px]'></div>
                                    </div>
                                </div>
                                <h1 className='font-bold mb-6'>Color</h1>
                                <div className=''>
                                    <div className='flex items-center space-x-2'>
                                        <div className='rounded-full size-5 hover:ring-2 hover:cursor-pointer hover:ring-gray-300 bg-black '></div>
                                        <div className='rounded-full size-5 hover:ring-2 hover:cursor-pointer hover:ring-gray-300 bg-gray-400'></div>
                                        <div className='rounded-full size-5 hover:ring-2 hover:cursor-pointer hover:ring-gray-300 bg-orange-400'></div>
                                        <div className='rounded-full size-5 hover:ring-2 hover:cursor-pointer hover:ring-gray-300 bg-orange-500'></div>
                                        <div className='rounded-full size-5 hover:ring-2 hover:cursor-pointer hover:ring-gray-300 ring-2 ring-gray-100'></div>
                                        <div className='rounded-full size-5 hover:ring-2 hover:cursor-pointer hover:ring-gray-300 bg-[#c0a58a]'></div>
                                        <div className='rounded-full size-5 hover:ring-2 hover:cursor-pointer hover:ring-gray-300 bg-yellow-400'></div>
                                    </div>
                                </div>
                                <div className=' pt-8 mb-14'>
                                    <div className='bg-gray-200 h-[1px]'></div>
                                </div>

                                <h1 className='font-bold mb-6'>Size</h1>
                                <div className='flex justify-between h-6 mb-[6px] '>
                                    <div className='flex items-center hover:cursor-pointer'>
                                        <div className="size-[16px] rounded-full border-2 object-cover"></div>
                                        <p className='pl-3 pr-1'>L (1)</p>
                                    </div>
                                </div>

                                <div className='flex justify-between h-6 mb-[6px] '>
                                    <div className='flex items-center hover:cursor-pointer'>
                                        <div className="size-[16px] rounded-full border-2 object-cover"></div>
                                        <p className='pl-3 pr-1'>M (1)</p>
                                    </div>
                                </div>

                                <div className='flex justify-between h-6 mb-[6px] '>
                                    <div className='flex items-center hover:cursor-pointer'>
                                        <div className="size-[16px] rounded-full border-2 object-cover"></div>
                                        <p className='pl-3 pr-1'>S (1)</p>
                                    </div>
                                </div>

                                <div className='flex justify-between h-6 mb-[6px] '>
                                    <div className='flex items-center hover:cursor-pointer'>
                                        <div className="size-[16px] rounded-full border-2 object-cover"></div>
                                        <p className='pl-3 pr-1'>XL (1)</p>
                                    </div>
                                </div>

                                <div className='flex justify-between h-6 mb-[6px] '>
                                    <div className='flex items-center hover:cursor-pointer'>
                                        <div className="size-[16px] rounded-full border-2 object-cover"></div>
                                        <p className='pl-3 pr-1'>Xs (1)</p>
                                    </div>
                                </div>

                                <div className=' pt-8 mb-14'>
                                    <div className='bg-gray-200 h-[1px]'></div>
                                </div>

                                <h1 className='font-bold mb-6'>Featured Products</h1>

                                <div className='pt-1'>
                                    <div className='flex mb-8'>
                                        <div>
                                            <img className='size-[90px]' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2022/04/product5.jpg" alt="" />
                                        </div>
                                        <div className='pl-5'>
                                            <h1 className='font-semibold hover:text-[#bd9b4c] text-sm'>Promise Alyada 18K <br /> Yellow Gold</h1>
                                            <h1 className='text-gray-500 mb-2'>$10.00</h1>
                                            <div className='flex space-x-1'>
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex mb-8'>
                                        <div>
                                            <img className='size-[90px]' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2022/04/product4.jpg" alt="" />
                                        </div>
                                        <div className='pl-5'>
                                            <h1 className='font-semibold hover:text-[#bd9b4c] text-sm'>18K Yellow Gold Diamond <br />Ring</h1>
                                            <h1 className='text-gray-500 mb-2'>$10.00</h1>
                                            <div className='flex space-x-1'>
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex '>
                                        <div>
                                            <img className='size-[90px]' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2022/04/product3.jpg" alt="" />
                                        </div>
                                        <div className='pl-5'>
                                            <h1 className='font-semibold hover:text-[#bd9b4c] text-sm'>Sparkle 18K Yellow Gold<br />Emerald</h1>
                                            <h1 className='text-gray-500 mb-2'>$10.00</h1>
                                            <div className='flex space-x-1'>
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                                <FaStar className='size-3 text-gray-400' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* *************** Porduct - Crad *************** */}

                            <div className='w-[77%] h-[1500px] '>

                                <div>
                                    <div className='flex justify-between mb-[35]'>
                                        <div className='w-[19.25%] h-10 flex items-center '>
                                            <h1 className='text-sm mb-1'>Showing 1–12 of 97 results</h1>
                                        </div>
                                        <div className='w-[19.25%] h-10 flex items-center '>
                                            <h1 className='text-sm mx-[7px]'>Views:</h1>
                                        </div>
                                        <div>
                                            <div className='h-96'>
                                                {/* <div className=''>
                                                <div className='group'>
                                                    <button className=' border w-52 h-10 shadow border-gray-300 rounded text-sm pl-[15px] pr-[30px] text-center flex justify-between items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ' type='button'>
                                                        Default Sorting <TfiAngleDown className='' /></button>
                                                    <ul className='bg-white border group-focus-within:block hidden border-black shadow'>
                                                        <li className='pl-[15px] hover:bg-blue-600 text-sm hover:text-white'>Default Sorting</li>
                                                        <li className='pl-[15px] hover:bg-blue-600 text-sm hover:text-white'>Sort By Popularity</li>
                                                        <li className='pl-[15px] hover:bg-blue-600 text-sm hover:text-white'>Sort By Average Rating</li>
                                                        <li className='pl-[15px] hover:bg-blue-600 text-sm hover:text-white'>Sort By Latest</li>
                                                        <li className='pl-[15px] hover:bg-blue-600 text-sm hover:text-white'>Sort By Price: Low to High</li>
                                                        <li className='pl-[15px] hover:bg-blue-600 text-sm hover:text-white'>Sort By Price: High to Low</li>
                                                    </ul>
                                                </div>
                                            </div> */}

                                                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown divider <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                                </button>

                                                <div id="dropdownDivider" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                                                        <li>
                                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                                        </li>
                                                    </ul>
                                                    <div class="py-2">
                                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className='group flex justify-center relative'>
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
                                </div> */}


                                <div className='flex items-end h-[1200px]'>
                                    <Stack spacing={2}><Pagination count={10} variant="outlined" shape="rounded" /></Stack>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Shop
