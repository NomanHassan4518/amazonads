import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoMdSearch } from "react-icons/io";
import { MdCalendarMonth, MdKeyboardArrowDown } from "react-icons/md";

// import { Link } from 'react-router-dom';

const ResHome = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        prevArrow: <></>, // This sets an empty React fragment as the previous arrow
        nextArrow: <></>,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // for large screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 768, // for medium screens
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // for small screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],

    };

    return (
        <div className='mt-3 '>
            <div className=' relative  w-full text-[#546070] font-medium px-2 border-t border-b border-gray-200 '>
                <Slider ref={sliderRef} {...settings} >
                    <div className='relative py-3'>
                        <h1 className='text-black'>Management</h1>
                        <div className='absolute left-0 top-[44px] z-50 w-full h-1 bg-blue-600'></div>
                    </div>
                    <div className='ml-5 py-3'>
                        <h1>Darfts</h1>
                    </div>
                    <div className='relative py-3'>
                        <h1 className='flex items-center'>Budgets <span className='bg-[#7b7e87] rounded text-sm text-white'>Beta</span></h1>
                    </div>
                    <div className='relative py-3'>
                        <h1>Products</h1>
                    </div>
                    <div className='relative py-3'>
                        <h1>Postfolio</h1>
                    </div>
                    <div className='relative py-3'>
                        <h1>Targeting</h1>
                    </div>
                    <div className='relative py-3'>
                        <h1>Settings</h1>
                    </div>
                    <div className='relative py-3'>
                        <h1>Hsitory</h1>
                    </div>
                </Slider>
            </div>

            <div className='bg-[#f3f3f3] pt-2 pb-4 px-3 h-[34rem]'>
                <button className='w-full text-white font-semibold bg-blue-600 text-center rounded-full py-3'>Creat Campaign</button>

                <div className="flex items-center mt-3 space-x-2">
                    <div className="p-2 border border-gray-400 rounded bg-white flex items-center">
                        <span><IoMdSearch /></span>
                        <input type="search" className='focus:ring-0 focus:border-none focus:outline-none' placeholder='Find a campaign' />
                    </div>
                    <div>
                        <button className='rounded py-2 px-5 border border-gray-400 text-center bg-white'>Filter</button>
                    </div>
                </div>

                <div className="mt-4 flex items-center space-x-1 bg-[#f3f3f3] text-[17px] hover:bg-[#D7DCE2] text-[#232F3F] font-[500] rounded-full px-3 py-1.5 cursor-default">
                    <span><MdCalendarMonth className='text-xl'/></span>
                    <span> Nov 27 - Dec 4, 2023</span>
                    <span><MdKeyboardArrowDown className='text-xl' /></span>
                </div>
            </div>
        </div>
    )
}

export default ResHome
