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


const Home = () => {
    return (

        <>
            {/* // SECTION 1 */}
            <div className='flex flex-col items-center mt-1 md:flex-row  md:justify-stretch   '>
                <div className="w-64 md:w-96 object-contain order-1 md:order-2 ">
                    <img src={Mtr} className="" />
                </div>
                <div className='flex justify- mt-5 flex-col items-center md:items-start md:order-1 order-2 md:ps-8  '>
                    <h1 className="font-bold pt-1 text-4xl md:text-7xl font-Montserrat  text-center text-[#3D55AC] md:text-left md:    ">ARSEGA <br /> RENTAL MOTOR</h1>
                    <h1 className=" font-light mb-3  ">Melayani dengan setulus hati</h1>
                    <button className="bg-blue-500 rounded-full hover:bg-blue-800 font-Montserrat font-extrabold px-3 py-2 text-white mb-4 ">RENTAL SEKARANG</button>
                </div>
            </div>
            {/* SECTION LOGO */}
            <section className="bg-blue-100 py-6 justify-center flex flex-wrap mt-9 items-center gap-4 md:justify-evenly">
                <img src={honda} className="h-8 md:h-10 object-contain" />
                <img src={ymha} className="h-8 md:h-10  object-contain" />
                <img src={pgio} className="h-8 md:h-10  object-contain" />
                <img src={szk} className="h-8 md:h-10  object-contain" />
                <img src={kwski} className="h-8 md:h-10  object-contain" />
            </section>
            {/* SECTION ALASAN */}
            <div className=" mt-3">
                <h3 className=" font-Montserrat font-bold text-1xl text-[#3D55AC] text-center py-3 underline ">INI 5 ALASAN MENGAPA KAMU HARUS RENTAL DI ARSEGA</h3>
                <img src={mtrals} className='h-30 object-contain items-center px-7' />
                <div className="py-5 ">
                    <h1 className="font-Montserrat font-bold text-left text-[#3D55AC] ">Pilihan motor yang beragam.</h1>
                    <p className="font-light text-black">Pilihan motor yang beragam.
                        Arsega menyediakan berbagai pilihan motor, mulai dari motor bebek, motor matic, hingga motor sport. Kamu bisa memilih motor sesuai dengan kebutuhan dan budget kamu.</p>
                </div>
            </div>
            <div className=" mt-3">

                <img src={money} className='h-30 object-contain items-center px-12' />
                <div className="py-5 ">
                    <h1 className="font-Montserrat font-bold text-left text-[#3D55AC] ">Harga yang terjangkau.</h1>
                    <p className="font-light text-black">Arsega menawarkan harga yang terjangkau untuk semua jenis motor. Kamu bisa mendapatkan motor dengan harga mulai dari Rp50.000 per hari.</p>
                </div>
            </div>
            <div className=" mt-3">
                <img src={time} className='h-25 object-contain items-center px-14' />
                <div className="py-5 ">
                    <h1 className="font-Montserrat font-bold text-left text-[#3D55AC] ">Layanan 24JAM.</h1>
                    <p className="font-light text-black">Arsega memiliki tim yang profesional dan berpengalaman. Mereka akan membantu kamu memilih motor yang sesuai dan memberikan layanan yang memuaskan..</p>
                </div>
            </div>
            <div className=" mt-3">
                <img src={nyaman} className='h-30 object-contain items-center px-12' />
                <div className="py-5 ">
                    <h1 className="font-Montserrat font-bold text-left text-[#3D55AC] ">Jaminan Kenyamanan.</h1>
                    <p className="font-light text-black">Arsega memberikan jaminan keamanan untuk semua motor yang disewakan. Semua motor sudah di service dan terdapat kunci ganda demi menopang keamanan dan kenyamanan berkendara anda.</p>
                </div>
            </div>
            <section>

            </section>

        </>

    )
};

export default Home;