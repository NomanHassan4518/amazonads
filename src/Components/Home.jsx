import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Home = () => {
 
    const [selectedItems, setSelectedItems] = useState(['Line 1']);

    let value = ['0', '20', '40', '60', '80', '100',];
    let value1 = ['0', '2', '4', '6', '8', '10',];
    let value2 = ['0', '10', '20', '30', '40', '50',];
    let value3 = ['0', '0.5', '1', '1.5', '2', '2.5',];

    const handleItemClick = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const chartData = {
        series: [
            {
            name: 'Line 1',
            type: 'line',
            data: [56.15, 57.42, 55.19,56.60, 57.32, 57.05,56.85,60.05,57.81,58.31,57.45,59.01,57.67,57.47,57.86,59.31,57.20],

        }, 
            {
                name: 'Bar 1',
                type: 'bar',
                data: [4307, 3999, 4681, 4297, 7614,2983,3194,4876,4058,2464,4135,4328,980,6767,6852,3981,8413],
    
              },
        
        {
            name: 'Line 2',
            type: 'line',
            data: [34, 37, 34, 35, 36, 33, 35, 40, 49, 46, 40, 41,35,39,36,37,40],
           
        },
        
        {
            name: 'Line 3',
            type: 'line',
            data: [1.65, 1.55, 1.62, 1.62, 1.59, 1.73, 1.62, 1.50, 1.48, 1.59, 1.65, 1.44,1.44, 1.65, 1.45,1.61,1.60,1.43],

        },
        ],
        options: {
            chart: {
                id:'mixed-chart',
                toolbar: {
                    show: false, // Set to false to hide the toolbar
                },
            },
            colors: ['#2e8cb8','#dd7703','#a3317b','#587021'],
            stroke: {
                width: 2, // Set line width
            },
            xaxis: {
                categories:['Nov 01','Nov 02', 'Nov 03','Nov 04','Nov 05','Nov 06','Nov 07','Nov 08','Nov 09','Nov 10','Nov 11','Nov 12','Nov 13','Nov 14','Nov 15','Nov 16','Nov 17'],
                tickAmount:18
            },
            yaxis: [
                {
                    categories: value,
                    tickAmount: 6,

                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: '#2e8cb8',
                    },
                    labels: {
                        formatter: function (value) {
                            return '$' + value;
                        },
                        style: {
                            colors: '#2e8cb8',
                        },
                        title: {
                            text: 'Line 1',
                            style: {
                                color: '#2e8cb8',
                            },
                        },
                    }
                },
                {
                    categories: value1,
                    tickAmount: 6,
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
                            return 'K' + value1;
                        },
                        style: {
                            colors: '#dd7703',
                        },
                    },
                    title: {
                        text: 'Bar 1',
                        style: {
                            color: '#dd7703',
                        },
                    },
                },
                {
                    categories: value2,
                    tickAmount: 6,
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
                            return  value2;
                        },
                        style: {
                            colors: '#a3317b',
                        },
                    },
                    title: {
                        text: 'Line 2',
                        style: {
                            color: '#a3317b',
                        },
                    },
                },
                {
                    categories: value3,
                    tickAmount: 6,
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
                            return '$'+ value3.toFixed(2);
                        },
                        style: {
                            colors: '#587021',
                        },
                    },
                    title: {
                        text: 'Line 3',
                        style: {
                            color: '#587021',
                        },
                    },
                },
            ],

        },
    };

  const  filteredSeries = chartData.series.filter((item) => selectedItems.includes(item.name));


    return (
        <div className='pl-16 pt-24' >
            <div className='pb-3 border-b border-gray-200'>
                <p className='ml-4 mt-2  inline-block py-1 px-4 rounded-full text-white  bg-[#57677e]'>Country: Unites States</p>
            </div>

            <div className="grid grid-cols-12 gap-2 w-full  ">
                <div className='bg-[#fbfbfb] col-span-2 flex flex-col'>
                    <Link to="/" className='py-4 px-4 border-b border-gray-200'>Postfolios</Link>
                    <Link to="/" className='py-3 px-4  font-semibold '>Campaigns</Link>
                    <Link to="/" className='py-3 px-4  font-semibold  bg-[#e5e6e8] rounded mx-4'>Singal Country</Link>
                    <Link to="/" className='flex items-center justify-between px-4 pt-5 pb-2'>
                        <span className=' '>Multiple Countires</span>
                        <span className='text-white font-semibold bg-[#7b7e87] rounded p-0.5'>Beta</span>
                    </Link>
                    <Link to="/" className='flex items-center justify-between px-4 py-2'>
                        Darfts
                    </Link>
                    <Link to="/" className='flex items-center justify-between px-4 py-2 pb-5 border-b border-gray-200'>
                        <span className=' '>MBudgets</span>
                        <span className='text-white font-semibold bg-[#7b7e87] rounded p-0.5 '>Beta</span>
                    </Link>
                    <Link to="/" className='flex items-center justify-between px-4 py-2'>
                        Products
                    </Link> <Link to="/" className='flex items-center justify-between px-4 py-2'>
                        Targeting
                    </Link> <Link to="/" className='flex items-center justify-between px-4 py-2'>
                        Settings
                    </Link> <Link to="/" className='flex items-center justify-between px-4 py-2'>
                        Hsitory
                    </Link>
                </div>

                <div className=' col-span-10 border border-gray-300'>
                    <div className=' border-b border-gray-200 grid grid-cols-4'>

                        <div className={`hover:bg-gray-100 cursor-pointer ${selectedItems.includes('Line 1')?'border-t-4 border-[#2e8cb8]':'border-none'}`} onClick={()=>handleItemClick('Line 1')}>
                            <div className='border-r border-gray-200'>
                                <p className='flex items-center space-x-1  px-2'>
                                    <span>Spen</span>
                                    <span><MdOutlineKeyboardArrowDown /></span>
                                    <span><AiOutlineExclamationCircle /></span>
                                </p>
                                <p className='text-lg font-bold  pb-1 px-2'>$2,578.65</p>
                            </div>
                        </div>

                        <div className={`hover:bg-gray-100 cursor-pointer ${selectedItems.includes('Bar 1')?'border-t-4 border-[#dd7703]':'border-none'}`} onClick={()=>handleItemClick('Bar 1')}>
                            <div className='border-r border-gray-200'>
                                <p className='flex items-center space-x-1  px-2'>
                                    <span>Impressions</span>
                                    <span><MdOutlineKeyboardArrowDown /></span>
                                    <span><AiOutlineExclamationCircle /></span>
                                </p>
                                <p className='text-lg font-bold  pb-1 px-2'>217,670</p>
                            </div>
                        </div>

                        <div className={`hover:bg-gray-100 cursor-pointer ${selectedItems.includes('Line 2')?'border-t-4 border-[#a3317b]':'border-none'}`} onClick={()=>handleItemClick('Line 2')}>
                            <div className='border-r border-gray-200'>
                                <p className='flex items-center space-x-1  px-2'>
                                    <span>Clicks</span>
                                    <span><MdOutlineKeyboardArrowDown /></span>
                                    <span><AiOutlineExclamationCircle /></span>
                                </p>
                                <p className='text-lg font-bold  pb-1 px-2'>1,708</p>
                            </div>
                        </div>

                        <div className={`hover:bg-gray-100 cursor-pointer ${selectedItems.includes('Line 3')?'border-t-4 border-[#587021]':'border-none'}`} onClick={()=>handleItemClick('Line 3')}>
                            <div className=''>
                                <p className='flex items-center space-x-1  px-2'>
                                    <span>CPC</span>
                                    <span><MdOutlineKeyboardArrowDown /></span>
                                    <span><AiOutlineExclamationCircle /></span>
                                </p>
                                <p className='text-lg font-bold  pb-1 px-2'>$1.51</p>
                            </div>
                        </div>
                    </div>
                    <div className={` p-5 w-full h-full `}>
                      {
                        selectedItems.length===0?<div className='flex flex-col items-center justify-center w-full h-full'>
                            <h1 className='text-xl font-bold'>No data</h1>
                            <p>To see the chart, choose different metrics or filters</p>
                            </div>:  <ReactApexChart
                        options={chartData.options}
                        series={filteredSeries}
                        type="line"
                        height="400"

                    />
                      }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
