import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaSearch, FaChevronDown, FaTimes, FaPlusCircle } from 'react-icons/fa';
import Logo from "../assets/logo.svg";

// Dropdown data
const dropdownItems = [
    "Entertainment",
    "Art & Theatre",
    "Workshops",
    "Meetups",
    "Festivals",
    "Sports",
    "Concerts",
    "Exhibitions",
    "Food & Drink",
    "Kids",
    "Community",
    "More"
];

const Navbar = () => {
    const [isBottomNavHidden, setIsBottomNavHidden] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    // This useEffect handles the bottom navbar's visibility on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsBottomNavHidden(true);
            } else {
                setIsBottomNavHidden(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // This useEffect prevents background scroll when any modal is open
    useEffect(() => {
        if (isSignInModalOpen || isCreateEventModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isSignInModalOpen, isCreateEventModalOpen]);

    const handleSignInClick = () => {
        setIsSignInModalOpen(true);
    };

    const handleCreateEventClick = () => {
        setIsCreateEventModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsSignInModalOpen(false);
        setIsCreateEventModalOpen(false);
    };

    return (
        <nav>
            {/* Top Navbar Section - Fixed and always visible */}
            <div className="bg-white py-4 w-full z-50 fixed top-0 left-0 ">
                <div className="container mx-auto px-4 w-[1200px]">
                    <div className="flex items-center justify-around space-x-4">
                        {/* Logo */}
                        <div className="flex items-center space-x-2 min-w-[150px]">
                            <img src={Logo} alt="Logo" className="h-8" />
                        </div>

                        {/* Location */}
                        <div className="flex items-center text-gray-700 hover:text-blue-500 transition-colors cursor-pointer">
                            <FaMapMarkerAlt className="mr-1" />
                            <span className="font-semibold">Jaipur</span>
                            <FaChevronDown className="ml-1 text-xs" />
                        </div>

                        {/* Spacer to push items to the right */}
                        <div className="flex-grow"></div>

                        {/* Search Bar - Hidden on "Create Event" page, assuming a different component state would manage this */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for events, artists, venues"
                                className="w-[300px] pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-0 transition-all duration-300"
                            />
                            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        </div>

                        {/* Create Event Button */}
                        <div>
                            <button
                                onClick={handleCreateEventClick}
                                className=" text-gray-500 font-semibold py-2 px-6 rounded-full  transition-colors flex items-center space-x-2"
                            >
                                <FaPlusCircle />
                                <span>Create Event</span>
                            </button>
                        </div>

                        {/* Sign In Button */}
                        <div>
                            <button
                                onClick={handleSignInClick}
                                className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition-colors"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Spacer div to prevent content from going under the fixed top navbar */}
            <div className="h-16"></div>

            {/* Bottom Navbar Section - Smoothly slides up on scroll */}
            <div
                className={`w-full bg-white text-gray-600 transition-transform duration-300 z-40 relative
                           ${isBottomNavHidden ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'}`}
                style={{ top: '0' }}
            >
                <div className="container mx-auto px-4 w-[1200px]">
                    <div className="flex items-start justify-start gap-2 py-3">
                        {dropdownItems.map((item, index) => (
                            <div
                                key={item}
                                className="relative group h-full"
                                onMouseEnter={() => setHoveredItem(item)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <a
                                    href="#"
                                    className="flex items-center text-sm font-medium px-2 py-2 text-gray-600 hover:text-pink-500 transition-colors duration-300"
                                >
                                    {item}
                                    {(item === 'Entertainment' || item === 'Art & Theatre' || item === 'More') && (
                                        <FaChevronDown className="ml-1 text-xs transition-transform duration-300 transform group-hover:rotate-180" />
                                    )}
                                    {/* Pink underline on hover */}
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </a>
                                {/* Sub-navbar for 'Entertainment' */}
                                {item === 'Entertainment' && hoveredItem === 'Entertainment' && (
                                    <div
                                        className="absolute top-full left-0 mt-3 w-64 bg-white text-gray-800 rounded-lg shadow-lg
                                                     transition-opacity duration-300 opacity-100"
                                    >
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sub-item 1</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sub-item 2</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sub-item 3</a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <hr className="border-gray-300" />
                </div>
            </div>

            {/* Full-screen Modal for Sign In */}
            {isSignInModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300">
                    <div className="bg-white w-full h-full relative">
                        {/* Close button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-white text-4xl p-2 z-20"
                        >
                            <FaTimes />
                        </button>
                        {/* Modal Content */}
                        <div className="flex items-center justify-center h-full">
                            <h2 className="text-4xl font-bold text-gray-800">Sign In Modal Content</h2>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Full-screen Modal for Create Event */}
            {isCreateEventModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300">
                    <div className="bg-white w-full h-full relative">
                        {/* Close button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-white text-4xl p-2 z-20"
                        >
                            <FaTimes />
                        </button>
                        {/* Modal Content */}
                        <div className="flex items-center justify-center h-full">
                            <h2 className="text-4xl font-bold text-gray-800">Create Event Modal Content</h2>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;