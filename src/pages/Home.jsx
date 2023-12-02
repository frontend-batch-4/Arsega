import React from 'react';
import Mtr from '../assets/MotorMenu.png'
import honda from '../assets/Logo_honda3.png'
import ymha from '../assets/Logo_yamaha1.png'
import pgio from '../assets/Logo_piaggio1.png'
import szk from '../assets/Logo_suzuki1.png'
import kwski from '../assets/Logo_kawasaki1.png'
import mtrals from '../assets/MTRALASAN.png'
import money from '../assets/money.png'
import time from '../assets/24jam.png'
import loc from '../assets/Loc.png'
import nyaman from '../assets/kenyamanan.png'
import { Footer } from 'flowbite-react';
import { NavLink } from 'react-router-dom';




const Home = () => {
    return (

        <>
            {/* // SECTION 1 */}
            <div className='flex flex-col items-center mt-1 md:flex-row  md:justify-around  '>
                <div className="w-64 md:w-96 object-contain order-1 md:order-2 ">
                    <img src={Mtr} className="p-5 md:p-0 " />
                </div>
                <div className='flex justify- mt-5 flex-col items-center md:items-start md:order-1 order-2 md:ps-8 md:max-w-3xl '>

                    <h1 className="font-bold pt-1 text-4xl md:text-7xl font-Montserrat  text-center text-[#3D55AC] md:text-left md:font-extrabold">ARSEGA <br /> RENTAL MOTOR</h1>
                    <h1 className=" font-Montserrat mb-3 md:p-3 md:text-xl ">Melayani dengan setulus hati</h1>
                    <div className="transition ease-in-out delay-150">
                    <NavLink
                        to="/katalog"
                        className="bg-[#3D55AC] rounded-lg hover:bg-blue-800 font-Montserrat font-extrabold px-3 py-2 text-white mb-4 md:p-4 transition ease-in-out delay-150 "
                    >
                        RENTAL SEKARANG
                    </NavLink>
                    </div>

                </div>
            </div>
            
            {/* SECTION LOGO */}
            <section className="bg-blue-100 py-6 justify-center flex flex-wrap mt-9 items-center gap-4 md:justify-evenly">
                <img src={honda} className="h-8 md:h-16 object-contain" />
                <img src={ymha} className="h-8 md:h-16  object-contain" />
                <img src={pgio} className="h-8 md:h-16  object-contain" />
                <img src={szk} className="h-8 md:h-16  object-contain" />
                <img src={kwski} className="h-8 md:h-16  object-contain" />
            </section>
            {/* SECTION ALASAN */}
            <div className=" mt-6 md:mt-10  ">
                <h3 className=" font-Montserrat font-bold text-1xl text-[#3D55AC] text-center py-3 underline md:text-4xl ">INI 5 ALASAN MENGAPA KAMU <br /> HARUS RENTAL DI ARSEGA</h3>

                {/* MOTOR */}
                <div className="md:flex md:justify-evenly md:mt-10">
                    <img src={mtrals} className='h-30 object-contain items-center px-7 md:max-h-96' />
                    <div className="py-5  md:text-justify md:w-2/4 md:mr-10 md:text-4xl md:mt-10">
                        <h1 className="font-Montserrat font-bold text-left text-[#3D55AC] ">Pilihan motor yang beragam.</h1>
                        <p className="font-light text-black md:text-[32px]">Pilihan motor yang beragam.
                            Arsega menyediakan berbagai pilihan motor, mulai dari motor bebek, motor matic, hingga motor sport. Kamu bisa memilih motor sesuai dengan kebutuhan dan budget kamu.</p>
                    </div>
                </div>
            </div>

            {/* MONEY */}
            <div className=" mt-3 md:flex md:justify-between md:order-2 md:relative  ">
                <img src={money} className='h-30 object-contain items-center px-12 md:order-1 md:h-96 md:scale-125 md:px-0 md:relative md:-top-10' />
                <div className="py-5  md:text-justify md:w-2/4 md:m-10 md:text-4xl md:pl-10">
                    <h1 className="font-Montserrat font-bold text-left text-[#3D55AC] ">Harga yang terjangkau.</h1>
                    <p className="font-light text-black md:text-[32px]">Arsega menawarkan harga yang terjangkau untuk semua jenis motor. Kamu bisa mendapatkan motor dengan harga mulai dari Rp50.000 per hari.</p>
                </div>
            </div>

            {/* JAM */}
            <div className=" mt-3 md:flex md:justify-evenly ">
                <img src={time} className='h-25 object-contain items-center px-14 md:h-96 md:justify-items-center' />
                <div className="py-5 md:text-justify md:w-2/4 md:mr-10 md:text-4xl md:mt-10 ">
                    <h1 className="font-Montserrat font-bold text-left text-[#3D55AC] ">Layanan 24JAM.</h1>
                    <p className="font-light text-black md:text-[32px]">Arsega memiliki tim yang profesional dan berpengalaman. Mereka akan membantu kamu memilih motor yang sesuai dan memberikan layanan yang memuaskan..</p>
                </div>
            </div>

            {/* SERVICES */}
            <div className=" mt-3 md:flex md:justify-evenly md:mb-16">
                <img src={nyaman} className='h-30 object-contain items-center px-12 md:order-2 md:h-96 md:scale-125' />
                <div className="py-5 md:text-justify md:w-2/4 md:mr-10 md:text-4xl md:mt-10 ">
                    <h1 className="font-Montserrat font-bold text-left text-[#3D55AC] ">Jaminan Kenyamanan.</h1>
                    <p className="font-light text-black md:text-[32px] ">Arsega memberikan jaminan keamanan untuk semua motor yang disewakan. Semua motor sudah di service dan terdapat kunci ganda demi menopang keamanan dan kenyamanan berkendara anda.</p>
                </div>
            </div>

            

        </>

    )
};

export default Home;