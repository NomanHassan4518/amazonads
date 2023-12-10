import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Sales from './Sales'
import { IoCloseOutline } from "react-icons/io5";
import Footer from './Footer';

const Report = () => {
    return (
        <div className='h-full relative'>

            <p className='fixed left-4 bottom-4 bg-[#008296] text-white py-1 px-1 rounded text-[13px] flex items-center space-x-1 uppercase'>
                <span>Feedback</span>
                <span>< IoCloseOutline/></span>
            </p>
            <Navbar />

            <div className="w-full flex gap-5">
                <div className='  bg-[#fafafa]'>
                    <Sidebar />
                </div>
                <div className='w-full py-7'>
                    <Sales />
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Report
