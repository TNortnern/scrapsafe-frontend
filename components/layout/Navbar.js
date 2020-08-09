import React, { useContext } from 'react';
import AppContext from '../context/AuthContext';
import UnauthedRoutes from './UnauthedRoutes';
import AuthedRoutes from './AuthedRoutes';
import NavLogo from './NavLogo';
import HamburgerReact from './HamburgerReact';

const Navbar = () => {
  const { user, setUser } = useContext(AppContext);
  return (
    <nav className='flex flex-col items-center sm:flex-row justify-between px-6 py-2 mx-4 relative z-30 mb-4 sm:mb-0'>
      <NavLogo />
      <HamburgerReact />
      <ul
        id='navigation'
        className='hidden sm:flex  sm:space-x-5 text-center bg-white z-30 w-full sm:w-auto'
      >
        {!user ? <UnauthedRoutes /> : <AuthedRoutes setUser={setUser} />}
      </ul>
    </nav>
  );
};

export default Navbar;
