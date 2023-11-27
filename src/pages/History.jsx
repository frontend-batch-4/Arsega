import React from "react";
import { NavLink } from "react-router-dom";

const History = () => {
    return (
        <>
            {/* HEADER */}
            <div className="w-full flex justify-center bg-white shadow-lg py-7">
                <h1 className="font-Montserrat text-[#3D55AC] font-bold text-2xl text-center">RIWAYAT <br /> PEMESANAN</h1>
            </div>

            <div className="p-6">
                <h1 className="font-Montserrat font-bold">PESANAN</h1>
                <p className="font-Montserrat font-light text-xs py-2">INVOICE</p>
                <div className="flex justify-between mr-14 ">
                    <h1 className="">gambar</h1>
                    <div className="flex flex-col">
                        <h1 className="">DATA PEMESAN</h1>
                        <img src="" />
                        <p className="">Nama</p>
                        <img src="" />
                        <p className="">Nomor HP</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default History;