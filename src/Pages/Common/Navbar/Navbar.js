import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import img from './navPhoto.png'
import { FiDownload } from "react-icons/fi";

const Navbar = () => {

    const menuItem = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blog</Link>
            </li>
            <li className='mx-4'>
                <a className="btn btn-outline btn-secondary" href="https://drive.google.com/u/0/uc?id=1qGYOxIvDjIMjjXroi_7fdG8sH6cSZb87&export=download">Resume <FiDownload className='text-2xl'></FiDownload></a>
            </li>
            <li>
                <Link to='/contact' className="btn btn-outline btn-secondary">Let's Contact</Link>
            </li>


        </>
    );
    return (
        <div className="navbar bg-white flex justify-between shadow-xl py-0 text-neutral lg:px-28 my-navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={1}
                        className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItem}
                    </ul>
                </div>
                <img className='w-12 mr-5 rounded-full' src={img} alt="" />
                <Link className="normal-case text-2xl text-secondary font-bold hover:text-info" to="/">
                    Md Tanvir
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">{menuItem}</ul>

            </div>
        </div>
    );
};

export default Navbar;