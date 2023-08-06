import { Link } from "react-router-dom";
import { FaCommentDots } from 'react-icons/fa';

import './Navbar.css'
// import { ScrollLink } from "react-scroll";
import { Link as ScrollLink } from 'react-scroll';



const NavBar = () => {


    const navOptions = <>


        <li>
            <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>  </li>
        <li>
            <ScrollLink to="tournaments" smooth={true} duration={500}>Tournaments</ScrollLink>

        </li>
        <li>
            <ScrollLink to="devices" smooth={true} duration={500}>Compare Devices</ScrollLink>

        </li>
        <li>
            <ScrollLink to="shop" smooth={true} duration={500}>Shop</ScrollLink>
        </li>
    </>



    return (
        <>
            <div className="navbar lg:fixed sticky top-0 z-10 bg-opacity-0 max-w-screen-xl w-full text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-blue-950 text-lg">
                            {navOptions}
                        </ul>
                    </div>

                    <div>
                        <img className='rounded-full cursor-pointer lg:ml-14' src='logo.png' alt="" />
                    </div>




                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    {/* Search Bar */}
                    <div className="form-control">
                        <input type="text" placeholder='Search' className="input input-bordered w-24 md:w-auto" />
                    </div>

                    {/* Notification */}
                    <button className="btn btn-ghost btn-circle hidden lg:block">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>


                    {/* Message Icon */}
                    <button className="btn btn-ghost btn-circle">
                        <FaCommentDots />
                    </button>

                    {/* User profile picture */}
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <img src="user.png" alt="" />
                        </label>

                        <div className="dropdown-content z-[1] menu p-2 shadow-xl rounded-lg w-52 card bg-white">
                            <div className="flex text-center justify-center items-center gap-4">
                                <div className="text-start">
                                    <h2 className="text-2xl text-blue-950">Rahul Saha</h2>
                                    <p className="text-gray-500">rahulsaha87928@gmail.com</p>
                                </div>
                                <div>
                                    <img src="user.png" alt="" />
                                </div>
                            </div>
                            <div className="divider my-2"></div>
                            <div className="text-end text-blue-950 font-bold text-lg">
                                <li>Profile</li>
                                <li>Leaderboard</li>
                                <li>Wallet</li>
                                <li>Settings</li>
                                <li>Logout</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;




