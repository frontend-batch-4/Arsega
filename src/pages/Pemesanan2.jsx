import React from "react";
import { NavLink } from 'react-router-dom';
import vario from '../assets/vario.png'
import duit from '../assets/Duit.png'
import clndr from '../assets/Calendar.png'
import motor from '../assets/LgMotor.png'

const Pemesanan2 = () => {
    return (
        <>
            {/* HEADER */}
            <div className="w-full flex justify-center bg-white shadow-lg py-7">
                <h1 className="font-Montserrat text-[#3D55AC] font-bold text-2xl">PEMESANAN</h1>
            </div>

            {/* SECTION 1 */}
            <div className="py-5 pl-3 shadow-lg mb-10">
                <h1 className="text-start font-Montserrat text-[#3D55AC] font-semibold">Barang Yang Di rental</h1>

                {/* ISI */}
                <div className="rounded-xl flex justify-between py-5 mr-8 ">
                    <img src={vario} className="h-28" />
                    <div className="py-4 flex flex-col rounded-md p-3 gap-2 ">
                        <div className="flex gap-1.5  ">
                            <img src={motor} className="h-4 mt-0.5" />
                            <h1 className="font-Montserrat text-[#3D55AC] font-semibold ">Vario 150 2021</h1>
                        </div>
                        <div className="flex gap-1.5">
                            <img src={duit} className="h-3 mt-1" />
                            <p className="font-Montserrat text-[#3D55AC]">Rp 100.000/hari</p>
                        </div>
                        <div className="mt-2 text-xs ">
                            <div className="flex gap-1.5 -mt-2.5">
                                <img src={clndr} className="h-4" />
                                <h3 className="text-[#3D55AC] font-Montserrat  ">Tanggal Rental</h3>
                            </div>
                            <div className="pl-5 ">
                                <p className="text-[#3D55AC] text-[10px] font-Montserrat ">04 Okt 2023-07 Okt 2023</p>
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
            <div className="pl-6 mt-16 flex justify-between mb-9">
                <div className="flex flex-col">
                <h5 className="font-Montserrat text-xs ">Total Bayar</h5>
                <h1 className="font-Montserrat font-bold text-lg text-[#3D55AC]">Rp 400.000</h1>
                </div>
                

                <button className="bg-[#3D55AC] p-3 w-32 mr-6 rounded-xl font-Montserrat font-bold text-white">CHECKOUT</button>
                
            </div>






        </>

    );
};
export default Pemesanan2;