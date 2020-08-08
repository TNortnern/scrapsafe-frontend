import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag'
import Router from 'next/router';
import withApollo from '../lib/withApollo';
import { parseCookies, setCookie, destroyCookie } from "nookies";

const login = '/login?redirected=true'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = async (apollo) => {
  let auth;
  try {
    const query = await apollo.query({
      query: gql`query {
        self {
          id
        }
      }`
    })
    const { data } = query;
    console.log('data', data)
     if (data.self) {
       auth = true;
     }
  } catch (err) {
    // destroyCookie()
    auth = false;
  }
    return { auth }; // change null to { isAdmin: true } for test it.
};

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (ctx) => {
    const { res } = ctx;
    const userAuth = await checkUserAuthentication(ctx.apolloClient);

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (res) {
        res?.writeHead(302, {
          Location: login,
        });
        res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps(userAuth);
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return withApollo(hocComponent);
};
