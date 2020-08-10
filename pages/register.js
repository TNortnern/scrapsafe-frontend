import { useMutation } from "@apollo/client";
import React, { useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import Input from "../components/common/Input";
import Wrapper from "../components/layout/Wrapper";
import FreePaidButton from "../components/FreePaidButton";
import Button from "../components/common/Button";
import { withGuest } from "../components/AuthHOC";
import { REGISTER } from "../lib/graphql/auth";
import AppContext from "../components/context/AuthContext";
import Router from "next/router";
import { set } from "js-cookie";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [active, setActive] = useState("free");
  const { setUser } = useContext(AppContext);
  const [register, registerOptions] = useMutation(REGISTER, {
    variables: {
      name,
      username: `${name} ${new Date().toString()}`,
      email,
      password,
    },
  });
  const attempt = async () => {
    if (password !== repeatPassword) return;
    try {
      const res = await register();
      setUser(res.data.register.user);
      set("user_token", res.data.register.jwt);
      Router.push("/");
    } catch (err) {
      console.log("error", registerOptions.error);
    }
  };
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1 className="text-5xl mb-4 text-center">Sign Up</h1>
          <p className="max-w-xs text-center">
            A description of what you get with a paid plan that can be either
            long or short
          </p>
          <FreePaidButton active={active} setActive={setActive} />
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
            <Button
              type="submit"
              className={`mx-auto block mt-5 ${
                registerOptions.loading ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default withGuest(register);
