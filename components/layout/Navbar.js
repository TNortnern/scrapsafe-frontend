import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between py-2 mx-4'>
      <img src='/Logo.png' alt='' />

      <ul className='flex'>
        <li>
          <a className='px-2' href='/gridview'>
            Grid View
          </a>
        </li>
        <li>
          <a className='px-2' href='/'>
            Upload An Image
          </a>
        </li>
        <li>
          <a className='px-2' href='/settings'>
            Settings
          </a>
        </li>
        <li>
          <a className='px-2' href=''>
            Log Out
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
