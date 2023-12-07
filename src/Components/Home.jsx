import React, { useState, useEffect, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import ResHome from './ResHome';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


const Home = () => {
    const [selectedItems, setSelectedItems] = useState(['Line 1']);
    let [filter, setFilter] = useState('hidden')
    let [columns, setColumns] = useState('hidden')
    let [pickerOpen, setPickerOpen] = useState(false)
    dayjs.extend(customParseFormat);
    const { RangePicker } = DatePicker;
    const dateFormat = 'MM/DD';

    const handleOpenPicker = () => {
        setPickerOpen(!pickerOpen)
    }

    const handleDateChange = (date, dateString) => {
        // Handle the selected date here
        console.log('Selected Date:', dateString);
        // You can add additional logic or state updates based on the selected date
      };


    let value = ['0', '20', '40', '60', '80', '100',];
    let value1 = ['0', '2', '4', '6', '8', '10',];
    let value2 = ['0', '10', '20', '30', '40', '50',];
    let value3 = ['0', '0.5', '1', '1.5', '2', '2.5',];

    const handleItemClick = (item) => {
        if (selectedItems.includes(item) === false) {
            setSelectedItems([...selectedItems, item]);

        } else {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));

        }

    };

    const buttonRef = useRef();

    // Event listener to handle clicks outside the button
    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            // Clicked outside the button, hide the paragraph
            setFilter('hidden');
            setColumns('hidden');
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener('click', handleClickOutside);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []); //

    let filterFunc = () => {
        setFilter('block')
    }

    let columnsFunc = () => {
        setColumns('block')
    }



    const chartData = {
        series: [
            {
                name: 'Line 1',
                type: 'line',
                data: [56.15, 57.42, 55.19, 56.60, 57.32, 57.05, 56.85, 60.05, 57.81, 58.31, 57.45, 59.01, 57.67, 57.47, 57.86, 59.31, 57.20],

            },
            {
                name: 'Bar 1',
                type: 'bar',
                data: [4307, 3999, 4681, 4297, 7614, 2983, 3194, 4876, 4058, 2464, 4135, 4328, 980, 6767, 6852, 3981, 8413],

            },

            {
                name: 'Line 2',
                type: 'line',
                data: [34, 37, 34, 35, 36, 33, 35, 40, 49, 46, 40, 41, 35, 39, 36, 37, 40],

            },

            {
                name: 'Line 3',
                type: 'line',
                data: [1.65, 1.55, 1.62, 1.62, 1.59, 1.73, 1.62, 1.50, 1.48, 1.59, 1.65, 1.44, 1.44, 1.65, 1.45, 1.61, 1.60, 1.43],

            },
        ],
        options: {
            chart: {
                id: 'mixed-chart',
                toolbar: {
                    show: false, // Set to false to hide the toolbar
                },
            },
            colors: ['#2e8cb8', '#dd7703', '#a3317b', '#587021'],
            stroke: {
                width: 2, // Set line width
            },
            xaxis: {
                categories: ['Nov 01', 'Nov 02', 'Nov 03', 'Nov 04', 'Nov 05', 'Nov 06', 'Nov 07', 'Nov 08', 'Nov 09', 'Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17'],
                tickAmount: 18
            },
            yaxis: [
                {
                    categories: value,
                    show: selectedItems.includes('Line 1') ? true : false,
                    // tickAmount: 5,

                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: '#2e8cb8',
                    },
                    labels: {
                        formatter: (value) => { return '$' + value },
                        style: {
                            colors: '#2e8cb8',
                        },

                    }
                },
                {
                    categories: value1,
                    show: selectedItems.includes('Bar 1') ? true : false,
                    // tickAmount: 6,
                    opposite: false,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#dd7703',
                    },
                    labels: {
                        formatter: function (value1) {
                            return + value1.toFixed(2);
                        },
                        style: {
                            colors: '#dd7703',
                        },
                    },

                },
                {
                    categories: value2,
                    show: selectedItems.includes('Line 2') ? true : false,
                    // tickAmount: 6,
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#a3317b',
                    },
                    labels: {
                        formatter: function (value2) {
                            return value2.toFixed(2);
                        },
                        style: {
                            colors: '#a3317b',
                        },
                    },

                },
                {
                    categories: value3,
                    show: selectedItems.includes('Line 3') ? true : false,
                    // tickAmount: 6,
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#587021',
                    },
                    labels: {
                        formatter: function (value3) {
                            return '$' + value3.toFixed(2);
                        },
                        style: {
                            colors: '#587021',
                        },
                    },

                },
            ],

        },
    };

    const filteredSeries = chartData.series.filter((item) => selectedItems.includes(item.name));


    return (
        <div className='lg:pl-16 lg:pt-24 h-full' >
            <div className='pb-2 border-b border-gray-200 lg:bg-[#fbfbfc] bg-[#fbfbfc]'>
                <p className='ml-4   inline-block lg:py-1 py-2 px-4 rounded-full text-white  bg-[#57677e] hover:shadow-lg cursor-pointer '>Country: United States</p>
            </div>

            <div className="lg:grid hidden grid-cols-12 gap-2 w-full h-full  " >

                <div className='bg-[#fbfbfb] lg:col-span-2 col-span-12 lg:flex hidden text-[13px] w-full h-[31rem] flex-col'>
                    <div className='py-3 px-4 border-b border-gray-200 w-full'>
                        <div className='rounded py-2  px-3 hover:bg-gray-200'>
                            <Link to="/" className='w-32  text-[15px]'>Portfolios</Link>
                        </div>
                    </div>
                    <Link to="/" className='py-3 px-4  font-semibold '>Campaigns</Link>
                    <Link to="/" className='rounded py-2 px-4 mt-3  font-semibold  bg-[#e5e6e8]  mx-4'>Single Country</Link>
                    <Link to="/" className='flex items-center justify-between px-4 mt-3 py-2 pb-2 hover:bg-gray-200'>
                        <span className=' '>Multiple Countires</span>
                        <span className='text-white text-xs  bg-[#767676] rounded px-1'>Beta</span>
                    </Link>
                    <Link to="/" className='flex items-center justify-between mt-3 px-4 py-2 hover:bg-gray-200'>
                        Drafts
                    </Link>
                    <Link to="/" className='flex items-center justify-between px-4 pb-4 py-2 border-b border-gray-200 hover:bg-gray-200 mt-3'>
                        <span className=' '>Budgets</span>
                        <span className='text-white text-sm  bg-[#767676] rounded px-1 '>Beta</span>
                    </Link>
                    <Link to="/" className='flex items-center justify-between mt-2 px-4 py-2 hover:bg-gray-200'>
                        Products
                    </Link> <Link to="/" className='flex items-center justify-between mt-2 px-4 py-2 hover:bg-gray-200'>
                        Targeting
                    </Link> <Link to="/" className='flex items-center justify-between mt-2 px-4 py-2 hover:bg-gray-200'>
                        Settings
                    </Link> <Link to="/" className='flex items-center justify-between mt-2 px-4 py-2 hover:bg-gray-200'>
                        Hsitory
                    </Link>
                </div>

                <div className=' lg:col-span-10 col-span-12 px-4 pt-2 '>
                    <div className='border border-gray-300'>
                        <div className=' border-b border-gray-200 grid grid-cols-4'>

                            <div className={`hover:bg-gray-100 cursor-pointer ${selectedItems.includes('Line 1') ? 'border-t-2 border-[#2e8cb8]' : 'border-none'}`} onClick={() => handleItemClick('Line 1')}>
                                <div className='border-r border-gray-200'>
                                    <p className='flex items-center space-x-1 text-[14px] px-2'>
                                        <span>Spend</span>
                                        <span><MdOutlineKeyboardArrowDown /></span>
                                        <span><AiOutlineExclamationCircle /></span>
                                    </p>
                                    <p className='text-[15px] font-bold  pb-1 px-2'>$2,578.65</p>
                                </div>
                            </div>

                            <div className={`hover:bg-gray-100 cursor-pointer ${selectedItems.includes('Bar 1') ? 'border-t-2 border-[#dd7703]' : 'border-none'}`} onClick={() => handleItemClick('Bar 1')}>
                                <div className='border-r border-gray-200'>
                                    <p className='flex items-center space-x-1 text-[14px]  px-2'>
                                        <span>Impressions</span>
                                        <span><MdOutlineKeyboardArrowDown /></span>
                                        <span><AiOutlineExclamationCircle /></span>
                                    </p>
                                    <p className='text-[15px] font-bold  pb-1 px-2'>217,670</p>
                                </div>
                            </div>

                            <div className={`hover:bg-gray-100 cursor-pointer ${selectedItems.includes('Line 2') ? 'border-t-2 border-[#a3317b]' : 'border-none'}`} onClick={() => handleItemClick('Line 2')}>
                                <div className='border-r border-gray-200'>
                                    <p className='flex items-center space-x-1 text-[14px]  px-2'>
                                        <span>Clicks</span>
                                        <span><MdOutlineKeyboardArrowDown /></span>
                                        <span><AiOutlineExclamationCircle /></span>
                                    </p>
                                    <p className='text-[15px] font-bold  pb-1 px-2'>1,708</p>
                                </div>
                            </div>

                            <div className={`hover:bg-gray-100 cursor-pointer ${selectedItems.includes('Line 3') ? 'border-t-2 border-[#587021]' : 'border-none'}`} onClick={() => handleItemClick('Line 3')}>
                                <div className=''>
                                    <p className='flex items-center space-x-1 text-[14px]  px-2'>
                                        <span>CPC</span>
                                        <span><MdOutlineKeyboardArrowDown /></span>
                                        <span><AiOutlineExclamationCircle /></span>
                                    </p>
                                    <p className='text-[15px]font-bold  pb-1 px-2'>$1.51</p>
                                </div>
                            </div>
                        </div>
                        <div className={` px-5 w-full ${selectedItems.length === 0 ? 'h-full' : ''} `}>
                            {
                                selectedItems.length === 0 ? <div className='flex flex-col items-center justify-center w-full h-full'>
                                    <h1 className='text-xl font-bold'>No data</h1>
                                    <p>To see the chart, choose different metrics or filters</p>
                                </div> : <ReactApexChart
                                    options={chartData.options}
                                    series={filteredSeries}
                                    type="line"
                                    height="370"

                                />
                            }
                        </div>
                    </div>


                    <div className="p-3 mt-3 bg-[#f3f3f3] rounded border border-gray-200 flex items-center space-x-2 relative ">
                        <button className='px-3 py-1.5 rounded-full bg-blue-600 text-[14px] text-white font-medium'>
                            Create campaign
                        </button>

                        <div className="px-2 py-1 space-x-1 border border-gray-400 rounded bg-white flex items-center">
                            <span><IoMdSearch /></span>
                            <input type="search" className='focus:ring-0 focus:border-none focus:outline-none' placeholder='Find a campaign' />
                        </div>

                        <p className={`flex items-center space-x-1 text-[13px] hover:bg-[#D7DCE2] text-[#232F3F] font-[500] rounded-full px-3 py-1.5 cursor-default `} onClick={filterFunc} ref={buttonRef}>
                            <span>Filter by</span>
                            <span><MdKeyboardArrowDown className='text-xl' /></span>
                        </p>

                        <div className={`${filter} bg-white text-[14px] absolute -top-72 right-[22rem] w-72 rounded h-96 border border-gray-300 overflow-y-auto py-2 space-y-1`} >
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
                            <p className='hover:bg-gray-300 px-3 cursor-default'>Cost per 1,000 impressions (CPM)</p>

                        </div>

                        <div className='relative group'>
                            <button className='flex items-center space-x-1 text-[#8292a7] cursor-default'><span>Bulk ation </span>
                                <span><MdKeyboardArrowDown className='text-xl' /></span>
                            </button>
                            <p className='bg-black text-white absolute -top-16 -right-[5rem]  invisible group-hover:visible px-5 py-3 w-[17rem] rounded'>Select row to enable bulk action</p>
                        </div>


                        <p className={`flex items-center space-x-1 text-[13px] hover:bg-[#D7DCE2] text-[#232F3F] font-[500] rounded-full px-3 py-1.5 cursor-default `} onClick={columnsFunc} ref={buttonRef}>
                            <span>Columns</span>
                            <span><MdKeyboardArrowDown className='text-xl' /></span>
                        </p>

                        <div className={`${columns} bg-white text-[14px] absolute top-3 pt-1.5 pb-5 right-[19rem] w-40 rounded h-16 border border-gray-300`}>
                            <p className='bg-gray-300 px-2 py-1 border-l-4 border-blue-600'>Customize columns</p>
                            <p className='px-3 py-1'>Reset to default</p>
                        </div>



                        <p className={`flex items-center space-x-1 text-[13px] hover:bg-[#D7DCE2] text-[#232F3F] font-[500] rounded-full px-3 py-1.5 cursor-default `} onClick={handleOpenPicker}>
                            <span>Date range: Nov 27 - Dec 4, 2023</span>
                            <span><MdKeyboardArrowDown className='text-xl' /></span>
                        </p>

                        {/* <div className={`${filter} bg-white text-[14px] absolute -top-72 right-[22rem] w-72 rounded h-96 border border-gray-300 overflow-y-auto py-2 space-y-1`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati deserunt, tenetur ab molestiae nulla odio sed praesentium ipsum quae fugit voluptatem esse expedita id eaque, magni culpa magnam rem.
                        </div> */}

                        <p className={`flex items-center space-x-1 text-[13px] hover:bg-[#D7DCE2] text-[#232F3F] font-[500] rounded-full px-3 py-1.5 cursor-default `}  ref={buttonRef}>
                            <span>Export</span>
                        </p>

                        <div>
                            <DatePicker
                                open={pickerOpen}
                                onOpenChange={(open) => setPickerOpen(open)}
                                onChange={handleDateChange}
                                // style={{ position: 'absolute', top: '40px', left: '0' }}
                            />
                        </div>

                    </div>

                    <div className='h-[20rem] mt-12'>
                        {/* <RangePicker
                            open={pickerOpen}
                            onOpenChange={(open) => setPickerOpen(open)}
                            defaultValue={[dayjs('11/27', dateFormat), dayjs('12/04', dateFormat)]}
                            format={dateFormat}
                            allowClear={false}
                            autoFocus={false}
                            bordered={false}
                            hoverBg='red'
                        /> */}
                    </div>
                </div>


            </div>

            <div className="lg:hidden block">
                <ResHome />
            </div>
        </div>
    )
}

export default Home
