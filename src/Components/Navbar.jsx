import React from 'react'
import { BsCalendar4Event } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import { TfiWorld } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BiBookmarkHeart,BiSignal4 } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' fixed'>
            <div className='flex  justify-between items-center space-x-5 p-4 bg-[#222f3e]  border-b-4 border-[#f35f19] text-white' >
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
                    <p><TfiWorld  className='text-[#6e7b8c] text-2xl'/></p>
                    <h1>
                        <p className=' font-semibold'>Krewe home interior</p>
                        <p className=' text-[#8ca2b2]'>Sponsored ads, United States</p>
                    </h1>
                </div>
               
          

                <div className='text-2xl'><IoIosNotifications /></div>
                <div className='text-2xl'><AiOutlineQuestionCircle/></div>
                <div className='text-2xl'><MdAccountCircle/></div>
        </div>

        <aside className='fixed p-4 left-0 top-0 mt-24 z-50  shadow-lg flex flex-col bg-[#fbfbfb] '>
            <Link to="/" className='pb-9  border-b border-gray-300'><CgMenuGridR className='text-3xl'/></Link>

            <Link to="/" className='pb-9 border-b border-gray-300 mt-7'><BsCalendar4Event className='text-2xl text-[#f35f19]'/></Link>
            

            <Link to="/" className='pb-5  mt-7'><BiBookmarkHeart className='text-2xl '/></Link>

            <Link to="/" className='pb-5  mt-7'><TiMessages className='text-2xl '/></Link>

            <Link to="/" className='pb-5  mt-2'><BsGraphUpArrow className='text-2xl '/></Link>

            <Link to="/" className='pb-5  mt-2'><BiSignal4 className='text-2xl '/></Link>

            <Link to="/" className='pb-5  mt-2'><CgMenuGridR className='text-2xl '/></Link>

            <Link to="/" className='pb-5  mt-10'><IoSettingsOutline className='text-2xl '/></Link>

        </aside>
        </div>
    )
}

export default Navbar
