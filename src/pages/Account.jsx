import React from 'react';
import accountLg from '../assets/account.png';
import call from '../assets/call.png';
import loc from '../assets/location.png';
import { NavLink } from 'react-router-dom';
import bglogo from '../assets/BigLogo.png'
const Account = () => {
    return (
        <>
        {/* SECTION1 */}
        <div className="w-full  flex justify-center  bg-white shadow-xl border">
                <h1 className=" absolute text-center text-blue-700 font-Montserrat text-[28px] font-extrabold mt-5 max-sm:text-3xl">PROFILE</h1>
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

            {/* MOBILE */}
            <div className=" mt-16 flex  justify-between  md:hidden">
                <img src={accountLg} className='ml-8 h-32' />
                <div className="w-1/2 relative top-5">
                    <h1 className="font-Montserrat font-extrabold text-blue-800">Seli Agalista Harahap </h1>
                    <div className="flex items-end gap-1 py-2">
                        <img src={call} className='h-5 mt-2' />
                        <p className="font-Montserrat text-sm text-blue-900 font-semibold">089623456789</p>
                    </div>
                </div>
            </div>

            {/* REGISTER SECTION*/}
            {/* MOBILE */}
            <div className="w-[325px] ml-7 bg-gray-200 mt-9 p-2 mb-5 pb-6 rounded-md md:hidden ">
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

                <NavLink
                    to="/account2"
                    className="bg-[#3D55AC] rounded-2xl font-bold text-white p-2 ml-56 relative top-3.5 "
                >
                    SIMPAN
                </NavLink>
            </div>

            {/* DEKSTOP */}
            <div className="max-sm:hidden">
            <div className=" mt-16 flex-col grid justify-items-center gap-10">
                <img src={accountLg} className='w-64' />
                <div className="text-xl">
                    <h1 className="font-Montserrat  font-extrabold text-blue-800">Seli Agalista Harahap </h1>
                    <div className="flex items-end gap-1 py-2">
                        <img src={call} className='h-6 mt-2' />
                        <p className="font-Montserrat text-xl text-blue-900 font-semibold">089623456789</p>
                    </div>
                </div>
            </div>

            {/* DEKSTOP */}
                <div className="flex justify-center">
                    <div className="w-1/3 bg-gray-200  p-2 mb-5 pb-6 rounded-md">
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
                        <div className="flex justify-end">
                            <NavLink
                                to="/account2"
                                className="bg-[#3D55AC] rounded-2xl font-bold text-white p-2  relative top-3.5 "
                            >
                                SIMPAN
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Account; 
