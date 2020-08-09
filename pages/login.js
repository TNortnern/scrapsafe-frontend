import React, { useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import Input from "../components/common/Input";
import Wrapper from "../components/layout/Wrapper";
import Button from "../components/common/Button";
import { LOGIN } from "../lib/graphql/auth";
import { useMutation } from "@apollo/client";
import withApollo from "../lib/withApollo";
import Link from "next/link";
import { withGuest } from "../components/AuthHOC";
import AppContext from "../components/context/AuthContext";

import Router from "next/router";
const login = () => {
  const [email, setEmail] = useState("");
  const { setUser, user } = useContext(AppContext)
  const [password, setPassword] = useState("");
  const [login, loginOptions] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
  });
  const attempt = async () => {
    try {
      await login();
      document.cookie = `user_token=${loginOptions.data.login.jwt}; path=/`;
      setUser(loginOptions.data.login.user)
      Router.push('/')

    } catch (err) {
      console.log("error", loginOptions.error);
    }
  };
  return (
    <Layout>
      <Wrapper>
        <div className="text-center">
          <h1 className="text-5xl">Log In</h1>
          {user ? JSON.stringify(user) : ""}
          <form
            method="POST"
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              attempt();
            }}
            className="flex flex-col space-y-10 mt-6 w-auth-inputs"
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
              <Button type="submit" className="hover:opacity-75 inline-block">
                Login
              </Button>
            </div>
          </form>
          <span
            href="/forgotpassword"
            className="mt-4 block hover:text-green-custom cursor-pointer"
          >
            Forgot your password?
          </span>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default withGuest(withApollo(login));
