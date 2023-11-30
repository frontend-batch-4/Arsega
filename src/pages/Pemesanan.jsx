import React from "react";
import { NavLink } from 'react-router-dom';
import vario from '../assets/vario.png'
import duit from '../assets/Duit.png'
import clndr from '../assets/Calendar.png'
import motor from '../assets/LgMotor.png'
import bglogo from '../assets/BigLogo.png'


const Pemesanan = () => {
    return (
        <>

            {/* HEADER */}
            <div className="w-full  flex justify-center  bg-white shadow-xl border">
                <h1 className=" absolute text-center text-blue-700 font-Montserrat text-[28px] font-extrabold mt-5">PEMESANAN</h1>
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
            </div>

            {/* SECTION 1 */}
            <div className="py-5 pl-3 shadow-lg mb-10 md:w-1/2">
                <h1 className="text-start font-Montserrat text-[#3D55AC] font-semibold">Barang Yang Di rental</h1>

                {/* ISI */}
                <div className="rounded-xl flex justify-between py-5 mr-8 md:justify-normal ">
                    <img src={vario} className="h-28 md:h-40" />
                    <div className="py-4 flex flex-col rounded-md p-3 gap-2 md:text-3xl md:p-5">
                        <div className="flex gap-1.5 md:gap-3">
                            <img src={motor} className="h-4 md:h-6 mt-0.5" />
                            <h1 className="font-Montserrat text-[#3D55AC] font-bold md:pl-2.5 ">Vario 150 2021</h1>
                        </div>
                        <div className="flex gap-1.5 md:gap-3 md:">
                            <img src={duit} className="h-3 md:h-6 mt-1" />
                            <p className="font-Montserrat text-[#3D55AC] md:px-1">Rp 100.000/hari</p>
                        </div>
                        <div className="mt-2 text-xs ">
                            <div className="flex gap-1.5 -mt-2.5 md:gap-3">
                                <img src={clndr} className="h-4 md:h-6" />
                                <h3 className="text-[#3D55AC] md:pl-4 font-Montserrat  ">Tanggal Rental</h3>
                            </div>
                            <div className="pl-5 md:pl-9">
                                <p className="text-[#3D55AC] md:pl-4 text-[10px] font-Montserrat ">04 Okt 2023-07 Okt 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION2 */}
            <div className="pl-5">
                <h1 className="font-Montserrat font-semibold text-sm text-[#3D55AC]">Pengiriman dan Pembayaran</h1>
                <div className="flex flex-col ml-3 gap-y-5 bg-[#ECECEC] relative  ">
                </div>
            </div>

            {/* NAVLINK */}
            <div className="flex flex-col m-5 rounded-md  ">
                <NavLink
                    to="/pemesanan1"
                    className="bg-[#ECECEC] text-start font-Montserrat font-bold p-5 text-[#3D55AC]">Dianter Aja (Rp 10.000)
                </NavLink>
                <NavLink
                    to="/pemesanan2"
                    className="bg-[#ECECEC] text-start font-Montserrat font-bold p-5 text-[#3D55AC]">Tunai (Rp 400.000)
                </NavLink>
            </div>

            {/* CHECKOUT */}
            <div className="pl-6 mt-16 flex justify-between mb-10">
                <h5 className="font-Montserrat text-xs">Total Bayar</h5>
                <button className="bg-[#3D55AC] p-3 w-32 mr-6 rounded-xl font-Montserrat font-bold text-white ">CHECKOUT</button>
            </div>

        </>

    );
};
export default Pemesanan;