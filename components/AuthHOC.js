import React from "react";
import Router from "next/router";
import { fetchUser } from "../lib/auth";

let res;
const redirect = (route = "") => {
  // on client
  if (typeof window !== "undefined" && window.document !== undefined) {
    Router.push(`/${route}`);
  }
  if (res) {
    res.writeHead(301, {
      Location: `/${route}`,
    });
    res.end();
  }
};

/**
 * @param {React.Component} Component pass the component you need to check for authentication
 * @returns redirect if not authenticated
 */
export const withAuthed = (Component = React.Component) =>
  class AuthComponent extends React.Component {
    static async getInitialProps(ctx) {
      // allows redirect function to use response
      res = ctx.ctx.res;
      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      const result = await fetchUser(ctx);
      console.log('result', result)
      if (result.fetchedUser) return { pageProps, fetchedUser: result.fetchedUser };
      return redirect("login");
    }

    render() {
      return <Component {...this.props} />;
    }
  };

/**
 * @param {React.Component} Component pass the component you need to check for authentication
 * @returns redirect if already authenticated
 */
export const withGuest = (Component = React.Component) =>
  class AuthComponent extends React.Component {
    static async getInitialProps(ctx) {
      // allows redirect function to use response
      res = ctx.ctx.res;
      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      const result = await fetchUser(ctx);
      if (result.error) return { pageProps };
      redirect();
    }

    render() {
      return <Component {...this.props} />;
    }
  };
