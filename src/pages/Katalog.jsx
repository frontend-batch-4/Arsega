import React from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import bglogo from '../assets/BigLogo.png'
import klndr from '../assets/kalender.png'
import time from '../assets/Time.png'
// HONDA
import lghonda from '../assets/LgHonda.png'
import vario from '../assets/vario.png'
import beat from '../assets/Group_Beat.png'
import pcx from '../assets/PCX.png'
import street from '../assets/street.png'
import cbr from '../assets/cbr.png'
import cb from '../assets/cb150r.png'
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
                <h1 className=' absolute text-center text-blue-700 font-Montserrat text-3xl font-extrabold mt-3'>PRICE LIST KATALOG MOTOR</h1>
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
                    {/* HONDA */}
                    <SplideSlide>
                        {/*HONDA */}
                        {/* CARD MOTOR 1*/}
                        <div className=" mt-3  ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap- mb-6 ">
                                <img src={beat} className='h-36 -mt-1' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold '>Beat 2016</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 60.000/hari</span>
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
                                <img src={vario} className='h-32' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>Vario 150 2018</h1>
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
                    <SplideSlide>
                        {/* CARD MOTOR 3 */}
                        <div className=" mt-3 ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap-4 mb-6 ">
                                <img src={pcx} className='h-32 scale-110  ' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>PCX 2023</h1>
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
                        {/* CARD MOTOR 4 */}
                        <div className=" mt-3 ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap-4 mb-6 ">
                                <img src={street} className='h-32 scale-110 ' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>Beat Street 2016</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 65.000/hari</span>
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
                        {/* CARD MOTOR 5 */}
                        <div className=" mt-3 ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap-4 mb-6 ">
                                <img src={cbr} className='h-28 scale-110 container -mx-1 ' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>CBR150R 2021</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 150.000/hari</span>
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
                        {/* CARD MOTOR 6 */}
                        <div className=" mt-3 ">
                            <div className="flex flex-row rounded-lg m-3 shadow-xl object-contain items-center pl-8 gap-6 mb-6 ">
                                <img src={cb} className='h-28 scale-125 ' />
                                <div className="mt-5 pr-5">
                                    <h1 className='font-Montserrat text-blue-700 font-extrabold'>CB 150R 2021</h1>
                                    <span className="font-Montserrat text-blue-700 ">Rp 150.000/hari</span>
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

            {/* CAROUSEL 2 YAMAHA */}
            <img src={lgyamaha} className='h-8 relative top-5 ml-8' />
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
