import React from 'react';
import accountLg from '../assets/account.png';
import call from '../assets/call.png';
import loc from '../assets/location.png';

const Account = () => {
    return (
        <>
            <div className='bg-white w-full py-8  shadow-2xl'>
                <h1 className='text-center font-Montserrat text-4xl text-blue-700 font-extrabold'>PROFILE</h1>
            </div>

            <div className=" mt-16 flex justify-between">
                <img src={accountLg} className='ml-8 h-32' />
                <div className="w-1/2">
                    <h1 className="font-Montserrat font-extrabold text-blue-800">Seli Agalista Harahap </h1>
                    <div className="flex items-end gap-1 py-2">
                        <img src={call} className='h-5 mt-2' />
                        <p className="font-Montserrat text-sm text-blue-900 font-semibold">089623456789</p>
                    </div>
                    <div className="flex gap-1">
                        <img src={loc} className="h-7 mt-3" />
                        <p className="font-Montserrat text-sm text-blue-900 font-semibold">Jl. Pleret No 05, Banguntapan Bantul. Daerah Istimewa Yogyakarta</p>
                    </div>
                </div>
            </div>

            <div className="w-[325px] ml-7 bg-gray-200 mt-9 p-2 mb-5 rounded-md ">
                {/* REGISTER SECTION*/}
                <h1 className='text-center font-Montserrat font-extrabold text-blue-900 mt-5 '>DATA REGISTER</h1>
                <div className="flex pl-2.5 mt-4">
                    <h1 className="font-Montserrat font-semibold text-blue-900">NIK</h1>
                    <p className="font-Montserrat text-red-700">*</p>
                </div>
                {/* FORM */}
                {/* NIK */}
                <div className=" bg-slate-100 mt-1 ">
                    <input
                        type="number"
                        name="number"
                        id="number"
                        className="bg-white border rounded-lg focus:outline-blue-400 border-gray-300  pl-1 sm:text-sm rounded-  block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required=""
                    />

                </div>
                {/* ALAMAT */}
                <div className="mt-4">
                    <div className="flex pl-2.5">
                        <h1 className="font-Montserrat font-semibold text-blue-900">Alamat</h1>
                        <p className="font-Montserrat text-red-700">*</p>
                    </div>
                    <div className=" bg-slate-100 mt-1 ">
                        <input
                            type="text"
                            name="text"
                            id="text"
                            className="bg-white border rounded-lg focus:outline-blue-400 border-gray-300  pl-1 sm:text-sm rounded-  block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required=""
                        />
                    </div>
                </div>
                {/* KTP */}
                <div className="mt-4">
                    <div className="flex pl-2.5">
                        <h1 className="font-Montserrat font-semibold text-blue-900 ">Unggah KTP/SIM/Kartu Pelajar</h1>
                        <p className="font-Montserrat text-red-700">*</p>
                    </div>
                    <div className=" bg-slate-100 mt-1 ">
                        <input
                            type="file"
                            name="file"
                            id="file"
                            className="bg-white border rounded-lg focus:outline-blue-400 border-gray-300  pl-1 sm:text-sm rounded-  block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required=""
                        />
                    </div>
                </div>
                <button className='bg-blue-800 rounded-full w-24 font-bold  text-white h-10 ml-48 mt-3'>SIMPAN</button>

            </div>
        </>
    )
};

export default Account; 
