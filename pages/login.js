import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Input from "../components/common/Input";
import Wrapper from "../components/layout/Wrapper";
import Button from "../components/common/Button";
import { useDispatch } from "react-redux";
import { setUser } from "../lib/slices/authSlice";
import { LOGIN } from "../lib/graphql/auth";
import { useMutation } from "@apollo/client";
import withApollo from "../lib/withApollo";
import Link from "next/link";
import { withGuest } from "../components/AuthHOC";
const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [login, loginOptions] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
  });
  const attempt = async () => {
    try {
      await login();
      console.log("loginOptions", loginOptions.data);
      document.cookie = `user_token=${loginOptions.data.login.jwt}; path=/`;

    } catch (err) {
      console.log("error", loginOptions.error);
    }
  };
  return (
    <Layout>
      <Wrapper>
        <h1 className="text-5xl">Log In</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            attempt();
            // dispatch(
            //   setUser({
            //     name: "Kevin Smith",
            //     email: "ksmith@gmail.com",
            //   })
            // );
          }}
          className="flex flex-col space-y-10 mt-6 w-full "
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 lg:w-64 mx-auto"
            type="email"
            placeholder="Email"
            value={email}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 lg:w-64 mx-auto"
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
        <Link href="/forgotpassword" className="mt-6">
          <a className="mt-4 hover:text-green-custom">Forgot your password?</a>
        </Link>
      </Wrapper>
    </Layout>
  );
};

export default withGuest(withApollo(login));
