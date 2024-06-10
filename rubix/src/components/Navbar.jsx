import React from 'react'
import { SlHandbag, SlUser } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";



const Navbar = () => {
    return (
        <div>
            <div className='container'>
                <div className='w-screen'>
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
                            <SlUser className='size-4 mx-2' />
                            <p className=' mx-1 hover:text-[#ba933e]'>Login /</p>
                            <p className=' mr-1 hover:text-[#ba933e]'>Register</p>
                            <p className=' mx-5 hover:text-[#ba933e]'>|</p>
                            <div className='flex justify-center items-center'>
                                <CiHeart className=' size-6 mx-3 ' />
                                <SlHandbag className=' size-5 mx-3' />
                                <IoSearchOutline className=' size-6 mx-3' />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Navbar
