import React from 'react';
import logo from './assets/logo.png';

function Navbar() {

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <a href="/">
                        <img src={logo} alt="Logo" style={{ height: '150px', width: 'auto' }} />
                    </a>
                </div>
                {/* Hamburger Menu for Mobile */}
                <div className="block lg:hidden">
                </div>
                {/* Navigation Links */}
                <ul className={`flex space-x-8 lg:flex lg:block`}>
                    <li>
                        <a href="/" className="text-gray-700 hover:text-blue-600">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-gray-700 hover:text-blue-600">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="/services" className="text-gray-700 hover:text-blue-600">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
