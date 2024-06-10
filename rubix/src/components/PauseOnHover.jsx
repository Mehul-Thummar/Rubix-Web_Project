import React, { Component } from "react";
import Slider from "react-slick";
import image28 from "../assets/asset 28.jpeg";


function PauseOnHover() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div className=''>
                        <img className='w-[130px]' src={image28} alt="" />
                    </div>
                </div>
                <div>
                    <div className=''>
                        <img className='w-[130px]' src={image28} alt="" />
                    </div>
                </div>
                <div>
                    <div className=''>
                        <img className='w-[130px]' src={image28} alt="" />
                    </div>
                </div>
                <div>
                    <div className=''>
                        <img className='w-[130px]' src={image28} alt="" />
                    </div>
                </div>
                <div>
                    <div className=''>
                        <img className='w-[130px]' src={image28} alt="" />
                    </div>
                </div>
                <div>
                    <div className=''>
                        <img className='w-[130px]' src={image28} alt="" />
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default PauseOnHover;
