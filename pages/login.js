import React, { useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import Input from "../components/common/Input";
import Wrapper from "../components/layout/Wrapper";
import Button from "../components/common/Button";
import { LOGIN } from "../lib/graphql/auth";
import { useMutation } from "@apollo/client";
import { withGuest } from "../components/AuthHOC";
import AppContext from "../components/context/AuthContext";
import Router from "next/router";
import { set } from 'js-cookie';

const login = () => {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(null)
  const { setUser } = useContext(AppContext)
  const [password, setPassword] = useState("");
  const [login, loginOptions] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
  });
  const attempt = async () => {
    setInvalid(false)
    try {
      const res = await login();
      setUser(res.data.login.user);
      set("user_token", res.data.login.jwt);
      Router.push('/')
    } catch (err) {
      setInvalid(true)
      console.log("error", loginOptions.error);
    }
  };
  return (
    <Layout>
      <Wrapper>
        <div className="text-center">
          <h1 className="text-5xl">Log In</h1>
          { invalid && <span className="text-red-500">Invalid email or password.</span> }
          <form
            method="POST"
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              attempt();
            }}
            className="flex flex-col mt-6 space-y-10 w-auth-inputs"
          >
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
            <div className="text-center">
              <Button type="submit" className={`hover:opacity-75 inline-block ${loginOptions.loading ? 'cursor-not-allowed opacity-50' : ''}`}>
                Login
              </Button>
            </div>
          </form>
          <span
            href="/forgotpassword"
            className="block mt-4 cursor-pointer hover:text-green-custom"
          >
            Forgot your password?
          </span>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default withGuest(login);
