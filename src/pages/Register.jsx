import React from 'react';
import { NavLink } from 'react-router-dom';
import usr from '../assets/user2.png'
import lock from '../assets/lock.png'


const Register = () => {
  return (
    <section className="bg-gray-50  ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-700 text-center font-Montserrat md:text-2xl">
              REGISTER
            </h1>
            
            {/* FORM */}
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <div className="relative flex items-center ">
                  <img src={usr} className='absolute h-8 left-3 top-2'  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-200 border focus:outline-blue-400 border-gray-300  pl-12 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Password
                </label>
                <div className="relative flex items-center ">
                  <img src={lock} className='absolute h-7 left-3 top-2'  />
                  </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-200 border focus:outline-blue-400 border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5 pl-12 "
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <div className="relative flex items-center ">
                  <img src={lock} className='absolute h-7 left-3 top-2'  />
                  </div>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-200 border focus:outline-blue-400 border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 pl-12"
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-200 focus:ring-3 focus:ring-primary-300"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-900 "
                  >
                    I accept the{" "}
                    <NavLink
                      className="font-medium hover:underline "
                      to="#"
                    >
                      Terms and Conditions
                    </NavLink>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-800 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Create an account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
};

export default Register;