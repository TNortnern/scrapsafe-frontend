import React, { useState, useContext } from "react";
import { set } from "js-cookie";
import { useForm } from "react-hook-form";
import Layout from "../components/layout/Layout";
import Input from "../components/common/Input";
import Wrapper from "../components/layout/Wrapper";
import Button from "../components/common/Button";
import { LOGIN } from "../lib/graphql/auth";
import { useMutation } from "@apollo/client";
import { withGuest } from "../components/AuthHOC";
import AppContext from "../components/context/AuthContext";
import Router from "next/router";

const login = () => {
  const { handleSubmit, register, errors } = useForm();
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(null);
  const { setUser } = useContext(AppContext);
  const [password, setPassword] = useState("");
  const [login, loginOptions] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
  });
  const attempt = async () => {
    setInvalid(false);
    try {
      const res = await login();
      setUser(res.data.login.user);
      set("user_token", res.data.login.jwt);
      Router.push("/");
    } catch (err) {
      setInvalid(true);
      console.log("error", loginOptions.error);
    }
  };
  const onSubmit = () => {
    attempt();
  };
  return (
    <Layout>
      <Wrapper>
        <div className="text-center">
          <h1 className="text-5xl">Log In</h1>
          {invalid && (
            <span className="text-red-500">Invalid email or password.</span>
          )}
          <form
            method="POST"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mt-6 w-auth-inputs"
          >
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              register={register}
              errors={errors}
              rule={{
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              }}
              errorMessage="Please enter a valid email address."
            />

            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              register={register}
              errors={errors}
              rule={{ required: true }}
              errorMessage="Password field is required."
            />
            <div className="text-center">
              <Button
                type="submit"
                className={`hover:opacity-75 inline-block ${
                  loginOptions.loading ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
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
