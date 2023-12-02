import React from 'react';
import honda from '../assets/Logo_honda3.png'
import ymha from '../assets/Logo_yamaha1.png'
import pgio from '../assets/Logo_piaggio1.png'
import szk from '../assets/Logo_suzuki1.png'
import kwski from '../assets/Logo_kawasaki1.png'
import mtrals from '../assets/MTRALASAN.png'
import arrow from '../assets/ArrowArcodion.png'
import bglogo from '../assets/BigLogo.png'

import { Accordion, Collapse } from 'react-daisyui';
const FAQS = () => {
    return (
        <>
            {/* // SECTION 1 */}
            <div className='w-full  flex  justify-between  bg-white shadow-xl   '>
                <h2 className='self-center w-full absolute text-center text-blue-700 font-Montserrat text-4xl font-extrabold mt-3 max-sm:text-3xl'>FAQS</h2>
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

            <div className="max-sm:hidden">
                <section className="py-6 justify-center flex flex-wrap mt-3 items-center gap-6 md:justify-evenly">
                    <img src={honda} className="h-8 md:h-10 object-contain" />
                    <img src={ymha} className="h-8 md:h-10  object-contain" />
                    <img src={pgio} className="h-8 md:h-10  object-contain" />
                    <img src={szk} className="h-8 md:h-10  object-contain" />
                    <img src={kwski} className="h-8 md:h-10  object-contain" />
                </section>
                <p className="text-center font-Montserrat font-light text-3xl  pt-3 pb-3 mt-3">Selamat datang di Arsegarent, kenyamanan <br /> dan keamanan anda adalah prioritas kami</p>
                <div className="grid justify-center p-20">
                    <img src={mtrals} className=" object-contain items-center h-96  " />
                </div>

                {/* //SECTION 2 */}

                <div className=" flex justify-center ">
                    <div className=" w-1/2 ">
                        <Collapse.Details  >
                            <Collapse.Details.Title className="text-xl font-Montserrat font-bold  bg-[#3D55AC] text-white " >
                                <div className="flex justify-between">
                                    Bagaimana sistem pembayaran sewa motornya?
                                    <img src={arrow} className='' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className=' text-justify text-xl'>
                                <p>Anda bisa melakukan pembayaran dengan DP dan pelunasan saat serah terima kendaraan, atau bisa juga pembayaran full-payment pada saat serah terima motor ditempat.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                        <Collapse.Details className='mt-2'>
                            <Collapse.Details.Title className="text-xl font-Montserrat font-bold bg-[#3D55AC] text-white   ">
                                <div className="flex justify-between">
                                    Bagaimana jika saya mau sewa motor untuk satu/  dua minggu ke depan?
                                    <img src={arrow} className='h-[29px] w-[26px] top-3 relative' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className='text-justify text-xl'>
                                <p>Silahkan mengisi form booking yang sudah kami sediakan, lalu mentransfer DP untuk tanda jadi dan kami akan mem-blok kendaraan yang anda pilih di tanggal yang anda tentukan.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                        <Collapse.Details className='mt-2'>
                            <Collapse.Details.Title className="text-xl font-Montserrat font-bold  bg-[#3D55AC] text-white   ">
                                <div className="flex justify-between">
                                    Apakah saya harus konfirmasi ulang setelah melakukan booking?
                                    <img src={arrow} className='h-[29px] w-[26px] top-3 relative' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className='text-justify text-xl'>
                                <p>Pemesanan anda bersifat Instant Confirmation. Sehingga anda tidak perlu mengkonfirmasi ulang pemesanan anda kepada kami. Team kami yang akan segera mengkonfirmasi kepada anda setelah data kami terima, baik itu melalui telepon, chat, sms, email ataupun via form website.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                        <Collapse.Details className='mt-2' >
                            <Collapse.Details.Title className="text-xl font-Montserrat font-bold  bg-[#3D55AC] text-white   ">
                                <div className="flex justify-between">
                                    Apakah ada biaya untuk layanan antar-jemput?
                                    <img src={arrow} className='' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className='text-justify text-xl'>
                                <p>Untuk area / wilayah Jogja kami berikan FREE untuk biaya antar-jemput. Untuk wilayah diluar yang kami sebutkan, maka biaya antar-jemput di sesuaikan dengan jauhnya lokasi pengantaran / penjemputan.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                        <Collapse.Details className='mt-2'>
                            <Collapse.Details.Title className="text-xl font-Montserrat font-bold  bg-[#3D55AC] text-white   ">
                                <div className="flex justify-between">
                                    Apakah saya bisa merubah waktu sewa / ubah  lokasi pengambilan?
                                    <img src={arrow} className='h-[29px] w-[26px] top-3 relative' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className='text-justify text-xl'>
                                <p>Bisa, segera beritahukan kepada kami paling tidak satu hari sebelumnya, sehingga kami dapat merubah jadwal sewa / mempersiapkan penjemputan tepat waktu.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                        <Collapse.Details className='mt-2 mb-10' >
                            <Collapse.Details.Title className="text-xl font-Montserrat font-bold  bg-[#3D55AC] text-white   ">
                                <div className="flex justify-between">
                                    Apakah ada denda untuk keterlambatan pengembalian?
                                    <img src={arrow} className='h-[29px] w-[26px] top-3 relative' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className='text-justify text-xl'>
                                <p>Keterlambatan pengembalian jika masih 1 jam masih kami maklumi, namun jika lebih dari 1 jam maka akan kami kenakan denda minimal IDR 10.000,- /jam (tergantung jenis motornya), dan apabila keterlambatan lebih dari 3 jam maka akan kami kenakan denda sewa 1 hari.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                    </div>
                </div>

            </div>


            {/* MOBILE */}
            <div className="md:hidden">
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
                    <img src={mtrals} className='p-10' />
                </div>


                <div className=" flex justify-center ">
                    <div className="  ">
                        <Collapse.Details  >
                            <Collapse.Details.Title className="text-xs font-Montserrat font-bold  bg-[#3D55AC] text-white " >
                                <div className="flex justify-between">
                                    Bagaimana sistem pembayaran sewa motornya?
                                    <img src={arrow} className='' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className=' text-justify text-xs'>
                                <p>Anda bisa melakukan pembayaran dengan DP dan pelunasan saat serah terima kendaraan, <br /> atau bisa juga pembayaran full-payment pada saat serah terima motor ditempat.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                        <Collapse.Details className='mt-2'>
                            <Collapse.Details.Title className="text-xs font-Montserrat font-bold bg-[#3D55AC] text-white   ">
                                <div className="flex justify-between">
                                    Bagaimana jika saya mau sewa motor untuk satu/  dua minggu ke depan?
                                    <img src={arrow} className='h-[29px] w-[26px] top-3 relative' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className='text-justify text-xs'>
                                <p>Silahkan mengisi form booking yang sudah kami sediakan, lalu mentransfer DP untuk tanda jadi dan kami akan mem-blok kendaraan yang anda pilih di tanggal yang anda tentukan.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                        <Collapse.Details className='mt-2'>
                            <Collapse.Details.Title className="text-xs font-Montserrat font-bold  bg-[#3D55AC] text-white   ">
                                <div className="flex justify-between">
                                    Apakah saya harus konfirmasi ulang setelah melakukan booking?
                                    <img src={arrow} className='' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className='text-justify text-xs'>
                                <p>Pemesanan anda bersifat Instant Confirmation. Sehingga anda tidak perlu mengkonfirmasi ulang pemesanan anda kepada kami. Team kami yang akan segera mengkonfirmasi kepada anda setelah data kami terima, baik itu melalui telepon, chat, sms, email ataupun via form website.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                        <Collapse.Details className='mt-2' >
                            <Collapse.Details.Title className="text-xs font-Montserrat font-bold  bg-[#3D55AC] text-white   ">
                                <div className="flex justify-between">
                                    Apakah ada biaya untuk layanan antar-jemput?
                                    <img src={arrow} className='' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className='text-justify text-xs'>
                                <p>Untuk area / wilayah Jogja kami berikan FREE untuk biaya antar-jemput. Untuk wilayah diluar yang kami sebutkan, maka biaya antar-jemput di sesuaikan dengan jauhnya lokasi pengantaran / penjemputan.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                        <Collapse.Details className='mt-2'>
                            <Collapse.Details.Title className="text-xs font-Montserrat font-bold  bg-[#3D55AC] text-white   ">
                                <div className="flex justify-between">
                                    Apakah saya bisa merubah waktu sewa / ubah  lokasi pengambilan?
                                    <img src={arrow} className='' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className='text-justify text-xs'>
                                <p>Bisa, segera beritahukan kepada kami paling tidak satu hari sebelumnya, sehingga kami dapat merubah jadwal sewa / mempersiapkan penjemputan tepat waktu.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                        <Collapse.Details className='mt-2 mb-10' >
                            <Collapse.Details.Title className="text-xs font-Montserrat font-bold  bg-[#3D55AC] text-white   ">
                                <div className="flex justify-between">
                                    Apakah ada denda untuk keterlambatan pengembalian?
                                    <img src={arrow} className='' />
                                </div>
                            </Collapse.Details.Title>
                            <Collapse.Content className='text-justify text-xs'>
                                <p>Keterlambatan pengembalian jika masih 1 jam masih kami maklumi, namun jika lebih dari 1 jam maka akan kami kenakan denda minimal IDR 10.000,- /jam (tergantung jenis motornya), dan apabila keterlambatan lebih dari 3 jam maka akan kami kenakan denda sewa 1 hari.</p>
                            </Collapse.Content>
                        </Collapse.Details>
                    </div>
                </div>

            </div>


        </>
    )
};

export default FAQS;