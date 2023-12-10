import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        if (menu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }

    const handleClickMenu = () => {
        if (menu === true) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }
    return (
        <div className='py-7 pl-4 pr-3 '>
            {
                menu ?
                    <div className='flex items-center justify-center flex-col w-[40px]  mb-72 '  onClick={handleClickMenu}>
                        <button  className='text-center text-gray-500'><IoMenu /></button>
                        <p className='mt-4 text-[#008296] ' style={{writingMode:'vertical-rl'}}>OPEN REPORTS MENU</p>
                    </div>
                    :

                    <div className=''>
                        <div className="flex items-center space-x-1 cursor-default" onClick={handleMenu}>
                            <button ><IoCloseOutline /></button>
                            <p className='uppercase text-[#008296]'>Close Reports Menu</p>
                        </div>
                        <div className='mt-4'>
                            <p className='bg-[#e3eced] px-3 py-0.5 mb-1'>Dashboards</p>
                            <Link to='/' className='mt-1 hover:underline font-semibold text-[14px] ml-5'>Sales Dashboard</Link>
                        </div>

                        <div className=''>
                            <p className='bg-[#e3eced] px-3 py-0.5 mb-2 mt-3'>Business Reports</p>
                            <p className='ml-2 mb-2'>By Date</p>
                            <div className="ml-5 text-[#008296] mb-2 space-y-3 flex flex-col">
                                <Link to='/' className=' hover:underline  text-[14px] ml-1'>Sales and Traffic</Link>
                                <Link to='/' className=' hover:underline  text-[14px] ml-1'>Detail Page Sales and Traffic</Link>
                                <Link to='/' className=' hover:underline  text-[14px] ml-1'>Seller Performance</Link>
                            </div>

                            <p className='ml-2 mt-2 mb-2'>By ASIN</p>
                            <div className="ml-5 text-[#008296] mb-2 space-y-3 flex flex-col">
                                <Link to='/' className=' hover:underline  text-[14px] ml-1'>Detail Page Sales and Traffic</Link>
                                <Link to='/' className=' hover:underline  text-[14px] ml-1'>Detail Page Sales and Traffic By Parent Item</Link>
                                <Link to='/' className=' hover:underline  text-[14px] ml-1'>Detail Page Sales and Traffic By Child Item</Link>
                                <Link to='/' className=' hover:underline  text-[14px] ml-1'>Brand Performance</Link>
                            </div>

                            <p className='ml-2 mt-2 mb-2'>Other</p>
                            <div className="ml-5 text-[#008296] mb-2 space-y-3 flex flex-col pr-3">
                                <Link to='/' className=' hover:underline  text-[14px] ml-1'>Sales and Orders by Month</Link>

                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Sidebar
