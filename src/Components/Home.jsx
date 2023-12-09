import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import ResHome from './ResHome';
import Header from './Header';



const Home = () => {
    const [selectedItems, setSelectedItems] = useState(['Line 1']);
   

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
                                selectedItems.length === 0 ? <div className='flex flex-col items-center justify-center w-full  h-[23rem]'>
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

<div>
    <Header/>
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
