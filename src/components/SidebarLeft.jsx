import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import InventoryIcon from "@mui/icons-material/Inventory";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const active = {
  color: 'white',
  padding: '8px',
  fontWeight: 'bold',
  borderRadius: '0.75rem',
  backgroundColor: '#68c4ae',
  width: '100%',
  textAlign: 'left'
}

const nonactive = {
  // color: 'rgb(55 65 81)',
  padding: '8px'
}


const SidebarLeft = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
    {!isOpen ? 
    (
      <div className="sidebar-left transition ease-in-out delay-150 duration-700">
      <div className="header pr-3 pl-3">
        <div className="logo text-sm pb-1 pt-3">
          <img
            src={process.env.PUBLIC_URL + "images/loader.svg"}
            alt="Jasamedika"
          />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="flex items-center text-center before:content-[''] before:flex-1 before:border-b-2 text-gray-700 cursor-pointer">
          <ArrowForwardIcon />
        </div>
        <div className="items text-gray-700">
          <ul>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/" style={({ isActive }) => (isActive ? active : nonactive)}>
                <DashboardIcon className="text-sm" />
              </NavLink>
            </li>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/service" style={({ isActive }) => (isActive ? active : nonactive)}>
                <InsertChartIcon className="text-sm" />
              </NavLink>
            </li>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/inventory" style={({ isActive }) => (isActive ? active : nonactive)}>
                <InventoryIcon className="text-sm" />
              </NavLink>
            </li>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/medical-record" style={({ isActive }) => (isActive ? active : nonactive)}>
                <FilePresentIcon className="text-sm" />
              </NavLink>
            </li>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/finance" style={({ isActive }) => (isActive ? active : nonactive)}>
                <RequestPageIcon className="text-sm" />
              </NavLink>
            </li>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/hr" style={({ isActive }) => (isActive ? active : nonactive)}>
                <PeopleAltIcon className="text-sm" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    ):
    (
    <div className="sidebar-left transition ease-in-out delay-150 duration-700">
      <div className="header pr-3 pl-3">
        <div className="logo w-48 pb-1 pt-3">
          <img
            src={process.env.PUBLIC_URL + "images/logo.svg"}
            alt="Jasamedika"
          />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="flex items-center text-center before:content-[''] before:flex-1 before:border-b-2 text-gray-700 cursor-pointer">
          <ArrowBackIcon />
        </div>
        <div className="items text-gray-700">
          <ul>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/" style={({ isActive }) => (isActive ? active : nonactive)}>
                <DashboardIcon className="text-sm" />
                <span className="pl-2">Dashboard</span>
              </NavLink>
            </li>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/service" style={({ isActive }) => (isActive ? active : nonactive)}>
                <InsertChartIcon className="text-sm" />
                <span className="pl-2">Service</span>
              </NavLink>
            </li>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/inventory" style={({ isActive }) => (isActive ? active : nonactive)}>
                <InventoryIcon className="text-sm" />
                <span className="pl-2">Inventory</span>
              </NavLink>
            </li>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/medical-record" style={({ isActive }) => (isActive ? active : nonactive)}>
                <FilePresentIcon className="text-sm" />
                <span className="pl-2">Medical Record</span>
              </NavLink>
            </li>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/finance" style={({ isActive }) => (isActive ? active : nonactive)}>
                <RequestPageIcon className="text-sm" />
                <span className="pl-2">Finance</span>
              </NavLink>
            </li>
            <li className="flex item-center hover:text-[#049D79]">
              <NavLink to="/hr" style={({ isActive }) => (isActive ? active : nonactive)}>
                <PeopleAltIcon className="text-sm" />
                <span className="pl-2">Human Resource</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default SidebarLeft;
