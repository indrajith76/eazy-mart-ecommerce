import React from 'react';
import Image from 'next/image'
import logo1 from '../../assets/Footer/logo-01.jpg';
import logo2 from '../../assets/Footer/logo-02.jpg';
import logo3 from '../../assets/Footer/logo-03.jpg';
import logo4 from '../../assets/Footer/logo-04.jpg';
import logo5 from '../../assets/Footer/logo-05.jpg';
import logo6 from '../../assets/Footer/logo-06.jpg';
import payment01 from '../../assets/Footer/payment01.png';
import payment02 from '../../assets/Footer/payment02.png';
import payment03 from '../../assets/Footer/payment03.png';
import { ImFacebook, ImTwitter, ImInstagram, ImYoutube } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='min-h-screen w-full'>
            <div className='w-11/12 mx-auto lg:w-10/12'>
                <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 w-full mt-10'>
                    <Image src={logo1} alt='' className='sm:h-24 md:h-28 lg:h-32 w-full'></Image>
                    <Image src={logo2} alt='' className='sm:h-24 md:h-28 lg:h-32 w-full'></Image>
                    <Image src={logo3} alt='' className='sm:h-24 md:h-28 lg:h-32 w-full'></Image>
                    <Image src={logo4} alt='' className='sm:h-24 md:h-28 lg:h-32 w-full'></Image>
                    <Image src={logo5} alt='' className='sm:h-24 md:h-28 lg:h-32 w-full'></Image>
                    <Image src={logo6} alt='' className='sm:h-24 md:h-28 lg:h-32 w-full'></Image>
                </div>
            </div>
            <div className='bg-green-500 h-56 lg:h-40 pt-6 lg:pt-0'>
                <div className='w-11/12 mx-auto lg:w-10/12 h-full lg:flex justify-between items-center text-white'>
                    <div className='sm:w-1/2 mx-auto lg:flex lg:w-4/6'>
                        <div className='flex'>
                            <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full rounded-none h-12" />
                            <button className='btn btn-outline rounded-none h-12 text-white bg-green-600 hover:bg-green-800'>Subscribe</button>
                        </div>
                        <div className='ml-5 text-center lg:text-left mt-4 lg:mt-0'>
                            <h3>SIGN UP FOR OUR NEWSLETTER</h3>
                            <p>Receive email-only deals, special offers</p>
                        </div>
                    </div>
                    <div className='mt-4 lg:mt-0 flex justify-center lg:justify-end lg:w-2/6'>
                        <div>
                            <button className='btn bg-white text-black hover:text-white ml-2'><ImFacebook className='w-4 h-6'></ImFacebook></button>
                            <button className='btn bg-white text-black hover:text-white ml-2'><ImInstagram className='w-4 h-6'></ImInstagram></button>
                            <button className='btn bg-white text-black hover:text-white ml-2'><ImTwitter className='w-4 h-6'></ImTwitter></button>
                            <button className='btn bg-white text-black hover:text-white ml-2'><ImYoutube className='w-4 h-6'></ImYoutube></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-base-100'>
                <footer className="footer py-10 px-14 bg-base-100 text-base-content w-11/12 mx-auto">
                    <div>
                        <span className="footer-title">CONTACT US</span>
                        <div className='flex justify-start items-start'>
                            <FaHome className='w-7 h-5 mr-3'></FaHome>
                            <h2 className='text-base mr-2'>ADDRESS:</h2>
                            <p>123 Suspendis matti, Visaosang Building <br /> VST District, NY Accums, North American</p>
                        </div>
                        <div className='flex justify-start items-start'>
                            <IoCall className='w-6 h-5 mr-3'></IoCall>
                            <h2 className='text-base mr-2'>HOTLINE:</h2>
                            <p> 0123-456-78910<br /> 0987-654-32100</p>
                        </div>
                        <div className='flex justify-start items-start'>
                            <MdEmail className='w-7 h-6 mr-3'></MdEmail>
                            <h2 className='text-base mr-2'>EMAIL:</h2>
                            <p> support@eazymart.com<br /> helpline@eazymart.com</p>
                        </div>
                    </div>
                    <div>
                        <span className="footer-title">CORPORATE INFO</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">MY ACCOUNT</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">NEED HELP</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">SAVE MONEY</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
                <div className='bg-base-300 mb-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-11/12 mx-auto lg:w-10/12 py-10'>
                        <Image src={payment01} className='mx-auto'></Image>
                        <Image src={payment02} className='mx-auto py-4 lg:py-0'></Image>
                        <Image src={payment03} className='mx-auto'></Image>
                    </div>
                </div>
                <div className='bg-base-100 mb-10'>
                    <p className='w-9/12 mx-auto text-center text-sm'>Nokia | Samsung | HTC | Laptop | Smartphone | Tablet | Vinova | Smartwatch | Wireless | Charger | Company | Iphone 7S Plus | Nova | Fashion |
                        Android Phone | IOS Phone | OPPO | USB | Kingston 128GB | Bluetooth | Motorcycle | Headset | Speaker | Headphone | Huawei | Zippo | Digimart | Novamart |
                        Flatware | Blackberry | Hitachi | Sony | Fujifilm | Keyboard | E-Blue | Mouse | Logitech | Game Pad | Canon | Transcend</p>
                </div>
                <div className='mb-5'>
                    <hr />
                    <p className='text-sm font-semibold text-center'>Copyright © 2023 EazyMart. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;