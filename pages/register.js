import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Input from '../components/common/Input';
import Wrapper from '../components/layout/Wrapper';
import FreePaidButton from '../components/FreePaidButton';

const register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <Layout>
      <Wrapper>
        <h1 className='text-5xl mb-4'>Sign Up</h1>
        <p className='max-w-xs text-center'>
          A description of what you get with a paid plan that can be either long
          or short
        </p>
        <FreePaidButton />
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

        <button className='bg-green-custom text-white mt-8 px-2 py-1 hover:opacity-75'>
          SignUp
        </button>
      </Wrapper>
    </Layout>
  );
};

export default register;