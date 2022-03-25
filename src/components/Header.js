import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return <>
    <Link to='../'>
      <div id="header" className="sticky z-10 top-0 text-center pt-9 pb-2 mb-7 sm:mb-12 bg-slate-100 shadow-xl shadow-slate-100 flex justify-center items-center">
        <div className='flex justify-center items-center hover:-skew-y-3 hover:-skew-x-3 transition-transform ease-in-out w-56'>
          <span className='h-full mr-2 flex flex-col gap-y-0.5'>
            <div className='inline-block bg-teal-500 w-2 rounded-sm logo-bar' />
            <div className='inline-block bg-teal-500 w-4 rounded-sm logo-bar' />
            <div className='inline-block bg-teal-500 w-6 rounded-sm logo-bar' />
          </span>
          <span className='text-2xl font-bold text-slate-300 ml-1'>
            World{' '}
            <span className='text-teal-500'>
              Ranks
            </span>
          </span>
        </div>
      </div>
    </Link>
  </>;
};

export default Header;
