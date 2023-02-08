import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between p-4 bg-gray-500">
        <li>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: '421px', height: '152px' }} />
          </Link>
        </li>
        <li>
          <Link to="/task-board" className="font-inter font-medium bg-[#6469ff] text-white px-8 py-4 rounded-md">Task Board</Link>
        </li>
        <li>
          <Link to="/task-tracker" className="font-inter font-medium bg-[#6469ff] text-white px-8 py-4 rounded-md">Task Tracker</Link>
        </li>
        <li>
          <Link to="/settings" className="font-inter font-medium bg-[#6469ff] text-white px-8 py-4 rounded-md">Settings</Link>
        </li>
        <li>
          <Link to="/login" className="font-inter font-medium bg-[#6469ff] text-white px-8 py-4 rounded-md">Login</Link>
        </li>
        <li>
          <Link to="/alice" className="font-inter font-medium bg-[#6469ff] text-white px-8 py-4 rounded-md">A.L.I.C.E</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
