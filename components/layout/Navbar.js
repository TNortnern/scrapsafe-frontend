import React, { useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import AppContext from "../context/AuthContext";
import { remove } from "js-cookie";

const Navbar = () => {
  const { user, setUser } = useContext(AppContext);
  return (
    <nav className="flex justify-between py-2 mx-4 relative z-50">
      <img
        className="cursor-pointer"
        onClick={() => {
          Router.push("/");
        }}
        src="/Logo.png"
        alt=""
      />

      <ul className="flex space-x-2">
        {!user ? (
          <li>
            <Link href="/login">
              <a className="hover:text-green-custom">Login</a>
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/gridview">
                <a className="hover:text-green-custom">Grid View</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:text-green-custom"> Upload An Image</a>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <a className="hover:text-green-custom">Settings</a>
              </Link>
            </li>
            <li>
              <span
                onClick={() => {
                  setUser(null);
                  remove("user_token");
                  Router.push("/login");
                }}
                className="hover:text-green-custom cursor-pointer"
              >
                Log Out
              </span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
