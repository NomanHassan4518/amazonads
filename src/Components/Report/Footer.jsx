import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
    return (
        <div className='border-t border-gray-400 pt-3 pb-10 px-5 text-[13px] flex items-center justify-between'>
            <div className='flex items-center space-x-3 cursor-default'>
                <p className='hover:underline pr-4 border-r border-gray-400'>Help</p>
                <p className='hover:underline pr-4 border-r border-gray-400'> Program Policies</p>
                <div className='pr-4 border-r border-gray-400'>
                <p className='border border-gray-400 flex items-center space-x-5 py-0.5 px-3 hover:border-[#FF8F00] pr-4 border-r '>
                    <span>English</span>
                    <span><MdKeyboardArrowDown className='text-lg'/></span>
                </p>
                </div>

                <div className="flex items-center space-x-3">
                    <img src="https://m.media-amazon.com/images/I/01G4HDYwzrL.png" className='w-[32px] h-[32px]' alt="" />
                    <p className='hover:underline'>Download the Amazon Seller mobile app</p>
                </div>
            </div>
            <div className='text-gray-400 text-[15px]'>
© 1999-2023, Amazon.com, Inc. or its affiliates</div>
        </div>
    )
}

export default Footer
