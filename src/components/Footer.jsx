import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
                <div className="mt-4">
                    <a href="/about" className="hover:underline px-4">About Us</a>
                    <a href="/contact" className="hover:underline px-4">Contact</a>
                    <a href="/" className="hover:underline px-4">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer