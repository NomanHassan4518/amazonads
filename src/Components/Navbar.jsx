import React, { useState } from 'react'
import { VscHome } from "react-icons/vsc";
import { TfiWorld } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false)
    let [dropDown, setDropDown] = useState('block')

    const dropButton = () => {
        if (dropDown === 'block') {
            setDropDown('hidden')
        } else {
            setDropDown('block')
        }
    }

    const drawerOpen = () => {
        setIsOpen(true)
    }

    const drawerClose = () => {
        setIsOpen(false)
    }

    const drawerStyle = {
        background: '#232f3f', // Set your desired background color
    };


    let title = <img className='h-10 ml-5 ' src='https://m.media-amazon.com/images/G/01/AdProductsMarketing/A20m/amazon_ads_logo._TTW_.png' alt=''></img>

    return (
        <>
            <div className=' fixed w-full z-[10000]'>
                <div className='lg:flex hidden  justify-between items-center space-x-4 px-4 py-2.5 bg-[#222f3e]  border-b-4 border-[#f35f19] text-white' >
                    <div className='flex items-center space-x-5'>
                        <div className='w-[16%] pr-5 border-r border-black'>
                            <img src="https://m.media-amazon.com/images/G/01/AdProductsMarketing/A20m/amazon_ads_logo._TTW_.png" alt="" />
                        </div>
                        <div className="flex items-center space-x-4">
                            <p> <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-label="Sponsored ads"
                                className="sc-AxgMl hGKuhX"
                                fill="#f35f19" // Set the fill color to black
                            >
                                <defs>
                                    <filter id="filter-1">
                                        <feColorMatrix
                                            in="SourceGraphic"
                                            type="matrix"
                                            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                                        ></feColorMatrix>
                                    </filter>
                                </defs>
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    strokeWidth="1"
                                    fill="#f35f19" // Set the fill color to black
                                    fillRule="evenodd"
                                >
                                    <g id="SA" transform="translate(-12.000000, -12.000000)">
                                        <g transform="translate(12.000000, 12.000000)">
                                            <g id="Icons" transform="translate(2.000000, 4.000000)" fill="#f35f19" fillRule="nonzero">
                                                <g id="Group">
                                                    <path
                                                        d="M18,0 L2,0 C0.9,0 0,0.9 0,2 L0,4 L0,14 C0,15.1 0.9,16 2,16 L18,16 C19.1,16 20,15.1 20,14 L20,4 L20,2 C20,0.9 19.1,0 18,0 Z M2,2 L18,2 L18,4 L2,4 L2,2 Z M18,14 L2,14 L2,6 L18,6 L18,14 Z"
                                                        id="Shape"
                                                        fill="#f35f19" // Set the fill color to black
                                                    ></path>
                                                    <rect id="Rectangle" x="12" y="8" width="4" height="4" fill="#f35f19" /> {/* Set the fill color to black */}
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg></p>
                            <div className='leading-4 text-[13px]'>
                                <p className=' font-[400] '>Sponsored ads</p>
                                <p className='font-bold'>Campaign manager</p>
                            </div>
                            <p>
                                <svg
                                    width="22px"
                                    height="22px"
                                    viewBox="0 0 585 512"
                                    version="1.1"
                                    className="sc-storm-ui-30025708__sc-1gsqp3h-0 keLEpr far fa-house"
                                >
                                    <path
                                        fill="#667183"
                                        d="m61.5 248.48-.88.72c-15.49 13.45-39.74 5.1-43.65-15.04a26.65 26.65 0 0 1 9.89-26.2l226.2-185.85a62.19 62.19 0 0 1 78.88 0l226.2 185.86c16.25 12.53 12.83 37.95-6.15 45.76a26.66 26.66 0 0 1-27.61-4.53l-.9-.72v227.08A28.52 28.52 0 0 1 495.07 504H374.23a28.43 28.43 0 0 1-28.43-28.44V326.3H239.2v149.25A28.52 28.52 0 0 1 210.75 504H89.93a28.43 28.43 0 0 1-28.43-28.44V248.48ZM286.82 63.33l-172 141.44v245.91h71.06V301.44A28.52 28.52 0 0 1 214.32 273h156.35a28.5 28.5 0 0 1 28.43 28.43v149.25h71.07v-245.9l-172-141.44a8.88 8.88 0 0 0-11.35 0Z"
                                    ></path>
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-2 bg-[#343f52]  rounded-full py-1 px-5 w-[25rem] hover:bg-[#495566] text-[13px]'>
                        <p><TfiWorld className='text-[#6e7b8c] text-2xl' /></p>
                        <h1 className='leading-5'>
                            <p className=' font-semibold'>Krewe home interior</p>
                            <p className=' text-[#8ca2b2]'>Sponsored ads, United States</p>
                        </h1>
                    </div>

                    <Link to='/' className='text-2xl hover:bg-black cursor-pointer rounded p-2'>
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 448 512"
                            className="sc-storm-ui-30025708__sc-1gsqp3h-0 keLEpr far fa-bell">
                            <path
                                fill="currentColor"
                                d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"
                            ></path>
                        </svg>
                    </Link>

                    <Link to='/' className='text-2xl hover:bg-black cursor-pointer rounded p-2'>
                        <svg
                            viewBox="0 0 512 512"
                            className="sc-storm-ui-30025708__sc-1gsqp3h-0 keLEpr far fa-circle-question"
                            style={{ width: '20px', height: '20px' }}
                        >
                            <path
                                fill="currentColor"
                                d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z"
                            ></path>
                        </svg>
                    </Link>

                    <Link to='/' className='text-2xl hover:bg-black cursor-pointer rounded p-2'>
                        <svg
                            viewBox="0 0 512 512"
                            className="sc-storm-ui-30025708__sc-1gsqp3h-0 keLEpr far fa-circle-user"
                            style={{ width: '20px', height: '20px' }}
                        >
                            <path
                                fill="currentColor"
                                d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"
                            ></path>
                        </svg>
                    </Link>

                </div>

                <aside className='fixed lg:flex items-center  hidden px-2 py-4 left-0 -top-6 mt-24 z-50  shadow-lg  flex-col bg-[#fbfbfb] text-black'>

                    <Link to="/" className=' hover:bg-gray-100 p-2  rounded  '>
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-label="Opportunities"
                            className="sc-AxgMl hGKuhX"
                            fill="#000000" // Set the fill color to black
                        >
                            <defs>
                                <filter id="filter-1">
                                    <feColorMatrix
                                        in="SourceGraphic"
                                        type="matrix"
                                        values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                                    ></feColorMatrix>
                                </filter>
                            </defs>
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="#000000" // Set the fill color to black
                                fillRule="evenodd"
                            >
                                <g id="Opportunities" transform="translate(-12.000000, -12.000000)">
                                    <g transform="translate(12.000000, 12.000000)" id="Icons">
                                        <g transform="translate(2.000000, 3.000000)">
                                            <path
                                                d="M8,0 L2,0 C0.9,0 0,0.9 0,2 L0,5 C0,5.55 0.45,6 1,6 L8,6 C8.55,6 9,5.55 9,5 L9,1 C9,0.45 8.55,0 8,0 Z M7,4 L2,4 L2,2 L7,2 L7,4 Z"
                                                id="Shape"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                            <path
                                                d="M8,8 L1,8 C0.45,8 0,8.45 0,9 L0,16 C0,17.1 0.9,18 2,18 L8,18 C8.55,18 9,17.55 9,17 L9,9 C9,8.45 8.55,8 8,8 Z M7,16 L2,16 L2,10 L7,10 L7,16 Z"
                                                id="Shape"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                            <path
                                                d="M19,12 L12,12 C11.45,12 11,12.45 11,13 L11,17 C11,17.55 11.45,18 12,18 L18,18 C19.1,18 20,17.1 20,16 L20,13 C20,12.45 19.55,12 19,12 Z M18,16 L13,16 L13,14 L18,14 L18,16 Z"
                                                id="Shape"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                            <path
                                                d="M18,0 L12,0 C11.45,0 11,0.45 11,1 L11,9 C11,9.55 11.45,10 12,10 L19,10 C19.55,10 20,9.55 20,9 L20,2 C20,0.9 19.1,0 18,0 Z M18,8 L13,8 L13,2 L18,2 L18,8 Z"
                                                id="Shape"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>

                    <div className='border-b w-full border-gray-300 mt-4'></div>


                    <Link to="/" className=' hover:bg-gray-100 p-2   rounded  mt-4'>
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-label="Sponsored ads"
                            className="sc-AxgMl hGKuhX"
                            fill="#f35f19" // Set the fill color to black
                        >
                            <defs>
                                <filter id="filter-1">
                                    <feColorMatrix
                                        in="SourceGraphic"
                                        type="matrix"
                                        values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                                    ></feColorMatrix>
                                </filter>
                            </defs>
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="#f35f19" // Set the fill color to black
                                fillRule="evenodd"
                            >
                                <g id="SA" transform="translate(-12.000000, -12.000000)">
                                    <g transform="translate(12.000000, 12.000000)">
                                        <g id="Icons" transform="translate(2.000000, 4.000000)" fill="#f35f19" fillRule="nonzero">
                                            <g id="Group">
                                                <path
                                                    d="M18,0 L2,0 C0.9,0 0,0.9 0,2 L0,4 L0,14 C0,15.1 0.9,16 2,16 L18,16 C19.1,16 20,15.1 20,14 L20,4 L20,2 C20,0.9 19.1,0 18,0 Z M2,2 L18,2 L18,4 L2,4 L2,2 Z M18,14 L2,14 L2,6 L18,6 L18,14 Z"
                                                    id="Shape"
                                                    fill="#f35f19" // Set the fill color to black
                                                ></path>
                                                <rect id="Rectangle" x="12" y="8" width="4" height="4" fill="#f35f19" /> {/* Set the fill color to black */}
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>

                    <div className='border-b w-full border-gray-300 mt-5'></div>

                    <Link to="/" className='  hover:bg-gray-100  p-2  rounded   mt-3'>
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-label="Brand content"
                            className="sc-AxgMl hGKuhX"
                            fill="#000000" // Set the fill color to black
                        >
                            <defs>
                                <filter id="filter-1">
                                    <feColorMatrix
                                        in="SourceGraphic"
                                        type="matrix"
                                        values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                                    ></feColorMatrix>
                                </filter>
                            </defs>
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="#000000" // Set the fill color to black
                                fillRule="evenodd"
                            >
                                <g id="BrandContent" transform="translate(-12.000000, -12.000000)">
                                    <g transform="translate(12.000000, 12.000000)">
                                        <g id="Icons" transform="translate(2.006210, 1.997500)">
                                            <g id="Group" transform="translate(0.000000, 0.000000)" fill="#000000" fillRule="nonzero">
                                                <path
                                                    d="M14.38379,6.6925 C13.46379,5.7725 11.96379,5.7725 11.04379,6.6925 L9.99379001,7.7425 L8.94379001,6.6925 C8.02379001,5.7725 6.52379001,5.7725 5.60379001,6.6925 C5.15379001,7.1425 4.91379001,7.7325 4.91379001,8.3625 C4.91379001,8.9925 5.16379001,9.5825 5.60379001,10.0325 L9.28379001,13.7125 C9.43379001,13.8625 9.61379001,13.9525 9.80379001,13.9825 C9.85379001,13.9925 9.91379001,14.0025 9.96379001,14.0025 C9.97379001,14.0025 9.99379001,14.0025 10.00379,14.0025 C10.26379,14.0025 10.52379,13.9025 10.71379,13.7125 L14.39379,10.0325 C14.84379,9.5825 15.08379,8.9925 15.08379,8.3625 C15.08379,7.7325 14.83379,7.1425 14.38379,6.6925 C14.38379,6.6925 14.38379,6.6925 14.38379,6.6925 Z"
                                                    id="Path"
                                                    fill="#000000" // Set the fill color to black
                                                ></path>
                                                <path
                                                    d="M19.39379,10.6525 L19.99379,4.0925 C20.03379,3.6325 19.75379,3.2025 19.31379,3.0525 L10.31379,0.0525 C10.10379,-0.0175 9.88379001,-0.0175 9.68379001,0.0525 L0.683790008,3.0525 C0.243790008,3.2025 -0.0362099923,3.6325 0.00379000772,4.0925 L0.593790008,10.6225 C1.03379001,17.7125 9.39379001,19.8825 9.75379001,19.9725 C9.83379001,19.9925 9.91379001,20.0025 9.99379001,20.0025 C10.07379,20.0025 10.15379,19.9925 10.23379,19.9725 C10.59379,19.8825 18.95379,17.7125 19.39379,10.6525 Z M9.99379001,17.9625 C8.72379001,17.5725 2.90379001,15.5325 2.58379001,10.4725 L2.05379001,4.7025 L9.99379001,2.0525 L17.92379,4.6925 L17.39379,10.4925 C17.08379,15.5325 11.26379,17.5725 9.99379001,17.9625 Z"
                                                    id="Shape"
                                                    fill="#000000" // Set the fill color to black
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>

                    <Link to="/" className='  hover:bg-gray-100 p-2   rounded   mt-4'>
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-label="Creative tools"
                            className="sc-AxgMl hGKuhX"
                            fill="#000000" // Set the fill color to black
                        >
                            <defs>
                                <filter id="filter-1">
                                    <feColorMatrix
                                        in="SourceGraphic"
                                        type="matrix"
                                        values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                                    ></feColorMatrix>
                                </filter>
                            </defs>
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="#000000" // Set the fill color to black
                                fillRule="evenodd"
                            >
                                <g id="CreativeResources" transform="translate(-12.000000, -12.000000)">
                                    <g transform="translate(12.000000, 12.000000)" id="Icons">
                                        <g transform="translate(2.000000, 4.000000)">
                                            <path
                                                d="M2,4 L2,14 L16,14 C16,15.2146978 15.2705803,16 14,16 L14,16 L2,16 C0.514217557,16 0,15.2363969 0,14 L0,14 L0,6 C0,4.76328937 0.5,4 2,4 L2,4 Z M18,0 C19.1045695,0 20,0.8954305 20,2 L20,10 C20,11.1045695 19.1045695,12 18,12 L6,12 C4.8954305,12 4,11.1045695 4,10 L4,2 C4,0.8954305 4.8954305,0 6,0 L18,0 Z M18,2 L6,2 L6,10 L18,10 L18,2 Z M14,4 L16,8 L8,8 L10,6 L11,7 L14,4 Z M9,3 C9.55228475,3 10,3.44771525 10,4 C10,4.55228475 9.55228475,5 9,5 C8.44771525,5 8,4.55228475 8,4 C8,3.44771525 8.44771525,3 9,3 Z"
                                                id="Combined-Shape"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>

                    <Link to="/" className='  hover:bg-gray-100 p-2   rounded   mt-4'>
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-label="Insights and planning"
                            className="sc-AxgMl hGKuhX"
                            fill="#000000" // Set the fill color to black
                        >
                            <defs>
                                <filter id="filter-1">
                                    <feColorMatrix
                                        in="SourceGraphic"
                                        type="matrix"
                                        values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                                    ></feColorMatrix>
                                </filter>
                            </defs>
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="#000000" // Set the fill color to black
                                fillRule="evenodd"
                            >
                                <g id="InsightsPlanning" transform="translate(-12.000000, -12.000000)">
                                    <g transform="translate(12.000000, 12.000000)" id="Icons">
                                        <g transform="translate(2.007500, 4.000000)">
                                            <path
                                                d="M19.3725,0.08 C19.2525,0.03 19.1225,0 18.9925,0 L13.9925,0 C13.4425,0 12.9925,0.45 12.9925,1 C12.9925,1.55 13.4425,2 13.9925,2 L16.5825,2 L9.9925,8.59 L7.7025,6.3 C7.3125,5.91 6.6825,5.91 6.2925,6.3 L0.2925,12.3 C-0.0975,12.69 -0.0975,13.32 0.2925,13.71 C0.4825,13.9 0.7325,14 0.9925,14 C1.2525,14 1.5025,13.9 1.7025,13.71 L6.9925,8.41 L9.2825,10.7 C9.6725,11.09 10.3025,11.09 10.6925,10.7 L17.9925,3.41 L17.9925,5.95 C17.9925,6.5 18.4425,6.95 18.9925,6.95 C19.5425,6.95 19.9925,6.5 19.9925,5.95 L19.9925,1 C19.9925,0.87 19.9625,0.74 19.9125,0.62 C19.8125,0.37 19.6225,0.18 19.3725,0.08 Z"
                                                id="Path"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                            <path
                                                d="M5.9925,16 L13.9925,16 C14.5425,16 14.9925,15.55 14.9925,15 C14.9925,14.45 14.5425,14 13.9925,14 L5.9925,14 C5.4425,14 4.9925,14.45 4.9925,15 C4.9925,15.55 5.4425,16 5.9925,16 Z"
                                                id="Path"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>

                    <Link to="/" className='  hover:bg-gray-100  p-2  rounded   mt-2'>
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-label="Measurement & Reporting"
                            className="sc-AxgMl hGKuhX"
                            fill="#000000" // Set the fill color to black
                        >
                            <defs>
                                <filter id="filter-1">
                                    <feColorMatrix
                                        in="SourceGraphic"
                                        type="matrix"
                                        values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                                    ></feColorMatrix>
                                </filter>
                            </defs>
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="#000000" // Set the fill color to black
                                fillRule="evenodd"
                            >
                                <g id="ReportingMeasurement" transform="translate(-12.000000, -12.000000)">
                                    <g transform="translate(12.000000, 12.000000)" id="Icons">
                                        <g transform="translate(4.000000, 4.000000)">
                                            <path
                                                d="M1,16 L15,16 C15.55,16 16,15.55 16,15 C16,14.45 15.55,14 15,14 L1,14 C0.45,14 0,14.45 0,15 C0,15.55 0.45,16 1,16 Z"
                                                id="Path"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                            <path
                                                d="M1,12 C1.55,12 2,11.55 2,11 L2,7 C2,6.45 1.55,6 1,6 C0.45,6 0,6.45 0,7 L0,11 C0,11.55 0.45,12 1,12 Z"
                                                id="Path"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                            <path
                                                d="M6.67,11 L6.67,5 C6.67,4.45 6.22,4 5.67,4 C5.12,4 4.67,4.45 4.67,5 L4.67,11 C4.67,11.55 5.12,12 5.67,12 C6.22,12 6.67,11.55 6.67,11 Z"
                                                id="Path"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                            <path
                                                d="M11.33,11 L11.33,3 C11.33,2.45 10.88,2 10.33,2 C9.78,2 9.33,2.45 9.33,3 L9.33,11 C9.33,11.55 9.78,12 10.33,12 C10.88,12 11.33,11.55 11.33,11 Z"
                                                id="Path"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                            <path
                                                d="M15,12 C15.55,12 16,11.55 16,11 L16,1 C16,0.45 15.55,0 15,0 C14.45,0 14,0.45 14,1 L14,11 C14,11.55 14.45,12 15,12 Z"
                                                id="Path"
                                                fill="#000000" // Set the fill color to black
                                                fillRule="nonzero"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>

                    <div className='border-b w-full border-gray-300 mt-3'></div>

                    <Link to="/" className='  hover:bg-gray-100 p-2   rounded   mt-6'><CgMenuGridR className='text-2xl ' /></Link>

                    <Link to="/" className='  mt-24 hover:bg-gray-100 p-2  rounded'>
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-label="Administration"
                            className="sc-AxgMl hGKuhX"
                        >
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="#000000" fillRule="evenodd">
                                <g id="Administration" transform="translate(-12.000000, -12.000000)" fill="#000000" fillRule="nonzero">
                                    <g transform="translate(12.000000, 12.000000)" id="Icons">
                                        <g transform="translate(2.617434, 1.987500)">
                                            <path
                                                d="M18.5925663,6.1125 C18.2725663,5.3525 17.8525663,4.6325 17.3425663,3.9725 C16.7325663,3.1725 15.6125663,2.9425 14.7425663,3.4425 L14.2925663,3.7025 C13.7025663,3.2425 13.0625663,2.8725 12.3725663,2.5925 L12.3725663,2.0725 C12.3725663,1.0625 11.6225663,0.2125 10.6225663,0.0825 C9.78256627,-0.0275 8.96256627,-0.0275 8.13256627,0.0825 C7.13256627,0.2125 6.38256627,1.0625 6.38256627,2.0725 L6.38256627,2.5925 C5.70256627,2.8725 5.05256627,3.2425 4.46256627,3.7025 L4.01256627,3.4425 C3.14256627,2.9425 2.02256627,3.1625 1.41256627,3.9625 C0.912566274,4.6225 0.492566274,5.3425 0.162566274,6.1025 C-0.237433726,7.0425 0.122566274,8.1225 1.00256627,8.6325 L1.45256627,8.8925 C1.41256627,9.2825 1.38256627,9.6525 1.38256627,10.0125 C1.38256627,10.3725 1.41256627,10.7425 1.46256627,11.1225 L1.01256627,11.3825 C0.132566274,11.8925 -0.227433726,12.9725 0.172566274,13.9125 C0.492566274,14.6725 0.912566274,15.3925 1.41256627,16.0525 C2.02256627,16.8525 3.14256627,17.0825 4.01256627,16.5825 L4.46256627,16.3225 C5.05256627,16.7825 5.69256627,17.1525 6.38256627,17.4325 L6.38256627,17.9425 C6.38256627,18.9525 7.13256627,19.8025 8.13256627,19.9325 C8.55256627,19.9825 8.97256627,20.0125 9.38256627,20.0125 C9.79256627,20.0125 10.2125663,19.9825 10.6325663,19.9325 C11.6325663,19.8025 12.3825663,18.9525 12.3825663,17.9425 L12.3825663,17.4325 C13.0625663,17.1525 13.7125663,16.7825 14.3025663,16.3225 L14.7525663,16.5825 C15.6225663,17.0825 16.7425663,16.8625 17.3525663,16.0625 C17.8525663,15.4025 18.2725663,14.6825 18.6025663,13.9225 C19.0025663,12.9825 18.6425663,11.9025 17.7625663,11.3925 L17.3125663,11.1325 C17.3525663,10.7425 17.3825663,10.3725 17.3825663,10.0125 C17.3825663,9.6525 17.3525663,9.2825 17.3025663,8.9025 L17.7525663,8.6425 C18.6325663,8.1425 18.9925663,7.0525 18.5925663,6.1125 Z M15.2125663,8.6225 C15.3225663,9.0925 15.3825663,9.5625 15.3825663,10.0125 C15.3825663,10.4625 15.3225663,10.9325 15.2125663,11.4025 L15.0425663,12.1325 L16.7525663,13.1325 C16.4925663,13.7325 16.1625663,14.3125 15.7425663,14.8425 L14.0425663,13.8625 L13.5025663,14.3725 C12.8225663,15.0225 11.9925663,15.5025 11.1025663,15.7625 L10.3825663,15.9725 L10.3725663,17.9425 C9.71256627,18.0325 9.06256627,18.0325 8.38256627,17.9325 L8.38256627,15.9625 L7.67256627,15.7525 C6.78256627,15.4925 5.95256627,15.0025 5.27256627,14.3625 L4.73256627,13.8525 L3.02256627,14.8325 C2.62256627,14.3025 2.28256627,13.7325 2.02256627,13.1125 L3.73256627,12.1225 L3.56256627,11.4025 C3.44256627,10.9325 3.38256627,10.4625 3.38256627,10.0125 C3.38256627,9.5625 3.44256627,9.0925 3.55256627,8.6225 L3.72256627,7.9025 L2.01256627,6.9025 C2.27256627,6.3025 2.60256627,5.7225 3.02256627,5.1925 L4.72256627,6.1725 L5.26256627,5.6625 C5.94256627,5.0125 6.78256627,4.5325 7.66256627,4.2725 L8.38256627,4.0525 L8.39256627,2.0825 C9.06256627,1.9925 9.69256627,1.9925 10.3825663,2.0925 L10.3825663,4.0625 L11.0925663,4.2725 C11.9825663,4.5325 12.8125663,5.0225 13.4925663,5.6625 L14.0325663,6.1725 L15.7425663,5.1925 C16.1425663,5.7225 16.4825663,6.2925 16.7425663,6.9125 L15.0325663,7.9025 L15.2125663,8.6225 Z"
                                                id="Shape"
                                                fill="#000000"
                                            ></path>
                                            <path
                                                d="M9.38256627,6.0125 C7.17256627,6.0125 5.38256627,7.8025 5.38256627,10.0125 C5.38256627,12.2225 7.17256627,14.0125 9.38256627,14.0125 C11.5925663,14.0125 13.3825663,12.2225 13.3825663,10.0125 C13.3825663,7.8025 11.5925663,6.0125 9.38256627,6.0125 Z M9.38256627,12.0125 C8.28256627,12.0125 7.38256627,11.1125 7.38256627,10.0125 C7.38256627,8.9125 8.28256627,8.0125 9.38256627,8.0125 C10.4825663,8.0125 11.3825663,8.9125 11.3825663,10.0125 C11.3825663,11.1125 10.4825663,12.0125 9.38256627,12.0125 Z"
                                                id="Shape"
                                                fill="#000000"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>

                </aside> 

                <div className='p-4 lg:hidden block bg-[#222f3e] text-white w-full'>
                    <div className="flex space-x-1 w-full justify-between items-center">
                        <div className='flex space-x-5 items-center'>
                            <span className='text-2xl' onClick={drawerOpen}><IoMdMenu /></span>
                            <span className=' font-bold leading-none'>Campaign <br /> manager </span>
                        </div>
                        <ul className="flex space-x-7">
                            <li className='text-2xl'><VscHome /></li>
                            <li className='text-2xl'><IoIosNotifications /></li>
                            <li className='text-2xl'><AiOutlineQuestionCircle /></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="lg:hidden block bg-[#222f3e]  p-4 text-white pt-20">
                <div className='flex items-center space-x-2 bg-[#343f52] rounded-full py-1 px-5 w-'>
                    <p><TfiWorld className='text-[#6e7b8c] text-2xl' /></p>
                    <h1 className='leading-5'>
                        <p className=' font-semibold'>Krewe home interior</p>
                        <p className=' text-[#8ca2b2]'>Sponsored ads, United States</p>
                    </h1>
                </div>
            </div>

            <Drawer
                title={title}
                open={isOpen}
                onClose={drawerClose}
                placement='left'
                width={300}
                // visible={visible}
                style={drawerStyle}
            >
                <div className='text-lg font-medium text-white'>
                    <ul className=' pb-6 border-b-2 border-[#354152] '>
                        <li >
                            <Link to='/' className="flex items-center space-x-4">
                                <img src="https://m.media-amazon.com/images/G/01/CCX/svg/Opportunities-light._CB666234460_.svg" alt="" />
                                <p className='underline'>Opportunities</p>
                            </Link>
                        </li>
                    </ul>

                    <div className=' pb-4 border-b-2 border-[#354152] '>
                        <div className="mt-3   bg-[#354152] p-2 rounded" onClick={dropButton}>
                            <div className='flex relative space-x-3 items-center  '>
                                <img src="https://m.media-amazon.com/images/G/01/CCX/svg/SponsoredAds-light._CB645423389_.svg" alt="" />
                                <p>Sponsored ads</p>

                                <p className='text-3xl absolute right-3'>{dropDown === 'block' ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</p>

                            </div>
                            <div className={`${dropDown} mt-5 flex flex-col`}>
                                <Link to='/' className=" bg-[#5c687c] p-2 underline rounded ">
                                    Campaign manager
                                </Link>
                                <Link to="/" className='underline p-2'>Bulk Operations</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3  pb-6 border-b-2 border-[#354152] font-light">
                        <ul className=" relative">
                            <li>
                                <Link to='/' className='flex items-center space-x-4'>
                                    <img src="https://m.media-amazon.com/images/G/01/CCX/svg/BrandContent-light._CB666234460_.svg" alt="" />
                                    <p>Brand content</p>

                                    <p className='text-3xl absolute right-3'>{dropDown === 'block' ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</p>
                                </Link>
                            </li>
                            <li className='mt-7'>
                                <Link to='/' className='flex items-center space-x-4'>
                                    <img src="https://m.media-amazon.com/images/G/01/CCX/svg/CreativeResources-light._CB666234460_.svg" alt="" />
                                    <p>Creative tools</p>

                                    <p className='text-3xl absolute right-3'>{dropDown === 'block' ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</p>
                                </Link>
                            </li>
                            <li className='mt-7'>
                                <Link to='/' className='flex items-center space-x-4'>
                                    <img src="https://m.media-amazon.com/images/G/01/CCX/svg/InsightsPlanning-light._CB666234460_.svg" alt="" />
                                    <p className='leading-5'>Insights and <br /> planning</p>

                                    <p className='text-3xl absolute right-3'>{dropDown === 'block' ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</p>
                                </Link>
                            </li>
                            <li className='mt-7'>
                                <Link to='/' className='flex items-center space-x-4 '>
                                    <img src="https://m.media-amazon.com/images/G/01/CCX/svg/ReportingMeasurement-light._CB666234460_.svg" alt="" />
                                    <p className='leading-5'>Measurment & <br /> Reporting</p>

                                    <p className='text-3xl absolute right-3'>{dropDown === 'block' ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</p>
                                </Link>
                            </li>
                            <li className='mt-7'>
                                <Link to='/' className='flex items-center space-x-4 '>
                                    <img src="https://m.media-amazon.com/images/G/01/CCX/svg/MoreTools-light._CB666234460_.svg" alt="" />
                                    <p className='leading-5'>Tools and Resources</p>

                                </Link>
                            </li>
                            <li className='mt-7'>
                                <Link to='/' className='flex items-center space-x-4 '>
                                    <img src="https://m.media-amazon.com/images/G/01/CCX/svg/Administration-light._CB666234460_.svg" alt="" />
                                    <p className='leading-5'>Administration</p>

                                    <p className='text-3xl absolute right-3'>{dropDown === 'block' ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-7">
                        <Link to='/' className='flex items-center space-x-4'>
                            <p className='text-2xl'><MdAccountCircle /></p>
                            <p>Your preferences</p>

                        </Link>
                    </div>

                </div>
            </Drawer>
        </>
    )
}

export default Navbar
