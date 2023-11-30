import React from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { NavLink } from 'react-router-dom';
import bglogo from '../assets/BigLogo.png'
import klndr from '../assets/kalender.png'
import time from '../assets/Time.png'
// HONDA
import lghonda from '../assets/LgHonda.png'
import vario from '../assets/vario.png'
import beat from '../assets/Group_Beat.png'
import pcx from '../assets/PCX.png'
import street from '../assets/BTSREET.png'
import cbr from '../assets/CBR1501.png'
import cb from '../assets/CB1502.png'
// YAMAHA
import lgyamaha from '../assets/LgYamaha.png'
import aerox from '../assets/aerox.png'
import nmax from '../assets/nmax.png'
import m3 from '../assets/mio.png'
// SUZUKI
import lgsuzuki from '../assets/suzuki.png'
import burgman from '../assets/burgman.png'
import smash from '../assets/smash.png'
import nex from '../assets/nex.png'
// PIAGGIO
import lgpiagio from '../assets/PiaggioLogo.png'



const Katalog = () => {
    return (
        <>

            {/* SECTION 1 */}
            <div className='w-full  flex  justify-center  bg-white shadow-xl border '>
                <h2 className=' absolute text-center text-blue-700 font-Montserrat text-[25px] font-extrabold mt-3'>PRICE LIST KATALOG MOTOR</h2>
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
            </div>

            {/* SECTION 2 */}
            <div className="flex justify-between items-center -mt-2">
                <img src={lghonda} className='h-5 relative top-10 ml-8' />
                <div className="h-12 w-40  border-2 gap-3 mr-2  border-blue-300 shadow-xl rounded-md flex mt-5 relative top-5   ">
                    <img src={klndr} className='h-7 mt-1 ml-2 ' />
                    <h1 className="font-light mt-1.5 text-xs">Tanggal Booking</h1>
                </div>
            </div>

            {/* CAROUSEL HONDA */}
            <div className="mt-3  rounded-md flex  md:w-full justify-center  flex-col ">
                <Splide
                    options={{
                        rewind: true,
                        autoWidth: true,
                        gap: 'rem',
                        speed: 500,
                        arrows: false,
                        pagination: false,
                        
                        
                        






                        breakpoints: {
                            640 :{
                                perPage: 1,
                                
                            },
                            768: {
                                perPage: 3,
                                width : 500,
                            },
                            1900: {
                                perPage: 4,
                                gap: '1.5rem'
                            },
                        },

                        
                        
                        

                    }}
                    aria- label="My Favorite Images"
                >

                    
                    {/* HONDA */}
                    <SplideSlide>
                        {/*HONDA */}
                        {/* CARD MOTOR 1*/}
                        <div className="mx">
                            <div className="flex gap-10 md:gap-0 rounded-lg  shadow-xl object-contain items-center md:flex-col ">
                                <img src={beat} className='object-contain h-28'w-28 />
                                <div className="">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Beat 2016</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 60.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5" />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white h-9 p-1.5 top-3  relative md:top-5 md:p-2 "
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 2 */}
                        <div className="mx-5">
                            <div className="flex gap-10 md:gap-0 rounded-lg  shadow-xl object-contain items-center md:flex-col ">
                                <img src={vario} className='object-contain h-28'w-28 />
                                <div className="mt-5 pr-5 mb-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>Vario 150 2018</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 80.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs ">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white h-9 p-2 top-3 relative md:top-5 "
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                    
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 3 */}
                        <div className="mx-5">
                            <div className="flex gap-10 md:gap-0 rounded-lg  shadow-xl object-contain items-center md:flex-col ">
                                <img src={pcx} className='object-contain h-28'w-28 />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>PCX 2023</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white h-9 p-1.5 top-3  relative md:top-7 md:p-2 "
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 4 */}
                        <div className="mx-5">
                            <div className="flex gap-10 md:gap-0 rounded-lg  shadow-xl object-contain items-center md:flex-col ">
                                <img src={street} className='object-contain h-28'w-28 />
                                <div className="mt-5 pr-5 mb-5 ">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>Beat Street 2016</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 65.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white h-9 p-1.5 top-3  relative md:top-8 md:p-2 "
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 5 */}
                        <div className="mx-5">
                            <div className="flex gap-10 md:gap-0 rounded-lg  shadow-xl object-contain items-center md:flex-col ">
                                <img src={cbr} className='object-contain h-28'w-28 />
                                <div className="mt-5 w-full">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>CBR150R 2021</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 150.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white h-9 top-3 relative  md:p-2 md:top-8 "
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 6 */}
                        <div className="mx-5">
                            <div className="flex gap-10 md:gap-0 rounded-lg  shadow-xl object-contain items-center md:flex-col ">
                                <img src={cb} className='object-contain h-28 w-28 ' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>CB 150R 2021</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 150.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white h-9 p-1.5 top-3  relative md:top-5 md:p-2 "
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div >

            {/* CAROUSEL 2 YAMAHA */}
            < img src={lgyamaha} className='h-8 relative top-5 ml-8' />
            <div className="mt-3  rounded-md  ">
                {/* YAMAHA */}
                <Splide aria-label="My Favorite Images"
                    options={{
                        rewind: true,
                        width: 800,
                        gap: '1rem',
                        speed: 600,
                        rewindSpeed: 1000,
                        rewindByDrag: true,
                        perPage:1,
                    }}>
                    {/* YAMAHA */}
                    <SplideSlide>
                        {/* CARD MOTOR 1*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap- mb-6 ">
                                <img src={aerox} className='h-32 scale-100 -mt-1' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Aerox 2018</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <button className="bg-blue-700  mt-1 mb-3 rounded-2xl text-white w-36 h-8 ">Rental Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 2 */}
                        <div className=" mt-3 ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap- mb-6 ">
                                <img src={nmax} className='h-32 scale-100 ' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>Nmax 2020</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <button className="bg-blue-700 mt-1 mb-3 rounded-2xl text-white w-36 h-8 ">Rental Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 3 */}
                        <div className=" mt-3 ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap-0.5 mb-6 ">
                                <img src={m3} className='h-32 scale-100  ' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>Mio M3 2018</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 70.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <button className="bg-blue-700 mt-1 mb-3 rounded-2xl text-white w-36 h-8 ">Rental Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>

            {/* CAROUSEL 3 SUZUKI */}
            <img src={lgsuzuki} className='h-7 relative top-5 ml-8' />
            <div className="mt-3  rounded-md  ">
                <Splide aria-label="My Favorite Images"
                    options={{
                        rewind: true,
                        width: 800,
                        gap: '1rem',
                        speed: 500,
                        rewindSpeed: 1000,
                        rewindByDrag: true,
                    }}>
                    <SplideSlide>
                        {/*SUZUKI */}
                        {/* CARD MOTOR 1*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap-1 mb-6 ">
                                <img src={burgman} className='h-28 scale-105' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Burgman 2022</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 180.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <button className="bg-blue-700  mt-1 mb-3 rounded-2xl text-white w-36 h-8 ">Rental Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 2 */}
                        <div className=" mt-3 ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap-4 mb-6 ">
                                <img src={smash} className='h-28 scale-110 object-contain' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>Smash 2016</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 55.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <button className="bg-blue-700 mt-1 mb-3 rounded-2xl text-white w-36 h-8 ">Rental Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 4 */}
                        <div className=" mt-3 ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap-3 mb-6 ">
                                <img src={nex} className='h-28 scale-110 ' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>Nex 2019</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 80.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <button className="bg-blue-700 mt-1 mb-3 rounded-2xl text-white w-36 h-8 ">Rental Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>


                {/* CAROUSEL 4 Piaggio */}
                <img src={lgpiagio} className='h-10 relative top-5 ml-8' />
                <div className="mt-3  rounded-md  ">
                    <Splide aria-label="My Favorite Images"
                        options={{
                            rewind: true,
                            width: 800,
                            gap: '1rem',
                            speed: 500,
                            rewindSpeed: 1000,
                            rewindByDrag: true,
                        }}>
                        <SplideSlide>
                            {/*SUZUKI */}
                            {/* CARD MOTOR 1*/}
                            <div className=" mt-3  ">
                                <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap-1 mb-6 ">
                                    <img src={burgman} className='h-28 scale-105' />
                                    <div className="mt-5 pr-5">
                                        <h1 className='font-Montserrat text-blue-700 font-extrabold '>Burgman 2022</h1>
                                        <span className="font-Montserrat text-blue-700 ">Rp 180.000/hari</span>
                                        <div className="flex gap-1 ">
                                            <img src={time} className="h-3 mt-2.5 " />
                                            <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                        </div>
                                        <button className="bg-blue-700  mt-1 mb-3 rounded-2xl text-white w-36 h-8 ">Rental Sekarang</button>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            {/* CARD MOTOR 2 */}
                            <div className=" mt-3 ">
                                <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap-4 mb-6 ">
                                    <img src={smash} className='h-28 scale-110 object-contain' />
                                    <div className="mt-5 pr-5">
                                        <h1 className='font-Montserrat text-blue-700 font-extrabold'>Smash 2016</h1>
                                        <span className="font-Montserrat text-blue-700 ">Rp 55.000/hari</span>
                                        <div className="flex gap-1 ">
                                            <img src={time} className="h-3 mt-2.5 " />
                                            <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                        </div>
                                        <button className="bg-blue-700 mt-1 mb-3 rounded-2xl text-white w-36 h-8 ">Rental Sekarang</button>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            {/* CARD MOTOR 4 */}
                            <div className=" mt-3 ">
                                <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap-3 mb-6 ">
                                    <img src={nex} className='h-28 scale-110 ' />
                                    <div className="mt-5 pr-5">
                                        <h1 className='font-Montserrat text-blue-700 font-extrabold'>Nex 2019</h1>
                                        <span className="font-Montserrat text-blue-700 ">Rp 80.000/hari</span>
                                        <div className="flex gap-1 ">
                                            <img src={time} className="h-3 mt-2.5 " />
                                            <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                        </div>
                                        <button className="bg-blue-700 mt-1 mb-3 rounded-2xl text-white w-36 h-8 ">Rental Sekarang</button>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>


            </div>
        </>
    )

};

export default Katalog; 
