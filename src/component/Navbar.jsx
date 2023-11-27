import logo from '../assets/arsega logo mobile.png'
import wa from '../assets/Wa mobile.png'
import menu from '../assets/Button menu mobile.png'
import close from '../assets/closemenu.png'
export default function Navbar({ toggleSidebar, kondisi }) {
    return (
        //BG 
        <nav className="border-gray-200 bg-blue-700">
            {/* LOGO */}
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <img src={logo} className="h-9" alt="ArsegaLogo" />
                <div className='flex gap-2'>
                    {/* Button Menu */}
                    <button className="relative z-20 -top- md:hidden" onClick={() => toggleSidebar()}>
                        {kondisi ? <img src={close} className='h-5 relative -top-5 ' /> : <img src={menu} />}
                    </button>
                </div>
            </div>
        </nav>
    )
}