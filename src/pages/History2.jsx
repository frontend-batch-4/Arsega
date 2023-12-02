import React from "react";
import { NavLink } from "react-router-dom";
import vario from "../assets/Vario1.png"
import bglogo from "../assets/BigLogo.png"

const history2 = () => {
    return (
        <>
            {/* HEADER */}
            <div className="w-full  flex  justify-center  bg-white shadow-xl border">
                <h1 className="absolute text-center text-blue-700 font-Montserrat text-[23px] font-extrabold mt-3 max-sm:text-3xl">RIWAYAT <br /> PEMESANAN</h1>
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
                <img src={bglogo} className='h-[80px]' />
            </div>

            <div className="justify-evenly flex md:justify-around">
                <div className="w-">
                    <h1 className="font-Montserrat font-bold">PESANAN</h1>
                    <p className="font-Montserrat font-light text-xs py-2">INVOICE</p>
                    <div className="flex justify-between  ">
                        <img src={vario} className="h-28 md:h-48 " />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="  flex flex-col justify-center gap-2.5 ">
                        <div className="bg-slate-200 p-5 shadow-lg mt-6 rounded-md">
                            <h1 className="font-Montserrat font-extrabold ">DATA PEMESAN </h1>
                            <p className="">Nama</p>
                            <p className="">Nomor HP</p>
                            <p className="">Nomor HP</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* NOTA */}
            <div className="px-10 py-6">
                <h1 className="font-Montserrat  text-xs"><span className="font-bold">Jenis</span>  : Vario 150 2021</h1>
                <h1 className="font-Montserrat  text-xs"><span className="font-bold">Harga</span>  : Rp 100.000/Hari</h1>
                <h1 className="font-Montserrat  text-xs"><span className="font-bold">Tanggal Rental</span>  : 4 Okt 2023 - 7 Okt 2023 </h1>
            </div>
            <div className="px-5 ">
                <div className="border-t-2">
                    <div className="flex justify-around mt-3">
                        <h1 className="font-Montserrat  text-xs"><span className="font-bold">Subtotal</span></h1>
                        <h1 className="font-Montserrat  text-xs"> : Rp 400.000</h1>
                    </div>
                </div>
            </div>
            <div className="px-5 ">
                <div className="">
                    <div className="flex justify-around mt-3">
                        <h1 className="font-Montserrat  text-xs"><span className="font-bold">Total</span></h1>
                        <h1 className="font-Montserrat  text-xs"> : Rp 400.000</h1>
                    </div>
                </div>
            </div>

            <div className="pl-10 mt-5 flex justify-between pb-3 ">
                <div className="">
                    <h1 className="font-Montserrat font-bold">S&K</h1>
                    <li className="font-Montserrat font-normal text-xs">KTP</li>
                    <li className="font-Montserrat font-normal text-xs">Duit Pas</li>
                    <li className="font-Montserrat font-normal text-xs">SIM</li>
                </div>
                <div className="grid justify-items-end pr-10 p-5 top-4 relative ">
                    <button className="bg-[#3D55AC] text-white w-24 font-bold rounded-2xl ">UNDUH</button>
                </div>
            </div>
        </>
    );
};
export default history2;