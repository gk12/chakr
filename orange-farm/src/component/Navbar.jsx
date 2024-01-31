import React, { useEffect, useRef, useState } from 'react';
import Logo from '../images/Logomark.svg';
import LogoName from '../images/OrangeFarm.svg';
import DashboardIcon from '../images/Dashboard.svg';
import CustomersIcon from '../images/Customers.svg';
import AllReportsIcon from '../images/AllReports.svg';
import GeographyIcon from '../images/Geography.svg';
import ConversationsIcon from '../images/Conversations.svg';
import DealsIcon from '../images/Deals.svg';
import ExportIcon from '../images/Export.svg';
import SettingsIcon from '../images/settings.svg';
import LogoutIcon from '../images/logout.svg';
import userIcon from '../images/user.png';
import { IoIosSearch } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  const data = [
    {
      name: 'Dashboard',
      logo: DashboardIcon,
    },
    {
      name: 'Customers',
      logo: CustomersIcon,
      sideIcon: true,
    },
    {
      name: 'All Reports',
      logo: AllReportsIcon,
    },
    {
      name: 'Geography',
      logo: GeographyIcon,
    },
    {
      name: 'Conversations',
      logo: ConversationsIcon,
    },
    {
      name: 'Deals',
      logo: DealsIcon,
    },
    {
      name: 'Export',
      logo: ExportIcon,
    },
  ];

  return (
    <div className='flex flex-col w-[18vw] min-h-full bg-white rounded-xl m-3 p-5'>
      <div className='flex items-center'>
        <img className='w-8 h-8 mr-3' alt='' src={Logo} />
        <img className='h-6' alt='' src={LogoName} />
      </div>
      <div className='flex items-center bg-[#fff] border w-full rounded-full pl-2 py-2 mt-8 overflow-hidden'>
        <IoIosSearch size={25} className='text-[#7D7D7D] ml-3 mr-2' />
        <input
          className='bg-[#fff] text-lg w-full outline-none'
          placeholder='Search'
          type='text'
        />
      </div>
      <div className='mt-3'>
        {data.map((item, index) => (
          <div className='flex items-center my-2 p-3'>
            <img src={item.logo} alt='logo' />
            <h1 className='text-[#131313] ml-3'>{item.name}</h1>
            {item.sideIcon && <IoIosArrowDown size={18} className='ml-auto' />}
          </div>
        ))}
      </div>
      <div className='mt-auto'>
        <div className='flex items-center my-2 px-3'>
          <img className=' mr-3' alt='' src={userIcon} />
          <div>
            <h1 className='leading-[1.1] font-medium'>Gustavo Xavier</h1>
            <p className='w-fit rounded-full text-[10px] bg-[#FFCD71] px-1.5 mt-0.5'>
              Admin
            </p>
          </div>
        </div>
        <div className='flex items-center my-2 p-3'>
          <img src={SettingsIcon} alt='logo' />
          <h1 className='text-[#131313] ml-3'>Settings</h1>
        </div>
        <div className='flex items-center my-2 p-3'>
          <img src={LogoutIcon} alt='logo' />
          <h1 className='text-[#131313] ml-3'>Log out</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
