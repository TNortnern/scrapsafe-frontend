import Link from 'next/link';
import { remove } from 'js-cookie';
import Router from 'next/router';

const AuthedRoutes = ({ setUser }) => {
  return (
    <>
      <li className='border-b border-gray-500 sm:border-none py-2'>
        <Link href='/gridview'>
          <a className='hover:text-green-custom'>Grid View</a>
        </Link>
      </li>
      <li className='border-b border-gray-500 sm:border-none py-2'>
        <Link href='/'>
          <a className='hover:text-green-custom sm:border-none'>
            {' '}
            Upload An Image
          </a>
        </Link>
      </li>
      <li className='border-b border-gray-500 sm:border-none py-2'>
        <Link href='/settings'>
          <a className='hover:text-green-custom'>Settings</a>
        </Link>
      </li>
      <li className='border-b border-gray-500 sm:border-none py-2'>
        <span
          onClick={() => {
            setUser(null);
            remove('user_token');
            Router.push('/login');
          }}
          className='hover:text-green-custom cursor-pointer'
        >
          Log Out
        </span>
      </li>
    </>
  );
};

export default AuthedRoutes;
