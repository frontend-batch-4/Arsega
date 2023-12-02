import '@splidejs/react-splide/css';
import { Splide, SplideSlide, } from '@splidejs/react-splide';
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
    const SplideOptions = {
        rewind: true,
        gap: '1rem',
        width: '100%',
        speed: 400,
        arrows: true,
        pagination: false,
        breakpoints: {
            640: {
                perPage: 1,

            },
            768: {
                perPage: 3,
                
            },
            1900: {
                perPage: 4,
                gap: '1rem',
                
            },
        },
    }

    return (
        <>

            {/* SECTION 1 */}
            <div className='w-full  flex  justify-between  bg-white shadow-xl border'>
                <h2 className='self-center w-full absolute text-center text-blue-700 font-Montserrat text-4xl font-extrabold mt-3 max-sm:text-3xl'>PRICE LIST KATALOG MOTOR</h2>
                <img src={bglogo} className='h-[95px]' />
                <img src={bglogo} className='h-[95px]' />
                <img src={bglogo} className='h-[95px]' />
                <img src={bglogo} className='h-[95px]' />
                <img src={bglogo} className='h-[95px]' />
                <img src={bglogo} className='h-[95px]' />
                <img src={bglogo} className='h-[95px]' />
                <img src={bglogo} className='h-[95px]' />
                <img src={bglogo} className='h-[95px]' />
                <img src={bglogo} className='h-[95px]' />
                <img src={bglogo} className='h-[95px]' />
                <img src={bglogo} className='h-[95px]' />
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
                    options={SplideOptions}>
                    {/* HONDA */}
                    <SplideSlide>
                        {/* CARD MOTOR 1*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 mb-6 md:flex-col py-4 ">
                                <img src={beat} className='h-32 scale-100' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Beat 2016</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white p-2 block"
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 2*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 mb-6 md:flex-col py-4 ">
                                <img src={vario} className='h-32 scale-100' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Aerox 2018</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white p-2 block"
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 3*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 mb-6 md:flex-col py-4 ">
                                <img src={pcx} className='h-32 scale-100' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Aerox 2018</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white p-2 block"
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 4*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 mb-6 md:flex-col py-4 ">
                                <img src={street} className='h-32 scale-100' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Aerox 2018</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white p-2 block"
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 5*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 mb-6 md:flex-col py-4 ">
                                <img src={cbr} className='h-32 scale-100' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Aerox 2018</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white p-2 block"
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 6*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 mb-6 md:flex-col py-4 ">
                                <img src={cb} className='h-32 scale-100' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Aerox 2018</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white p-2 block"
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
                <Splide options={SplideOptions} >
                    {/* YAMAHA */}
                    <SplideSlide>
                        {/* CARD MOTOR 1*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 mb-6 md:flex-col py-4 ">
                                <img src={aerox} className='h-32 scale-100' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Aerox 2018</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white p-2 block"
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 2*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 mb-6 md:flex-col py-4 ">
                                <img src={nmax} className='h-32 scale-100' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Nmax 2018</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white p-2 block"
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {/* CARD MOTOR 3*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 mb-6 md:flex-col py-4 ">
                                <img src={m3} className='h-32 scale-100' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Mio M3 2018</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 100.000/hari</span>
                                    <div className="flex gap-1 ">
                                        <img src={time} className="h-3 mt-2.5 " />
                                        <p className=" font-extralight text-xs py-2">24 jam/7 Hari/30 Hari</p>
                                    </div>
                                    <NavLink
                                        to="/pemesanan"
                                        className="bg-blue-700 rounded-2xl text-white p-2 block"
                                    >
                                        Rental Sekarang
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    
                </Splide>
            </div>

            {/* CAROUSEL 3 SUZUKI */}
            <img src={lgsuzuki} className='h-7 relative top-5 ml-8' />
            <div className="mt-3  rounded-md  ">
                <Splide options={SplideOptions}>
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

            {/* CAROUSEL 4 Piaggio */}
            <img src={lgpiagio} className='h-10 relative top-5 ml-8' />
            <div className="mt-3  rounded-md  ">
                <Splide options={SplideOptions}>
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



        </>
    )

};

export default Katalog; 
