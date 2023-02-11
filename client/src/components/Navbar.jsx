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
          <Link to="/task-board" className="font-inter font-medium bg-blue-600 text-white px-8 py-4 rounded-md">Task Board</Link>
        </li>
        <li>
          <Link to="/task-tracker" className="font-inter font-medium bg-blue-600 text-white px-8 py-4 rounded-md">Task Tracker</Link>
        </li>
        <li>
          <Link to="/settings" className="font-inter font-medium bg-blue-600 text-white px-8 py-4 rounded-md">Settings</Link>
        </li>
        <li>
          <Link to="/alice" className="font-inter font-medium bg-blue-600 text-white px-8 py-4 rounded-md">A.L.I.C.E</Link>
        </li>
        <li>
          <Link to="/login" className="font-inter font-medium bg-dark-grey-600 text-white px-8 py-4 rounded-md">Login</Link>
        </li>
        <li>
          <Link to="/profile" className="font-inter font-medium bg-blue-600 text-white px-8 py-4 rounded-md">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
