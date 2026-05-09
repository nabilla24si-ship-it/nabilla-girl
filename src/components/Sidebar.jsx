import { FaThLarge, FaCalendarAlt, FaUsers, FaBoxOpen } from "react-icons/fa"; // Tambah FaBoxOpen
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-3 transition-all
    ${isActive ? 
        "text-rose-600 bg-rose-100 font-extrabold shadow-sm" : 
        "text-gray-500 hover:text-rose-500 hover:bg-rose-50"
    }`;

  return (
    <div id="sidebar" className="w-[280px] bg-white border-r min-h-screen p-6 flex flex-col gap-6">
      <div id="sidebar-logo" className="mb-8">
        <span id="logo-title" className="text-3xl font-bold">Lumière <b className="text-rose-500">.</b></span>
        <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest">Beauty Clinic</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 list-none p-0">
          {/* Menu Utama */}
          <li className="text-[10px] text-gray-400 uppercase font-bold px-4 mb-2">Main Menu</li>
          
          <li>
            <NavLink to="/" className={menuClass}>
              <FaThLarge /> <span>Dashboard</span>
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/appointments" className={menuClass}>
              <FaCalendarAlt /> <span>Appointments</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/patients" className={menuClass}>
              <FaUsers /> <span>Patients</span>
            </NavLink>
          </li>

          {/* MENU PRODUCTS BARU */}
          <li>
            <NavLink to="/products" className={menuClass}>
              <FaBoxOpen /> <span>Products</span>
            </NavLink>
          </li>

          {/* Test Errors Section */}
          <li className="mt-10 text-[10px] text-gray-400 uppercase font-bold px-4">Test Errors</li>
          <li><NavLink to="/error-400" className={menuClass}>Error 400</NavLink></li>
          <li><NavLink to="/error-401" className={menuClass}>Error 401</NavLink></li>
          <li><NavLink to="/error-403" className={menuClass}>Error 403</NavLink></li>
        </ul>
      </nav>
      
      <div className="text-xs text-gray-400 text-center">
        © 2026 Nabilla Suharman
      </div>
    </div>
  );
}