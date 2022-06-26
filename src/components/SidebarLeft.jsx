
import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import InventoryIcon from '@mui/icons-material/Inventory';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

// #00A63C, #009D82, #0093CE, #009D22, #007400
const SidebarLeft = () => {
  return (
    <div className="sidebar-left">
        <div className="header p-3">
            <div className="logo w-48 pb-3">
                <img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="Jasamedika" />
            </div>
            <div className=''>
              <hr />
              {/* <ArrowLeftIcon className='float-right flex-1' style={"margin-top: -5;"}/> */}

            </div>
            <div className="items text-gray-700">
              <ul>
                <li className="flex item-center p-2 hover:bg-[#049D79]/60 hover:text-white hover:rounded-xl">
                  <DashboardIcon className='text-sm' />
                  <span className='pl-2'>Dashboard</span>
                </li>
                <li className="flex item-center p-2 hover:bg-[#049D79]/60 hover:text-white hover:rounded-xl">
                  <InsertChartIcon className='text-sm' />
                  <span className='pl-2'>Service</span>
                </li>
                <li className="flex item-center p-2 hover:bg-[#049D79]/60 hover:text-white hover:rounded-xl">
                  <InventoryIcon className='text-sm' />
                  <span className='pl-2'>Inventory</span>
                </li>
                <li className="flex item-center p-2 hover:bg-[#049D79]/60 hover:text-white hover:rounded-xl">
                  <FilePresentIcon className='text-sm' />
                  <span className='pl-2'>Medical Record</span>
                </li>
                <li className="flex item-center p-2 hover:bg-[#049D79]/60 hover:text-white hover:rounded-xl">
                  <RequestPageIcon className='text-sm' />
                  <span className='pl-2'>Finance</span>
                </li>
                <li className="flex item-center p-2 hover:bg-[#049D79]/60 hover:text-white hover:rounded-xl">
                  <PeopleAltIcon className='text-sm' />
                  <span className='pl-2'>Human Resource</span>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default SidebarLeft