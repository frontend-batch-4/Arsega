import React from 'react';
import Logo from '../assets/arsega logo Mobile.png'
import { NavLink } from 'react-router-dom';
import usr from '../assets/user2.png'
import lock from '../assets/lock.png'
import logo from '../assets/arsega logo Mobile.png'
const Login = () => {
    return (
        // section1

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <NavLink
                to="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >

            </NavLink>
            {/* div pertama memberi garis pinggir pada border */}
            <div className="w-full bg-white rounded-lg shadow border mb-8  md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm-p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-700 font-Montserrat text-center md:text-2xl">
                        LOGIN </h1>
                    <form className="space-y-4 md:space-y-4" action="#">
                        <div>
                            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
                                Your email
                            </label>
                            <div className='relative flex items-center '>
                                <img src={usr} className='absolute left-3 h-7'></img>
                                <input type="email" name="email" id="email"
                                    className="bg-gray-200 text-gray-700 sm:text-sm rounded-lg w-full p-2.5 pl-12  focus:outline-blue-500"
                                    placeholder="name@gmail.com"
                                    required=""
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative flex items-center">
                                <img src={lock} className='absolute h-6 left-3' />
                                <input type="password" name="passwod" id="password"
                                    className="bg-gray-200 text-gray-700 sm:text-sm rounded-lg w-full p-2.5 pl-12  focus:outline-blue-500"
                                    placeholder="•••••••"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between ">
                            <div className=" flex items-start">
                                <div className="flex items-center h-5">
                                    <input type="checkbox" id="remember" aria-aria-describedby="remember"
                                        className="w-4 h-4 border border-gray-300"
                                        required=""
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="remember"
                                        className="text-gray-500"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <NavLink href="#"
                                className="text-sm font-medium text-gray-900 hover:underline ">
                                Forget password?
                            </NavLink>
                        </div>
                            <NavLink to="/Account"
                                className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center grid justify-center ">
                                SIGN IN
                            </NavLink>
                        
                        <p className="text-sm font-light text-gray-800 dark:text-gray-700">
                            Don’t have an account yet?{" "}
                            <NavLink
                                to="/register"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                Sign up
                            </NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>

    )
};

export default Login;