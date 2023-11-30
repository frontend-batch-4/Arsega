import logo from '../assets/arsega logo mobile.png'
import wa from '../assets/Wa mobile.png'
import menu from '../assets/Button menu mobile.png'
import close from '../assets/closemenu.png'
import shpcrd from '../assets/icnshp.png'
import lg from '../assets/ArsegaMedium.png'
import { NavLink } from 'react-router-dom';
export default function Navbar({ toggleSidebar, kondisi }) {
    return (
        //BG 
        <nav className="border-gray-200 bg-blue-700">
            {/* LOGO */}
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <img src={logo} className="h-9 md:hidden" alt="ArsegaLogo" />
                <div className='flex gap-4'>
                    <img src={shpcrd} />
                    {/* Button Menu */}
                    <button className="relative z-20 -top- md:hidden" onClick={() => toggleSidebar()}>
                        {kondisi ? <img src={close} className='h-5 relative -top-5 ' /> : <img src={menu} />}
                    </button>
                </div>
            </div>
            <nav className="bg-[#C8D6FF] h-12 flex justify-between px-10">
                <img src={lg} className='grid justify-start pl-10 ' />
                <div className="flex justify-around gap-8 mt-3">
                    <NavLink
                        to="/pemesanan2"
                        className="font-Montserrat ">HOME
                    </NavLink>
                    <NavLink
                        to="/pemesanan2"
                        className="font-Montserrat ">KATALOG
                    </NavLink>
                    <NavLink
                        to="/pemesanan2"
                        className="font-Montserrat ">FAQ'S
                    </NavLink>
                    <NavLink
                        to="/pemesanan2"
                        className="font-Montserrat ">ABOUT US
                    </NavLink>
                </div>

            </nav>
        </nav>
    )
}