import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const Sales = () => {
    const [selectedItems, setSelectedItems] = useState(['Yesterday','Same day last week','Same day last year']);
    const [selectedItems1, setSelectedItems1] = useState(['Yesterday','Same day last week','Same day last year']);
    const [yesterday, setYesterday] = useState(true)
    const [lastWeek, setLastWeek] = useState(true)
    const [lastWeek1, setLastWeek1] = useState(true)
    const [today, setToday] = useState(true)
    const handleChart = (item) => {
        if (selectedItems.includes(item) === false) {
            setSelectedItems([...selectedItems, item]);
            setSelectedItems1([...selectedItems, item]);

        } else {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
            setSelectedItems1(selectedItems.filter((selectedItem) => selectedItem !== item));
        }

    }

    const handleTodayCHange=()=>{
        setYesterday(!yesterday)

    }

    const hanldeLastWeekCHange=()=>{
        setLastWeek(!lastWeek)

    }

    const hanldeLastWeekCHange1=()=>{
        setLastWeek1(!lastWeek1)

    }

    const handleTodayChange=()=>{
        setToday(!today)

    }


    let chart1Data = {
        series: [
            {
                name: 'Yesterday',
                type: 'line',
                data: [0, 0, 0, 0,0,0,0,2,2,2,3,4,2,5,1,4,1,1,1,0,1,1,0],

            },
            {
                name: 'Same day last week',
                type: 'line',
                data: [0, 0, 0, 0,2,1,1,2,4,2,1,1,5,2,0,0,3,2,3,2,0,2,0],

            },
            {
                name: 'Same day last year',
                type: 'line',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],

            },
        ],

        options: {
            chart: {
                id: 'mixed-chart',
                toolbar: {
                    show: false, // Set to false to hide the toolbar
                },
              
            },
            colors:['#e02d00','#FF8F00','#6b7280'],
            stroke: {
                width: 2, // Set line width
            },
            xaxis: {
                categories: ['12AM', '','2AM','', '4AM','', '6AM', '','8AM', '','10AM', '','12PM', '','2PM','', '4PM','', '6PM','', '8PM','', '10PM'],
                labels: {
                    rotate: -45,
                },
            },
            legend: {
                show: false,
              },
            yaxis: {
                categories: [0, 2, 4, 6],
                labels: {
                    rotate: -45,

                },
                title: {
                    text: 'Units orders',
                    style: {
                        fontWeight: 'light',
                        fontSize: "14px", 
                    }
                }
            },

        },


    }

    let chart2Data = {
        series: [
            {
                name: 'Yesterday',
                type: 'line',
                data: [0, 0, 0, 0,0,0,0,79.98,79.98,75.98,113.97,151.96,75.98,185.95,37.99,151.96,37.99,37.99,37.99,0,37.99,37.99,0],

            },
            {
                name: 'Same day last week',
                type: 'line',
                data: [0, 0, 0, 0,66,33,33,67,132,67,33,33,165,67,0,0,99,67,99,67,0,67,0],

            },
            {
                name: 'Same day last year',
                type: 'line',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],

            },
        ],

        options: {
            chart: {
                id: 'mixed-chart',
                toolbar: {
                    show: false, // Set to false to hide the toolbar
                },
            },
            colors:['#e02d00','#FF8F00','#6b7280'],
            stroke: {
                width: 2, // Set line width
            },
            xaxis: {
                categories: ['12AM', '','2AM','', '4AM','', '6AM', '','8AM', '','10AM', '','12PM', '','2PM','', '4PM','', '6PM','', '8PM','', '10PM'],
                labels: {
                    rotate: -45,
                },
            },
            legend: {
                show: false,
              },
            yaxis: {
                categories: [0, 50, 100, 150,200],
                labels: {
                    formatter: function (value1) {
                        return + value1.toFixed(0);
                    },
                    rotate: -45,

                },
                title: {
                    text: 'Ordered product sales',
                    style: {
                        fontWeight: 'light',
                        fontSize: "14px", 
                    }
                }
            },

        },


    }

    const chart1Series = chart1Data.series.filter((item) => selectedItems.includes(item.name))
    const chart2Series = chart2Data.series.filter((item) => selectedItems1.includes(item.name))
    return (
        <div className='border border-gray-400 py-2 px-4  bg-[#f5f9fa] cursor-default'>
            <div className="flex items-center justify-between">
                <p className='text-[20px] font-bold'>Compare Sales</p>

                <div className="flex items-center">
                    <button className='px-4 py-1.5 border border-[#008296] text-white bg-[#008296]'>Graph view</button>
                    <button className='px-4 py-1.5  border border-gray-400 hover:bg-gray-300'>Table view</button>
                </div>
            </div>

            <div className="mt-4 bg-white border gap-3 border-gray-400 grid grid-cols-2">
                <div className='pr-5 pl-4 border-r border-gray-300'>
                    <ReactApexChart
                        options={chart1Data.options}
                        series={chart1Series}
                        type="line"
                        height="280"

                    />
                </div>
                <div className=' pl-4 '>
                    <ReactApexChart
                        options={chart2Data.options}
                        series={chart2Series}
                        type="line"
                        height="280"

                    />
                </div>
            </div>

            <div className="py-4 grid grid-cols-5 gap-3 px-3" >
                <div>
                    <p>Compare</p>
                    <Link to='/' className='text-blue-500 hover:underline mt-2 text-sm'>What's this</Link>
                </div>
                <div className='pl-3 border-l border-gray-300 flex items-start space-x-2'>
                    <input
                        checked={today}
                        onChange={handleTodayChange}
                        type="checkbox" className='bg-[#f5f9fa] mt-4' />
                    <div>
                        <p className='text-blue-500'>Today so far</p>
                        <p className='text-gray-500 text-sm'>So far</p>
                        <p className='text-sm space-x-1'>
                            <span >0</span>
                            <span className='text-gray-500'>Units</span>
                        </p>
                        <p className='text-sm'>$0.00</p>
                    </div>
                </div>

                <div className='pl-3 border-l border-gray-300  flex items-start space-x-2'>
                    <input
                    checked={yesterday}
                    onClick={() => handleChart('Yesterday')}
                    onChange={handleTodayCHange}
                    type="checkbox" className='bg-[#f5f9fa] mt-4' />
                    <div>
                        <p className='text-[#e02d00]'>Yesterday</p>
                        <p className='text-gray-500 text-sm'>By end of day</p>
                        <p className='text-sm space-x-1'>
                            <span >30</span>
                            <span className='text-gray-500'>Units</span>
                        </p>
                        <p className='text-sm'>$1,147.70</p>
                    </div>
                </div>

                <div className='pl-3 border-l border-gray-300  flex items-start space-x-2'>
                    <input
                     onClick={() => handleChart('Same day last week')}
                     checked={lastWeek}
                     onChange={hanldeLastWeekCHange}
                    type="checkbox" className='bg-[#f5f9fa] mt-4' />
                    <div>
                        <p className='text-[#FF8F00]'>Same day last week</p>
                        <p className='text-gray-500 text-sm'>By end of day</p>
                        <p className='text-sm space-x-1'>
                            <span >33</span>
                            <span className='text-gray-500'>Units</span>
                        </p>
                        <p className='text-sm'>$1,088.67</p>
                    </div>
                </div>
                <div className='pl-3 border-l border-gray-300  flex items-start space-x-2'>
                    <input
                      checked={lastWeek1}
                      onChange={hanldeLastWeekCHange1}
                     onClick={() => handleChart('Same day last year')}
                    type="checkbox" className='bg-[#f5f9fa] mt-4' />
                    <div>
                        <p className='text-gray-500'>Same day last week</p>
                        <p className='text-gray-500 text-sm'>By end of day</p>
                        <p className='text-sm space-x-1'>
                            <span >0</span>
                            <span className='text-gray-500'>Units</span>
                        </p>
                        <p className='text-sm'>$0.00</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sales
