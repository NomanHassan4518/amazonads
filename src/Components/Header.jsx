import React, { useEffect, useRef, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import 'react-datepicker/dist/react-datepicker.css';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const Header = () => {
    const [clickedOutside, setClickedOutside] = useState(true);
    let [columns, setColumns] = useState(true)
    let [datepicker, setDatePickter] = useState(true)
    let [pickerOpen, setPickerOpen] = useState(false)
    dayjs.extend(customParseFormat);
    const { RangePicker } = DatePicker;
    const dateFormat = 'MM/DD';
    const myRef = useRef();
    const myRef1 = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setClickedOutside(true);
        }
    };

    const handleColumnOutside = e => {
        if (!myRef1.current.contains(e.target)) {
            setColumns(true);
        }
    };

    const handleClickInside = () => setClickedOutside(false);
    const handleClickColumn = () => setColumns(false);
    const handleClickDatePicker = () => {
        setDatePickter(false)
        setPickerOpen(true)
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, handleColumnOutside);
        document.addEventListener('mousedown', handleColumnOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside, handleColumnOutside,);
    });

    const closeCalender = () => {
        if (datepicker === false) {
            setDatePickter(true)
        }
    }
    return (


       <>
        <div className="py-3 px-3 mt-3 bg-[#f3f3f3] rounded border border-gray-200 flex items-center justify-between space-x-2 relative ">
            <button className='px-3 py-1.5 rounded-full bg-[#0073c7] text-[14px] text-white font-medium'>
            Create campaign
            </button>

            <div className="px-2 py-1 space-x-1 border border-gray-400 rounded bg-white flex items-center">
                <span><IoMdSearch /></span>
                <input type="search" className='focus:ring-0 focus:border-none focus:outline-none' placeholder='Find a campaign' />
            </div>

            <button ref={myRef} onClick={handleClickInside}>
                {clickedOutside ? <p className={`flex items-center space-x-1 text-[13px] hover:bg-[#D7DCE2] text-[#232F3F] font-[500] rounded-full px-3 py-1.5 cursor-default `}  >
                    <span>Filter by</span>
                    <span><MdKeyboardArrowDown className='text-xl' /></span>
                </p> :
                    <div className={` bg-white text-[14px] absolute -top-80 right-[22rem] w-72 rounded h-96 border border-gray-300 overflow-y-auto py-2 space-y-1 z-50`} >
                        <p className='font-medium px-3'>Filters</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Active Status</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Type</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Targeting</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Portfolio</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Budget</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Almost or out of budget</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Impressions</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Click</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Clickthrough rate (CTR)</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Spend</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Cost-per-click (CPC)</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Orders</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Sales</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Advertising cost of sales (ACOS)</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Return on ad spend (ROAS)</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>NTB orders</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>% of orders NTB</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>NTB sales</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>% of sales NTB</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>viewable impressions</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Cost per 1,000 viewable impression (VCMP)</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Detail page views</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Video first quartile</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Video midpoint</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Video third quartile</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Video complete</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>Video unmute</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>View-through rate (VTR)</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default'>View-through rate for views (vCTR)</p>
                        <p className='hover:bg-gray-300 px-3 cursor-default' >Cost per 1,000 impressions (CPM)</p>

                    </div >}
            </button>

            <div className='relative group'>
                <button className='flex items-center space-x-1 text-[#8292a7] cursor-default'><span>Bulk ation </span>
                    <span><MdKeyboardArrowDown className='text-xl' /></span>
                </button>
                <p className='bg-black text-white absolute -top-16 -right-[5rem]  invisible group-hover:visible px-5 py-3 w-[17rem] rounded'>Select row to enable bulk action</p>
            </div>

            <button ref={myRef1} onClick={handleClickColumn}>
                {columns ? <p className={`flex items-center space-x-1 text-[13px] hover:bg-[#D7DCE2] text-[#232F3F] font-[500] rounded-full px-3 py-1.5 cursor-default `} >
                    <span>Columns</span>
                    <span><MdKeyboardArrowDown className='text-xl' /></span>
                </p> :
                    <div className={` bg-white text-[14px] absolute -top-3 pt-1.5 pb-5 right-[19rem] w-40 rounded h-16 border border-gray-300`}>
                        <p className='bg-gray-300 px-2 py-1 border-l-4 border-blue-600'>Customize columns</p>
                        <p className='px-3 py-1'>Reset to default</p>
                    </div>}
            </button>

            <button  >
                {datepicker ? <p className={`flex items-center space-x-1 bg-[#f3f3f3] text-[13px] hover:bg-[#D7DCE2] text-[#232F3F] font-[500] rounded-full px-3 py-1.5 cursor-default `} onClick={handleClickDatePicker}>
                    <span>Date range:Nov 1 - Nov 20, 2023</span>
                    <span><MdKeyboardArrowDown className='text-xl' /></span>
                </p> :
                    <div className='bg-white text-[14px] absolute -top-[23rem] right-20 w-[47rem]  rounded border border-gray-300 ' >
                        <div className={`flex `} >
                            <div className=' border-r border-gray-400 w-40 space-y-3' >
                                <p className='hover:bg-gray-100 px-3 text-start cursor-default mt-2 '>Today</p>
                                <p className='hover:bg-gray-100 px-3 text-start cursor-default'>Yesterday</p>
                                <p className='hover:bg-gray-100 px-3 text-start cursor-default'>Last 7 days</p>
                                <p className='hover:bg-gray-100 px-3 text-start cursor-default'>This week</p>
                                <p className='hover:bg-gray-100 px-3 text-start cursor-default'>Last week</p>
                                <p className='hover:bg-gray-100 px-3 text-start cursor-default'>Last 30 days</p>
                                <p className='hover:bg-gray-100 px-3 text-start cursor-default'>This month</p>
                                <p className='hover:bg-gray-100 px-3 text-start cursor-default'>Last month</p>
                                <p className='hover:bg-gray-100 px-3 text-start cursor-default'>Year to date</p>
                                <p className='hover:bg-gray-100 px-3 text-start cursor-default'>Life time</p>
                                <p className=' text-[#5c687c] px-3 text-xs text-start  mt-3'>America/Los_Angeles</p>
                            </div>

                            <div >
                                <RangePicker
                                    open={pickerOpen}
                                    onOpenChange={(open) => setPickerOpen(open)}
                                    defaultValue={[dayjs('11/01', dateFormat), dayjs('11/30', dateFormat)]}
                                    format={dateFormat}
                                    allowClear={false}
                                    autoFocus={false}
                                    bordered={false}
                                    className='ml-5 mt-8'

                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-end pb-5 space-x-5 px-5'>
                            <button className='text-[#3a93d4] ' onClick={closeCalender}>Cancel</button>
                            <button className='py-1 px-5 rounded-full text-center text-white bg-blue-500'>Apply</button>
                        </div>
                    </div>}
            </button>

            <p className={` text-[13px]  hover:bg-[#D7DCE2] text-[#232F3F] font-[500] rounded-full px-3 py-1.5 cursor-default `}  >
                <span>Export</span>
            </p>

        </div>

        <div className='h-[12rem] overflow-y-auto'>

        </div>
       </>
    );
};

export default Header;