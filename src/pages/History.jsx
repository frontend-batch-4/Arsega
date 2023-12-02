import React from "react";
import { NavLink } from "react-router-dom";
import vario from "../assets/Vario1.png"
import bglogo from "../assets/BigLogo.png"


const History = () => {
    return (
        <>
            <div className="">
                {/* HEADER */}
                <div className="w-full flex justify-center  bg-white shadow-xl border ">
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

                <div className="md:flex md:justify-center md">
                    <div className="md:flex flex-col md:items-center md:mt-10 rounded-3xl md:bg-blue-100 md:w-1/4 md:shadow-blue-400 shadow-xl">
                        <div className="justify-evenly flex   ">
                            <div className="p-2 md:">
                                <h1 className="font-Montserrat font-bold">PESANAN</h1>
                                <p className="font-Montserrat font-light text-xs py-2">INVOICE</p>
                                <div className="flex justify-between  ">
                                    <img src={vario} className="object-contain" />
                                </div>
                            </div>
                            {/* DATA PEMESAN */}
                            <div className="flex justify-end ">
                                <div className="bg-slate-200 shadow-lg p-5 w-48  mt-6 rounded-md">
                                    <h1 className="font-Montserrat font-extrabold text-blue-900 underline ">DATA PEMESAN </h1>
                                    <p className="text-sm "> Seli Agalista Harahap</p>
                                    <p className="text-sm"> 089623456789</p>
                                    <p className="text-sm"> Jl. Pleret No 05, Banguntapan Bantul.  Daerah Istimewa Yogyakarta</p>
                                </div>
                            </div>
                        </div>

                        {/* NOTA */}
                        <div className="px-10 py-6 md:text-center md:bg-blue-100">
                            <h1 className="font-Montserrat  text-xs"><span className="font-bold">Jenis</span>  : Vario 150 2021</h1>
                            <h1 className="font-Montserrat  text-xs"><span className="font-bold">Harga</span>  : Rp 100.000/Hari</h1>
                            <h1 className="font-Montserrat  text-xs"><span className="font-bold">Tanggal Rental</span>  : 4 Okt 2023 - 7 Okt 2023 </h1>
                        </div>
                    </div>
                </div>

                <div className="md:my-6">
                    <div className="px-5">
                        <div className="border-t-2">
                            <div className="flex justify-around mt-3">
                                <h1 className="font-Montserrat  text-xs"><span className="font-bold">Subtotal</span></h1>
                                <h1 className="font-Montserrat  text-xs"> : Rp 400.000</h1>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 mb-3">
                        <div className="border-b-2">
                            <div className="flex justify-around mb-3">
                                <h1 className="font-Montserrat  text-xs"><span className="font-bold">Shipping Fee</span></h1>
                                <h1 className="font-Montserrat  text-xs pr-5"> : Rp 10.000</h1>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 ">
                        <div className="">
                            <div className="flex justify-around mt-3">
                                <h1 className="font-Montserrat  text-xs"><span className="font-bold">Total</span></h1>
                                <h1 className="font-Montserrat  text-xs"> : Rp 410.000</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 3 */}
                <div className="pl-10 mt-3 flex justify-between pb-3 md:justify-around">
                    <div className="">
                        <h1 className="font-Montserrat font-bold">S&K</h1>

                        <li className="font-Montserrat font-normal text-xs">KTP</li>
                        <li className="font-Montserrat font-normal text-xs">SIM</li>

                    </div>
                    <div className="grid justify-items-end pr-10 p-5 top-4 relative ">
                        <button className="bg-[#3D55AC] text-white w-24 h-10 font-bold rounded-2xl ">UNDUH</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default History;