import React, { useState } from 'react'
import { BsCalendar4Event } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import { TfiWorld } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BiBookmarkHeart, BiSignal4 } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardArrowDown,MdKeyboardArrowUp  } from "react-icons/md";
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false)
    let [dropDown, setDropDown] = useState('block')

    const dropButton = () => {
        if (dropDown === 'block') {
            setDropDown('hidden')
        } else {
            setDropDown('block')
        }
    }

    const drawerOpen = () => {
        setIsOpen(true)
    }

    const drawerClose = () => {
        setIsOpen(false)
    }

    const drawerStyle = {
        background: '#232f3f', // Set your desired background color
    };


    let title = <img className='h-10 ml-5 ' src='https://m.media-amazon.com/images/G/01/AdProductsMarketing/A20m/amazon_ads_logo._TTW_.png' alt=''></img>

    return (
        <>
            <div className=' fixed w-full'>
                <div className='lg:flex hidden  justify-between items-center space-x-5 p-4 bg-[#222f3e]  border-b-4 border-[#f35f19] text-white' >
                    <div className='flex items-center space-x-5'>
                        <div className='w-[20%] pr-5 border-r border-black'>
                            <img src="https://m.media-amazon.com/images/G/01/AdProductsMarketing/A20m/amazon_ads_logo._TTW_.png" alt="" />
                        </div>
                        <div className="flex items-center space-x-5">
                            <p><BsCalendar4Event className='text-[#f35f19]' /></p>
                            <div>
                                <p className='text-lg font-[400] '>Sponsored ads</p>
                                <p className='text-lg font-bold'>Campaign manages</p>
                            </div>
                            <p><VscHome className='text-[#667183] text-[20px] ' /></p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-2 bg-[#343f52] rounded-full py-1 px-5 w-[25rem]'>
                        <p><TfiWorld className='text-[#6e7b8c] text-2xl' /></p>
                        <h1>
                            <p className=' font-semibold'>Krewe home interior</p>
                            <p className=' text-[#8ca2b2]'>Sponsored ads, United States</p>
                        </h1>
                    </div>

                    <div className='text-2xl'><IoIosNotifications /></div>
                    <div className='text-2xl'><AiOutlineQuestionCircle /></div>
                    <div className='text-2xl'><MdAccountCircle /></div>
                </div>

                <aside className='fixed lg:flex hidden p-4 left-0 top-0 mt-24 z-50  shadow-lg  flex-col bg-[#fbfbfb] '>
                    <Link to="/" className='pb-9  border-b border-gray-300'><CgMenuGridR className='text-3xl' /></Link>

                    <Link to="/" className='pb-9 border-b border-gray-300 mt-7'><BsCalendar4Event className='text-2xl text-[#f35f19]' /></Link>


                    <Link to="/" className='pb-5  mt-7'><BiBookmarkHeart className='text-2xl ' /></Link>

                    <Link to="/" className='pb-5  mt-7'><TiMessages className='text-2xl ' /></Link>

                    <Link to="/" className='pb-5  mt-2'><BsGraphUpArrow className='text-2xl ' /></Link>

                    <Link to="/" className='pb-5  mt-2'><BiSignal4 className='text-2xl ' /></Link>

                    <Link to="/" className='pb-5  mt-2'><CgMenuGridR className='text-2xl ' /></Link>

                    <Link to="/" className='pb-5  mt-10'><IoSettingsOutline className='text-2xl ' /></Link>

                </aside>

                <div className='p-4 lg:hidden block bg-[#222f3e] text-white w-full'>
                    <div className="flex space-x-1 w-full justify-between items-center">
                        <div className='flex space-x-5 items-center'>
                            <span className='text-2xl' onClick={drawerOpen}><IoMdMenu /></span>
                            <span className=' font-bold leading-none'>Campaign <br /> manager </span>
                        </div>
                        <ul className="flex space-x-7">
                            <li className='text-2xl'><VscHome /></li>
                            <li className='text-2xl'><IoIosNotifications /></li>
                            <li className='text-2xl'><AiOutlineQuestionCircle /></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="lg:hidden block bg-[#222f3e] p-4 text-white pt-20">
                <div className='flex items-center space-x-2 bg-[#343f52] rounded-full py-1 px-5 w-'>
                    <p><TfiWorld className='text-[#6e7b8c] text-2xl' /></p>
                    <h1>
                        <p className=' font-semibold'>Krewe home interior</p>
                        <p className=' text-[#8ca2b2]'>Sponsored ads, United States</p>
                    </h1>
                </div>
            </div>

            <Drawer
                title={title}
                open={isOpen}
                onClose={drawerClose}
                placement='left'
                width={300}
                // visible={visible}
                style={drawerStyle}
            >
                <div className='text-lg font-medium text-white'>
                    <ul className=' pb-6 border-b-2 border-[#354152] '>
                        <li >
                            <Link to='/' className="flex items-center space-x-4">
                                <img src="https://m.media-amazon.com/images/G/01/CCX/svg/Opportunities-light._CB666234460_.svg" alt="" />
                                <p className='underline'>Opportunities</p>
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-3 bg-[#354152] p-2 rounded" onClick={dropButton }>
                        <div className='flex relative space-x-3 items-center  '>
                            <img src="https://m.media-amazon.com/images/G/01/CCX/svg/SponsoredAds-light._CB645423389_.svg" alt="" />
                            <p>Sponsored ads</p>

                            <p className='text-3xl absolute right-3'>{dropDown==='block'?<MdKeyboardArrowUp /> :<MdKeyboardArrowDown /> }</p>

                        </div>

                        <div className="mt-2 bg-[#5c687c] p-2 underline rounded ">
                            Campaign manager 
                        </div>
                    </div>

                </div>
            </Drawer>
        </>
    )
}

export default Navbar
