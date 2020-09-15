import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
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
import { ToastContainer, toast } from "react-toastify";

const signup = () => {
  const { handleSubmit, register, errors } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [active, setActive] = useState("free");
  const { setUser } = useContext(AppContext);
  const [newUser, registerOptions] = useMutation(REGISTER, {
    variables: {
      name,
      username: `${name} ${new Date().toString()}`,
      email,
      password,
    },
  });
  const notify = () => toast.error('Passwords must match.')
  const attempt = async () => {
    if (password !== repeatPassword) {
      notify();
      return
    }
    try {
      const res = await newUser();
      setUser(res.data.register.user);
      set("user_token", res.data.register.jwt);
      Router.push("/");
    } catch (err) {
      console.log("error", registerOptions.error);
    }
  };
  const onSubmit = () => {
    attempt();
  };

  return (
    <Layout>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Wrapper>
        <div>
          <h1 className="mb-4 text-5xl text-center">Sign Up</h1>
          <p className="max-w-xs text-center">
            A description of what you get with a paid plan that can be either
            long or short
          </p>
          <FreePaidButton active={active} setActive={setActive} />
          <form
            method="POST"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mt-6 w-auth-inputs"
          >
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              value={name}
              name="name"
              register={register}
              errors={errors}
              rule={{ required: true }}
              errorMessage="Name field is required."
            />
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
            <Input
              onChange={(e) => setRepeatPassword(e.target.value)}
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              name="repeatPassword"
              register={register}
              errors={errors}
              rule={{ required: true }}
              errorMessage="Passwords must match."
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

export default withGuest(signup);
