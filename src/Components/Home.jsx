import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Home = () => {
    let [spend, setSpend] = useState("block ")
    let [impre, setimpre] = useState("hidden ")
    let [click, setClick] = useState("hidden ")
    let [cpc, setCpc] = useState("hidden ")
    let value = ['$0', '$50', '$100', '$150', '$200', '$250',];
    const chartData = {
        series: [{
            name: 'Line 1',
            data: [55, 25, 55, 61, 55, 150, 55, 100, 45, 40, 35, 55]
        }, {
            name: 'Line 2',
            data: [99, 50, 100, 103, 220, 100, 150, 55, 40, 45, 50, 53]
        },
        {
            name: 'Line 3',
            data: [150, 155, 145, 148, 158, 160, 155, 151, 148, 159, 151, 155]
        },
        ],
        options: {
            chart: {
                type: 'line',
                toolbar: {
                    show: false, // Set to false to hide the toolbar
                },
            },
            xaxis: {
                categories: ['Oct 03', 'Oct 06', 'Oct 09', 'Oct 12', 'Oct 15', 'Oct 18', 'Oct 21', '0ct 24', 'Oct 27', 'Oct 30', 'Nov 02', 'Nov 05'],
            },
            yaxis: [
                {
                    categories: value,
                },
                {
                    tickAmount:10,

                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: '#008ffb',
                    },
                    labels: {
                        formatter: function (value) {
                            return '$' + value;
                        },
                        style: {
                            colors: '#008ffb',
                        },
                        title: {
                            text: 'Line Series 1',
                            style: {
                                color: '#008ffb',
                            },
                        },
                    }
                },
                {
                    tickAmount:10,
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#00E396',
                    },
                    labels: {
                        formatter: function (value) {
                            return '$' + value;
                        },
                        style: {
                            colors: '#00E396',
                        },
                    },
                    title: {
                        text: 'Line Series 2',
                        style: {
                            color: '#00E396',
                        },
                    },
                },
                {
                    tickAmount:10,
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#feb019',
                    },
                    labels: {
                        formatter: function (value) {
                            return '$' + value;
                        },
                        style: {
                            colors: '#feb019',
                        },
                    },
                    title: {
                        text: 'Line Series 3',
                        style: {
                            color: '#feb019',
                        },
                    },
                },
            ],

        },
    };

    const spendFunc = () => {
        setSpend("block")
        setimpre("hidden")
        setClick("hidden")
        setCpc("hidden")
    }

    const impreFunc = () => {
        setimpre("block")
        setSpend("hidden")
        setClick("hidden")
        setCpc("hidden")
    }

    const clickFuns = () => {
        setClick("block")
        setimpre("hidden")
        setSpend("hidden")
        setCpc("hidden")
    }

    const cpcfunc = () => {
        setCpc("block")
        setimpre("hidden")
        setSpend("hidden")
        setClick("hidden")
    }
    return (
        <div className='pl-16 pt-24' >
            <div className='pb-3 border-b border-gray-200'>
                <p className='ml-4 mt-2  inline-block py-2 px-4 rounded-full text-white font-semibold bg-[#57677e]'>Country: Unites States</p>
            </div>

            <div className="grid grid-cols-12 gap-2 w-full  ">
                <div className='bg-[#fbfbfb] col-span-2 flex flex-col'>
                    <Link to="/" className='py-7 px-4 border-b border-gray-200'>Postfolios</Link>
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

                        <div className='border-t-4 border-green-700' onClick={spendFunc}>
                            <div className='border-r border-gray-200'>
                                <p className='flex items-center space-x-1 text-lg px-2'>
                                    <span>Spen</span>
                                    <span><MdOutlineKeyboardArrowDown /></span>
                                    <span><AiOutlineExclamationCircle /></span>
                                </p>
                                <p className='text-xl font-bold mt-1 pb-4 px-2'>$2,578.65</p>
                            </div>
                        </div>

                        <div className='' onClick={impreFunc}>
                            <div className='border-r border-gray-200'>
                                <p className='flex items-center space-x-1 text-lg px-2'>
                                    <span>Impressions</span>
                                    <span><MdOutlineKeyboardArrowDown /></span>
                                    <span><AiOutlineExclamationCircle /></span>
                                </p>
                                <p className='text-xl font-bold mt-1 pb-4 px-2'>217,670</p>
                            </div>
                        </div>

                        <div className=' ' onClick={clickFuns}>
                            <div className='border-r border-gray-200'>
                                <p className='flex items-center space-x-1 text-lg px-2'>
                                    <span>Clicks</span>
                                    <span><MdOutlineKeyboardArrowDown /></span>
                                    <span><AiOutlineExclamationCircle /></span>
                                </p>
                                <p className='text-xl font-bold mt-1 pb-4 px-2'>1,708</p>
                            </div>
                        </div>

                        <div className=' ' onClick={cpcfunc}>
                            <div className=''>
                                <p className='flex items-center space-x-1 text-lg px-2'>
                                    <span>CPC</span>
                                    <span><MdOutlineKeyboardArrowDown /></span>
                                    <span><AiOutlineExclamationCircle /></span>
                                </p>
                                <p className='text-xl font-bold mt-1 pb-4 px-2'>$1.51</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${spend} p-5 `}>
                        <ReactApexChart
                            options={chartData.options}
                            series={chartData.series}
                            type="line"
                            height="400"

                        />
                    </div>

                    <div className={`${impre}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque nemo facilis. Quisquam repellendus, voluptate laboriosam, esse praesentium exercitationem consectetur quo illo quod itaque eligendi, optio consequatur voluptatibus harum voluptas?
                    </div>

                    <div className={`${click}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque nemo facilis. Quisquam repellendus, voluptate laboriosam, esse praesentium exercitationem consectetur quo illo quod itaque eligendi, optio consequatur voluptatibus harum voluptas?
                    </div>

                    <div className={`${cpc}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque nemo facilis. Quisquam repellendus, voluptate laboriosam, esse praesentium exercitationem consectetur quo illo quod itaque eligendi, optio consequatur voluptatibus harum voluptas?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
