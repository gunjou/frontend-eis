import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import InventoryIcon from "@mui/icons-material/Inventory";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

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


const SidebarLeft = ({ page }) => {
  return (
    <div className="sidebar-left">
      <div className="header pr-3 pl-3">
        <div className="logo w-48 pb-3 pt-3">
          <img
            src={process.env.PUBLIC_URL + "images/logo.svg"}
            alt="Jasamedika"
          />
        </div>
        <div className="mb-4">
          <hr />
          {/* <ArrowLeftIcon className='float-right flex-1' style={"margin-top: -5;"}/> */}
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
  );
};

export default SidebarLeft;
