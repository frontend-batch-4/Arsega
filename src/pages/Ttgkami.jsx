import React from 'react';
import honda from '../assets/Logo_honda3.png'
import ymha from '../assets/Logo_yamaha1.png'
import pgio from '../assets/Logo_piaggio1.png'
import szk from '../assets/Logo_suzuki1.png'
import kwski from '../assets/Logo_kawasaki1.png'
import mtrals from '../assets/MTRALASAN.png'
import { Accordion } from 'react-daisyui';
const Ttgkami = () => {
    return (
        <>
            <div className='p-8 shadow-xl'>
                <h1 className="font-Montserrat text-center text-blue-800 text-3xl font-bold">SIAPA KAMI?</h1>
            </div>
            <section className=" py-12 justify-center flex flex-wrap  items-center gap-6 md:justify-evenly">
                <img src={honda} className="h-8 md:h-10 object-contain" />
                <img src={ymha} className="h-8 md:h-10  object-contain" />
                <img src={pgio} className="h-8 md:h-10  object-contain" />
                <img src={szk} className="h-8 md:h-10  object-contain" />
                <img src={kwski} className="h-8 md:h-10  object-contain" />
            </section>

            <div className="">
                <p className="font-extralight text-center">Selamat datang di Arsegarent, kenyamanan <br />
                    dan keamanan anda adalah prioritas kami</p>
                <img src={mtrals} className='p-10' />
            </div>

            <div className="font-Montserrat pl-3 p-3 text-justify  m-2 "> <span className='font-bold'> Kami adalah solusi terbaik</span> untuk semua kebutuhan sewa motor Anda.
                Dengan pengalaman lebih dari 2 tahun di industri ini, kami telah memahami betul apa yang Anda butuhkan ketika datang ke penyewaan motor.
                Kami bangga menjadi mitra andal bagi pelanggan kami dalam menjelajahi yogyakarta dan sekitarnya dengan mudah dan kenyamanan.
            </div>
            <div className="font-Montserrat pl-3 py-4 p-3 text-justify m-2"> <span className='font-bold'> Apa yang membedakan kami </span> dari yang lain adalah komitmen kami terhadap kualitas dan kepuasan pelanggan. Setiap motor dalam armada kami dijaga dengan baik dan selalu dalam kondisi terbaik. Tim kami yang berpengalaman siap memberikan panduan, rekomendasi, dan bantuan teknis jika diperlukan. Kami selalu berusaha untuk memberikan pengalaman menyenangkan dan aman kepada pelanggan kami.
            </div>
            <div className="font-Montserrat pl-3 py-4 p-3 text-justify m-2"> <span className='font-bold'>Terima kasih telah memilih kami </span> sebagai pilihan Anda dalam penyewaan motor. Kami sangat senang dapat melayani Anda dan berharap dapat membantu Anda menjelajahi [lokasi] dengan cara yang paling nyaman dan efisien. Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan. Kami siap memberikan layanan terbaik untuk Anda.
            </div>

        </>
    )
};

export default Ttgkami;