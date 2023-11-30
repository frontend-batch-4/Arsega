import React from 'react';
import honda from '../assets/Logo_honda3.png'
import ymha from '../assets/Logo_yamaha1.png'
import pgio from '../assets/Logo_piaggio1.png'
import szk from '../assets/Logo_suzuki1.png'
import kwski from '../assets/Logo_kawasaki1.png'
import mtrals from '../assets/MTRALASAN.png'
const FAQS = () => {
    return (
        <>
            <div className='py-3 shadow-xl'>
                <h1 className="font-Montserrat text-center font-bold text-blue-800 text-4xl">FAQS</h1>
            </div>
            <section className=" py-6 justify-center flex flex-wrap  items-center gap-6 md:justify-evenly">
                <img src={honda} className="h-8 md:h-10 object-contain" />
                <img src={ymha} className="h-8 md:h-10  object-contain" />
                <img src={pgio} className="h-8 md:h-10  object-contain" />
                <img src={szk} className="h-8 md:h-10  object-contain" />
                <img src={kwski} className="h-8 md:h-10  object-contain" />
            </section>

            <div className="">
                <p className="font-extralight text-center">Selamat datang di Arsegarent, kenyamanan <br />
                    dan keamanan anda adalah prioritas kami</p>
                    <img src={mtrals} className='p-10'/>
            </div>

            
        </>
    )
};

export default FAQS;