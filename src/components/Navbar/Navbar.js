import React from 'react';
import { MdWifiCalling3, MdEmail } from "react-icons/md";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { GiShop, GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <div>
            <div className='h-28 sm:h-12 bg-base-300 text-gray-900 flex items-center font-serif'>
                <div className='w-11/12 mx-auto lg:w-10/12 sm:flex justify-between items-center'>
                    <div className='sm:flex'>
                        <div className='flex items-center text-sm md:text-base'>
                            <MdEmail className='text-orange-700'></MdEmail>
                            <p className='ml-1 mr-5'>Email: helpline@eazymart.com</p>
                        </div>
                        <div className='flex items-center text-sm md:text-base'>
                            <MdWifiCalling3 className='text-orange-700'></MdWifiCalling3>
                            <p className='ml-1'>Hotline: <span className='font-sans'>+123 456 789</span></p>
                        </div>
                    </div>
                    <div className='w-32 md:w-36'>
                        <div className='flex items-center py-1 px-4 rounded-md bg-white text-sm md:text-base'>
                            <FaUser></FaUser>
                            <p className='ml-1'>My Account</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-48 sm:h-60'>
                <div className='w-11/12 mx-auto lg:w-10/12 font-serif'>
                    <div className='h-32 sm:h-44 flex justify-between items-center'>
                        <div className='flex items-center text-4xl sm:text-6xl font-semibold text-green-600'>
                            <GiShop></GiShop>
                            <h2 className='ml-2'>EazyMart</h2>
                        </div>
                        <div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 text-white rounded-box w-52">
                                    <li>Home</li>
                                    <li>Page</li>
                                    <li>Category</li>
                                    <li>Daily Deals</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                            <div className="hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                    <li className='ml-3 lg:text-2xl'>Home</li>
                                    <li className='ml-3 lg:text-2xl'>Page</li>
                                    <li className='ml-3 lg:text-2xl'>Category</li>
                                    <li className='ml-3 lg:text-2xl'>Daily Deals</li>
                                    <li className='ml-3 lg:text-2xl'>Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='h-16 bg-green-700 grid md:grid-cols-12 text-white'>
                        <div className='md:col-span-4 lg:col-span-3 hidden md:flex items-center border-r-8 border-r-green-500'>
                            <div className='flex items-center pl-3 md:text-lg'>
                                <GiHamburgerMenu className='w-7 h-7'></GiHamburgerMenu>
                                <p className='ml-2'>Shop by categories</p>
                            </div>
                        </div>
                        <div className='md:col-span-8 lg:col-span-9 flex items-center px-3'>
                            <div className='flex justify-between w-full items-center'>
                                <input type="text" placeholder="Enter Your Keyword" className="input input-bordered rounded-l-lg rounded-r-none w-full text-black" />
                                <p className='py-4 px-6 bg-green-500'><FaSearch></FaSearch></p>
                                <div className='hidden md:flex items-center w-48 justify-center'>
                                    <FaShoppingCart className='w-10 h-10'></FaShoppingCart>
                                    <div className='ml-2 font-sans'>
                                        <p className='text-sm'>My Cart</p>
                                        <p className='text-sm'>0 Items</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;