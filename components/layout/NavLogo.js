import Router from 'next/router';

const NavLogo = () => {
  return (
    <img
      className='cursor-pointer w-6/12 sm:w-auto'
      onClick={() => {
        Router.push('/');
      }}
      src='/Logo.png'
      alt='logo'
    />
  );
};

export default NavLogo;
