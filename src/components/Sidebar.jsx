import { FaThLarge, FaCalendarAlt, FaUsers, FaBoxOpen, FaCogs } from "react-icons/fa"; // 1. Tambah icon FaCogs
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-3 transition-all
    ${isActive ? 
        "text-rose-600 bg-rose-100 font-extrabold shadow-sm" : 
        "text-gray-500 hover:text-rose-500 hover:bg-rose-50"
    }`;

  return (
    <div id="sidebar" className="w-[280px] bg-white border-r min-h-screen p-6 flex flex-col justify-between">
      <div>
        {/* Logo Brand "byutie" dengan Styling Lingkaran Estetik Figma */}
        <div id="sidebar-logo" className="mb-8 flex items-center space-x-2 relative">
          <div className="w-7 h-7 bg-rose-300 rounded-full opacity-40 blur-[3px] absolute -left-1"></div>
          <span id="logo-title" className="text-2xl font-black text-gray-800 relative z-10 tracking-tight">
            byutie<b className="text-rose-500">.</b>
          </span>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2 list-none p-0">
            {/* Menu Utama */}
            <li className="text-[10px] text-gray-400 uppercase font-bold px-4 mb-2">Main Menu</li>
            
            <li>
              <NavLink to="/" className={menuClass}>
                <FaThLarge className="text-lg" /> <span>Dashboard</span>
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/appointments" className={menuClass}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-3">
                    <FaCalendarAlt className="text-lg" /> <span>Appointments</span>
                  </div>
                  <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">12</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/patients" className={menuClass}>
                <FaUsers className="text-lg" /> <span>Patients</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={menuClass}>
                <FaBoxOpen className="text-lg" /> <span>Products</span>
              </NavLink>
            </li>

            {/* 2. MENU DOKUMENTASI KOMPONENT PRAKTIKUM BARU */}
            <li>
              <NavLink to="/components" className={menuClass}>
                <FaCogs className="text-lg" /> <span>Katalog Komponen</span>
              </NavLink>
            </li>

            {/* Test Errors Section */}
            <li className="mt-10 text-[10px] text-gray-400 uppercase font-bold px-4">Test Errors</li>
            <li><NavLink to="/error-400" className={menuClass}>Error 400</NavLink></li>
            <li><NavLink to="/error-401" className={menuClass}>Error 401</NavLink></li>
            <li><NavLink to="/error-403" className={menuClass}>Error 403</NavLink></li>
          </ul>
        </nav>
      </div>
      
      <div className="text-xs text-gray-400 text-center">
        © 2026 Nabilla Suharman
      </div>
    </div>
  );
}