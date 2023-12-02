import React from 'react';
import { NavLink } from 'react-router-dom';
import accountLg from '../assets/account.png';

const account2 = () => {
    return (
        <>
            <div className='bg-white w-full py-8  shadow-xl'>
                <h1 className='text-center font-Montserrat text-4xl text-blue-700 font-extrabold'>PROFILE</h1>
            </div>

            {/* MOBILE */}
            <div className="md:hidden">
            <div className="grid justify-items-center mt-10">
                <img src={accountLg} className=' h-40' />
                <div className="font-bold text-[#3D55AC] py-3">
                    <h1>Seli Agalista Harahap</h1>
                </div>
            </div>
            <div className='text-sm flex justify-center px-10 mb-10'>
                {/* <div className="text-[#3D55AC] pl-14 font-Montserrat  ">No.Hp <span>: 089623456789  </span></div>
                <div className="text-[#3D55AC] pl-14 font-Montserrat">Alamat <span>: Jl. Pleret No 05, Banguntapan Bantul. Daerah Istimewa Yogyakarta  </span></div>
                <div className="text-[#3D55AC] pl-14 font-Montserrat">NIK <span>: 17710549090409001  </span></div> */}
                <div className="px-5 ">
                    <div className="font-bold">
                        <div className="flex justify-between flex-col gap-5 mt-3 text-[#3D55AC]">
                            <h1 className="font-Montserrat  text-xs"><span className="">No.Hp</span></h1>
                            <h1 className="font-Montserrat  text-xs">Alamat </h1>
                            <h1 className="font-Montserrat  text-xs mt-12">NIK </h1>
                        </div>
                    </div>
                </div>
                <div className="px-5 ">
                    <div className="">
                        <div className="flex justify-between flex-col gap-5 mt-3 text-[#3D55AC]">
                            <h1 className="font-Montserrat  text-xs"><span className="">: 089623456789</span></h1>
                            <h1 className="font-Montserrat  text-xs"> : Jl. Pleret No 05, Banguntapan Bantul. Daerah Istimewa Yogyakarta</h1>
                            <h1 className="font-Montserrat  text-xs"> :  17710549090409001</h1>
                        </div>
                    </div>
                </div>

            </div>
            </div>

            {/* DEKSTOP */}
            <div className="max-sm:hidden">
            <div className="grid justify-items-center mt-10">
                <img src={accountLg} className=' h-40' />
                <div className="font-bold text-[#3D55AC] py-3">
                    <h1>Seli Agalista Harahap</h1>
                </div>
            </div>
            <div className='text-sm flex justify-center px-10 mb-10'>
                <div className="px-5 ">
                    <div className="font-bold">
                        <div className="flex justify-between flex-col gap-5 mt-3 text-[#3D55AC]">
                            <h1 className="font-Montserrat  text-xs"><span className="">No.Hp</span></h1>
                            <h1 className="font-Montserrat  text-xs">Alamat </h1>
                            <h1 className="font-Montserrat  text-xs">NIK </h1>
                        </div>
                    </div>
                </div>
                <div className="px-5 ">
                    <div className="">
                        <div className="flex justify-between flex-col gap-5 mt-3 text-[#3D55AC]">
                            <h1 className="font-Montserrat  text-xs"><span className="">: 089623456789</span></h1>
                            <h1 className="font-Montserrat  text-xs"> : Jl. Pleret No 05, Banguntapan Bantul. Daerah Istimewa Yogyakarta</h1>
                            <h1 className="font-Montserrat  text-xs"> :  17710549090409001</h1>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
};

export default account2; 
