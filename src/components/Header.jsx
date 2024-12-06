import React, { useState } from 'react';
import icon from "../assets/logo.png";
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg fixed w-full z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-3">
                {/* Logo Section */}
                <div className="flex items-center space-x-4 ms-4">
                    <img src={icon} alt="logo" className="w-10 sm:w-12" />
                    <Link to="/" className="text-xl font-bold hover:text-gray-200">AJStore</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:text-gray-200">Home</Link>
                    <Link to="/shop" className="hover:text-gray-200">Shop</Link>
                    <Link to="/about" className="hover:text-gray-200">About us</Link>
                    <Link to="/contact" className="hover:text-gray-200">Contact us</Link>
                    <Link to="/cart" className="hover:text-gray-200">Cart</Link>
                </nav>

                {/* Account Dropdown */}
                <div className="relative hidden md:flex items-center">
                    <button
                        className="flex items-center space-x-2 hover:text-gray-200 me-4"
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                    >
                        <i className="fas fa-user-circle text-2xl"></i>
                        <span>Account</span>
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-60 bg-white text-gray-800 rounded shadow-lg w-48">
                            <ul className="py-2">
                                <li>
                                    <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                                </li>
                                <li>
                                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        className="text-white"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i
                            className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}
                            style={{ color: '#ffffff' }}
                        ></i>
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="bg-blue-800 text-white md:hidden">
                    <ul className="flex flex-col space-y-2 py-4 px-6">
                        <li>
                            <Link to="/" className="hover:text-gray-200">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:text-gray-200">Shop</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-200">About us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-200">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="hover:text-gray-200">Cart</Link>
                        </li>
                    </ul>
                    <div className="border-t border-gray-700 py-4 px-6">
                        <Link
                            to="/login"
                            className="block py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded mb-2"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="block py-2 text-center bg-green-500 hover:bg-green-600 text-white rounded"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
