import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return <>
    <Link to='../'>
      <div className="sticky z-10 top-0 text-center py-5 bg-slate-100">
        World Ranks
      </div>
    </Link>
  </>;
};

export default Header;
