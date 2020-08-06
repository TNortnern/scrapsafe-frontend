import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Input from '../components/common/Input';

const register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <Layout>
      <div className='flex flex-col justify-center items-center mt-16 md:mt-48 lg:mt-64 xl:mt-32 w-11/12 md:w-3-10 mx-auto'>
        <h1 className='text-5xl mb-4'>Sign Up</h1>
        <p className='max-w-xs text-center'>
          A description of what you get with a paid plan that can be either long
          or short
        </p>
        <div className='flex mt-4 w-full'>
          <div className='w-1/2 text-center py-1 active'>Free</div>
          <div className='w-1/2 text-center py-1 inactive'>Paid</div>
        </div>
        <div className='flex flex-col space-y-10 mt-6 w-full'>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            value={name}
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
            value={email}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            value={password}
          />
          <Input
            onChange={(e) => setRepeatPassword(e.target.value)}
            type='password'
            placeholder='Repeat Password'
            value={repeatPassword}
          />
        </div>
      </div>
    </Layout>
  );
};

export default register;
