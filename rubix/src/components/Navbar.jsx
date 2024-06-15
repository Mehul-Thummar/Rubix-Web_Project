import React from 'react'
import { SlHandbag, SlUser } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { NavLink } from 'react-router-dom'



const Navbar = () => {

    return (
        <div>
            <div className='container'>
                <div className='w-screen'>
                    {/* ------------------- Nav bar ------------------- */}
                    <div className='flex justify-between items-center px-6 h-20'>
                        <div className='flex items-center '>
                            <NavLink to="/">
                                <img className='h-6 pr-4 ' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/05/logo_x2.png" alt="" />
                            </NavLink>
                        </div>
                        <div className='flex justify-center items-center'>
                            <ul className='flex justify-center items-center'>
                                <li><NavLink className='px-5  hover:text-[#ba933e]' to="/">Home<i class="fa-solid fa-angle-down"></i></NavLink></li>
                                <li><NavLink className='px-5  hover:text-[#ba933e]' to="/Shop">Shop<i class="fa-solid fa-angle-down"></i></NavLink></li>
                                <li><NavLink className='px-5  hover:text-[#ba933e]' to="/Page">Page<i class="fa-solid fa-angle-down"></i></NavLink></li>
                                <li><NavLink className='px-5  hover:text-[#ba933e]' to="/Blog">Blog<i class="fa-solid fa-angle-down"></i></NavLink></li>
                            </ul>
                            <div className='flex items-end px-5 hover:text-[#ba933e] space-x-3'>
                                <NavLink className='' to="/Contact">Contact</NavLink>
                                <RiArrowDownSLine className='size-5' />
                            </div>
                        </div>
                        <div className='flex justify-center items-center '>
                            <SlUser className='hover:text-[#ba933e] size-4 mx-2' />
                            <p className=' mx-1 hover:text-[#ba933e]'>Login /</p>
                            <p className=' mr-1 hover:text-[#ba933e]'>Register</p>
                            <p className=' mx-5 hover:text-[#ba933e]'>|</p>
                            <div className='flex justify-center items-center'>
                                <CiHeart className='hover:text-[#ba933e] size-6 mx-3 ' />
                                <SlHandbag className='hover:text-[#ba933e] size-5 mx-3' />
                                <IoSearchOutline className='hover:text-[#ba933e] size-6 mx-3' />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Navbar
