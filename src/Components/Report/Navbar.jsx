import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdSearch, IoMdMail, IoMdSettings } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className='bg-[#002f36] '>
            <div className='flex items-center justify-between   px-3 border-b border-gray-400'>
                <div className='flex items-center space-x-4 '>
                    <p className='border-r border-r-gray-400 py-3 pr-5'><IoMenu className='text-white text-2xl' /></p>
                    <div className='pr-5 border-r border-gray-400'>
                        <img src="https://m.media-amazon.com/images/I/31MWTU1kYsL.svg" className='w-[159px] h-[28px]' alt="" />
                    </div>
                    <div className="flex space-x-1 ml-12 bg-white py-1 px-2 rounded text-[13px]">
                        <span className='font-bold'>Krewe Home Interior </span>
                        <span> | United States</span>
                    </div>
                </div>

                <div className='flex items-center w-[31%] py-2'>
                    <input type="search" className='bg-[#006170] w-[85%] px-3 py-1 placeholder:text-white' placeholder='Search' />
                    <p className='bg-[#008296] hover:bg-[#047c8f] p-1'><IoMdSearch className='text-2xl text-white' /></p>
                </div>

                <div className='flex items-center text-white space-x-5'>
                    <p><IoMdMail className='text-xl' /></p>
                    <p><IoMdSettings className='text-xl' /></p>
                    <div className="flex items-center space-x-1">
                        <p>EN</p>
                        <p><RiArrowDownSFill /></p>
                    </div>
                    <p>Help</p>
                </div>
            </div>

            <div className='bg-[#002f36] flex items-center justify-between px-3'>
                <div className=' py-3 flex items-center space-x-9'>
                    <div className='ml-1'>
                        <img src="https://m.media-amazon.com/images/I/01Upxfn7CQL.svg" className='w-[14px] h-[14px]' style={{ filter: `invert(100%)` }} alt="" />
                    </div>
                    <div className="flex items-center space-x-4 text-white text-[15px]">
                        <p className='hover:underline'>Add Products</p>
                        <p className='hover:underline'>Performance Notifications</p>
                        <p className='hover:underline'>Manage All Inventory</p>
                    </div>
                </div>

                <p className='border border-[#667575] hover:border-white text-white text-[13px] py-0.5 px-3'>Edit</p>
            </div>
        </div>
    )
}

export default Navbar
