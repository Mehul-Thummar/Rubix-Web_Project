import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image28 from "../assets/asset 28.jpeg";
import image29 from "../assets/asset 29.jpeg";
import image30 from "../assets/asset 30.jpeg";
import image31 from "../assets/asset 31.jpeg";
import image32 from "../assets/asset 32.jpeg";
import image33 from "../assets/asset 33.jpeg";



const Section_8 = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container">
            <div className='flex justify-center mt-14 '>
                <div className='w-[1340px] h-[226px] '>
                    <div className='flex border-y-[1px] '></div>
                    <Slider {...settings}>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src={image28} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src={image29} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src={image30} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src={image31} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src={image32} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='py-6'>
                                <img className='w-[160px]' src={image33} alt="" />
                            </div>
                        </div>
                    </Slider>
                    <div className='flex border-y-[1px] '></div>
                </div>
            </div>
        </div>
    );
}

export default Section_8;
