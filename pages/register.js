import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Input from '../components/common/Input';
import Wrapper from '../components/layout/Wrapper';
import FreePaidButton from '../components/FreePaidButton';
import Button from '../components/common/Button';
import { withGuest } from '../components/AuthHOC';

const register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <Layout>
      <Wrapper>
        <div>
          <h1 className="text-5xl mb-4 text-center">Sign Up</h1>
          <p className="max-w-xs text-center">
            A description of what you get with a paid plan that can be either
            long or short
          </p>
          <FreePaidButton />
          <div className="flex flex-col space-y-10 mt-6 w-auth-inputs">
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              value={name}
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              value={email}
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              value={password}
            />
            <Input
              onChange={(e) => setRepeatPassword(e.target.value)}
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
            />
          </div>

          <Button className="mx-auto block mt-5">Sign Up</Button>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default withGuest(register);
