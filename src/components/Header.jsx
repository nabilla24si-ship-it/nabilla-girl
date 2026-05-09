import { useState } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div id="header-container" className="flex justify-between items-center bg-white p-4 border-b border-rose-50">
            {/* Search Bar - Trigger Modal */}
            <div id="search-bar" onClick={() => setIsSearchOpen(true)} className="cursor-pointer relative flex items-center w-64">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search Here..."
                    readOnly
                    className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 pr-10 outline-none cursor-pointer"
                />
                <FaSearch id="search-icon" className="absolute right-4 text-gray-400" />
            </div>

            {/* MODAL SEARCH */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-xl rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Quick Search</h3>
                            <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-red-500">
                                <FaTimes />
                            </button>
                        </div>
                        <input 
                            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-400 outline-none" 
                            placeholder="Type treatment, patient name, or appointment ID..."
                            autoFocus
                        />
                        <div className="mt-4 text-sm text-gray-400">Press Esc to close</div>
                    </div>
                </div>
            )}

            <div id="icons-container" className="flex items-center space-x-6">
                <div id="notification-icon" className="relative cursor-pointer text-gray-500 hover:text-rose-500">
                    <FaBell className="text-xl" />
                    <span id="notification-badge" className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        5
                    </span>
                </div>
                <div id="chart-icon" className="cursor-pointer text-xl">
                    <FcAreaChart />
                </div>
                <div id="settings-icon" className="cursor-pointer text-gray-500 hover:text-rose-500 text-xl">
                    <SlSettings />
                </div>

                <div id="profile-container" className="flex items-center space-x-3 border-l border-gray-200 pl-6 cursor-pointer">
                    <span id="profile-text" className="text-sm text-gray-600 hidden md:block">
                        Hello, <b className="text-gray-800">Nabilla Suharman</b>
                    </span>
                    <img
                        id="profile-avatar"
                        src="/img/logopcr.png"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover border-2 border-rose-200"
                    />
                </div>
            </div>
        </div>
    );
}