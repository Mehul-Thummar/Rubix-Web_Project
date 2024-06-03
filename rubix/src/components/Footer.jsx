import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuMapPin } from "react-icons/lu";
import image41 from "../assets/asset 41.png";


const Footer = () => {
    return (
        <div>
            <div className='w-screen h-96 border border-gray-600 bg-black p-16 flex justify-around'>
                <div className='flex p-5 w-56 h-64 '>
                    <div>
                        <div className=' h-14'>
                            <img className='w-32 h-6' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/01/logo-footer-rubix.png" alt="" />
                        </div>
                        <div className='flex  items-center space-x-6'>
                            <FaFacebook className='text-white size-7' />
                            <FaTwitter className='text-white size-7' />
                            <FaYoutube className='text-white size-7' />
                            <FaWhatsapp className='text-white size-7' />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex p-5 w-60 h-64 '>
                        <div>
                            <div className=' h-10'>
                                <p className='text-white font-semibold'>Customer Services</p>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-gray-300 text-xs font-light'>My Account</p>
                                <p className='text-gray-300 text-xs font-light'>Track Your Order</p>
                                <p className='text-gray-300 text-xs font-light'>FAQs</p>
                                <p className='text-gray-300 text-xs font-light'>Payment Methods</p>
                                <p className='text-gray-300 text-xs font-light'>Shipping Guide</p>
                                <p className='text-gray-300 text-xs font-light'>Products Support</p>
                                <p className='text-gray-300 text-xs font-light'>Gift Card Balance</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex p-5 w-60 h-64 '>
                        <div>
                            <div className=' h-10'>
                                <p className='text-white font-semibold'>More From Rubix</p>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-gray-300 text-xs font-light'>About Rubix</p>
                                <p className='text-gray-300 text-xs font-light'>Our Guarantees</p>
                                <p className='text-gray-300 text-xs font-light'>Terms and Conditions</p>
                                <p className='text-gray-300 text-xs font-light'>Wishlist</p>
                                <p className='text-gray-300 text-xs font-light'>Return Policy</p>
                                <p className='text-gray-300 text-xs font-light'>Delivery & Return</p>
                                <p className='text-gray-300 text-xs font-light'>Sitemap</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex p-5 w-60 h-64 '>
                        <div>
                            <div className=' '>
                                <div className='h-10'>
                                    <p className='text-white font-semibold'>Let’s Talk</p>
                                </div>
                                <div className='h-16 flex'>
                                    <TfiHeadphoneAlt className='text-white font-light size-4 ' />
                                    <div className='space-y-2'>
                                        <p className='text-gray-300 text-xs font-light ml-2'>+391 (0)35 2568 4593</p>
                                        <p className='text-gray-300 text-xs font-light underline ml-2'>hello@domain.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' '>
                                <div className='h-10'>
                                    <p className='text-white font-semibold'>Find Us</p>
                                </div>
                                <div className='h-10 flex'>
                                    <LuMapPin className='text-white font-light size-4 ' />
                                    <div className='space-y-2'>
                                        <p className='text-gray-300 text-xs font-light ml-2'>502 New Design Str</p>
                                        <p className='text-gray-300 text-xs font-light ml-2'>Melbourne, Australia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen  bg-black p-16 flex justify-between'>
                <div className=''>
                    <p className='text-gray-300 text-sm font-light '>Copyright © <span className='font-semibold'>Rubix</span> all rights reserved. Powered by <span className='font-semibold'>Bluesky Team</span></p>
                </div>
                <div>
                    <img className='' src={image41} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
