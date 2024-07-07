
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaChartLine, FaUserPlus, FaQrcode, FaSignOutAlt } from 'react-icons/fa';
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className='container'>
      <p className='heading'>WestZone</p>
      <ul>
        <li>
          <NavLink to="/dashboard" activeClassName='active'>
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/allusers" activeClassName='active'>
            <FaUsers /> All Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" activeClassName='active'>
            <FaChartLine /> Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/registration" activeClassName='active'>
            <FaUserPlus /> Registration
          </NavLink>
        </li>
        <li>
          <NavLink to="/scanner" activeClassName='active'>
            <FaQrcode /> Scanner
          </NavLink>
        </li>
        
        <li className='logout'>
          <NavLink to="/logout" activeClassName='active'>
            <FaSignOutAlt /> Logout
          </NavLink>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
