import { NavLink } from "react-router-dom"
import menu from '../assets/Button menu mobile.png'
import home from '../assets/SideHome.png'
import login from '../assets/login.png'
import katalog from '../assets/katalog.png'
import faq from '../assets/faq.png'
import about from '../assets/tentang.png'
import account from '../assets/LgAccount.png'
export default function Sidebar({ kondisi, toggleKondisi }) {
    return (
        <>
            {/* BG SIDEBAR */}
            <div className={`transition-all z-10 absolute right-0 w-1/2 h-screen bg-white-100   ${kondisi ? 'top-0' : '-top-full'}`}>
                {/*  */}
                <div className="flex flex-col items-start  bg-slate-100 h-full font-semibold   font-Montserrat text-white  border-slate-600 md:hidden">
                    <div className=" flex gap-2 hover:bg-blue-500 bg-blue-900 border-white p-1 pl-3 w-full">
                        <img src={home} className="h-5 " />
                        <NavLink className="w-full" to={"/"} onClick={() => toggleKondisi()}>
                            HOME
                        </NavLink>
                    </div>
                    <div className="flex gap-3 hover:bg-blue-400 bg-blue-900 border-t-2 p-1 pl-3.5 border-white w-full  ">
                    <img src={login} className="h-5 " />
                        <NavLink className="w-full"  to={"/login"} onClick={() => toggleKondisi()}>
                            LOGIN
                        </NavLink>
                    </div>
                    <div className="flex gap-3 hover:bg-blue-400 bg-blue-900 border-t-2 p-1 pl-3.5 border-white w-full">
                    <img src={katalog} className="h-5 " />
                        <NavLink className="w-full" to={"/katalog"} onClick={() => toggleKondisi()}>
                            KATALOG
                        </NavLink>
                    </div>
                    <div className="flex gap-3 hover:bg-blue-400 bg-blue-900 border-t-2 p-1 pl-3.5 border-white w-full">
                    <img src={faq} className="h-5 " />
                        <NavLink className="w-full" to={"/faqs"} onClick={() => toggleKondisi()}>
                            FAQS
                        </NavLink>
                    </div>
                    <div className="flex gap-3 hover:bg-blue-400 bg-blue-900 border-t-2 p-1 pl-3.5  border-white  w-full">
                    <img src={about} className="h-5 " />
                        <NavLink className="w-full" to={"/ttgkami"} onClick={() => toggleKondisi()} >
                            TENTANG KAMI
                        </NavLink>
                    </div>
                    <div className="flex gap-3.5 bg-blue-900 hover:bg-blue-400 w-full pl-3.5 p-1 border-t-2">
                        <img src={account} className="h-5" />
                        <NavLink className="w-full" to={"/Account"} onClick={() => toggleKondisi()}>
                            ACCOUNT 
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={` absolute top-0 left-0  w-1/2 h-full bg-black z-20 opacity-80  duration-700 ${kondisi ? 'block' : 'hidden'  }`}>
            </div>
        </>
    )
}