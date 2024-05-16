import React from "react";
import myImage from "../images/logoimg.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 z-50 bg-slate-300 flex h-15">
                <div className="flex mx-2 my-2 cursor-pointer">
                    <h1 className="font-bold text-yellow-800 pl-1 text-3xl">WellBeing</h1>
                    <img className="h-9 w-15" src={myImage} alt="Loading...." />
                </div>
                <div className="flex text-lg my-4 mx-60 cursor-pointer font-medium">
                    <a href="#home" className="px-4 transition ease-in-out delay-150 hover:text-amber-900 hover:translate-y-0 hover:scale-110 duration-100">Home</a>
                    <a href="#services" className="px-4 transition ease-in-out delay-150 hover:text-amber-900 hover:translate-y-0 hover:scale-110 duration-100">Services</a>
                    <a href="#about" className="px-4 transition ease-in-out delay-150 hover:text-amber-900 hover:translate-y-0 hover:scale-110 duration-100">About Us</a>
                    <a href="#contact" className="px-4 transition ease-in-out delay-150 hover:text-amber-900 hover:translate-y-0 hover:scale-110 duration-100">Contact Us</a>
                </div>
                <div className="flex cursor-pointer mt-1">
                    <Link to="./Login" target="_top">
                        <button type="button" className="font-medium text-base mx-3 my-3 bg-blue-400 px-4 py-1 rounded-3xl hover:bg-blue-300">Log In</button>
                    </Link>
                    <Link to="./SignUp" target="_top">
                        <button type="button" className="font-medium text-base mx-3 my-3 bg-blue-400 px-4 py-1 rounded-3xl hover:bg-blue-300">Sign Up</button>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;