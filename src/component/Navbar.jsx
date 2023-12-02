import logo from '../assets/arsega logo mobile.png'
import wa from '../assets/Wa mobile.png'
import menu from '../assets/Button menu mobile.png'
import close from '../assets/closemenu.png'
import shpcrd from '../assets/icnshp.png'
import lg from '../assets/ArsegaMedium.png'
import acnt from '../assets/accounNav.png'
import { NavLink } from 'react-router-dom';
import { Dropdown, } from 'react-daisyui'


export default function Navbar({ toggleSidebar, kondisi }) {
    return (

        //MOBILE 
        <nav className="border-gray-200 bg-blue-700 ">
            <div className="md:hidden">
                {/* LOGO */}
                <div className="flex flex-wrap items-center justify-between  mx-auto p-4 md:flex-none">
                    <NavLink to="/">
                    <img src={lg} className='h-10 md:hidden' />
                </NavLink>
                    <div className='flex gap-4 '>
                        <NavLink to="/history">
                            <img src={shpcrd} className='h-9 relative' />
                        </NavLink>
                        {/* Button Menu */}
                        <button className="relative z-20 -top- md:hidden" onClick={() => toggleSidebar()}>
                            {kondisi ? <img src={close} className='h-5 relative -top-5 ' /> : <img src={menu} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* DEKSTOP */}
            <div className="flex justify-between h-16  max-sm:hidden">
                <NavLink to="/">
                    <img src={lg} className='h-16 ml-16' />
                </NavLink>
                <div className="flex gap-3 pr-12 mt-1">
                    <div className="pr-10 hover:bg-none flex">
                        <NavLink to="/history">
                            <img src={shpcrd} className='h-10 top-1 relative' />
                        </NavLink>
                        <Dropdown.Details >
                            <Dropdown.Details.Toggle className='bg-blue-700 hover:bg-blue-700  border-4  border-blue-700'><><img src={acnt} className='h-8 '/></></Dropdown.Details.Toggle>
                            <Dropdown.Menu className="w-28 bg-blue-500 text-white text-base hover:bg-none ">
                                <Dropdown.Item ><NavLink to="/login" className="font-Poppins font-medium " onClick={() => kondisi()}>LOGIN</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/account" className="font-Poppins font-medium " onClick={() => kondisi()}>PROFILE</NavLink></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Details>
                    </div>
                </div>

                

            </div>
            {/* NAV DEKSTOP */}
            <nav className=" bg-[#C8D6FF] h-12 flex justify-center max-sm:hidden ">
                <div className="flex  gap-8 mt-3 font-semibold ">
                    <NavLink
                        to="/"
                        className="font-Montserrat ">HOME
                    </NavLink>
                    <NavLink
                        to="/katalog"
                        className="font-Montserrat ">KATALOG
                    </NavLink>
                    <NavLink
                        to="/faqs"
                        className="font-Montserrat ">FAQ'S
                    </NavLink>
                    <NavLink
                        to="/ttgkami"
                        className="font-Montserrat ">ABOUT US
                    </NavLink>
                </div>

            </nav>
        </nav>
    )
}