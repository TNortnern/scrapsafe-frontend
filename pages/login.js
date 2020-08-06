import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Input from '../components/common/Input';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <div className='flex flex-col justify-center items-center mt-48 w-3-10 mx-auto'>
        <h1 className='text-5xl'>Log In</h1>

        <div className='flex flex-col space-y-10 mt-6 w-full'>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className='my-4 px-4'
            type='email'
            placeholder='Email'
            value={email}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            className='my-4 px-4'
            type='password'
            placeholder='Password'
            value={password}
          />
        </div>
        <p className='mt-6'>Forgot Password</p>
      </div>
    </Layout>
  );
};

export default login;
