import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import AuthContext from "../components/context/AuthContext";
import "../styles/index.css";
import store from "../store";
import { fetchUser } from "../lib/auth";
import { ApolloProvider } from "@apollo/client";
import { withApollo } from "../lib/apolloClient";

const MyApp = ({ Component, pageProps, fetchedUser, apollo }) => {
  const [user, setUser] = useState(fetchedUser);
  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser);
    }
  }, []);
  return (
    <Provider store={store}>
      <ApolloProvider client={apollo}>
        <AuthContext.Provider
          value={{
            user,
            isAuthenticated: !!user,
            setUser,
          }}
        >
          <Component user={user} {...pageProps} />
        </AuthContext.Provider>
      </ApolloProvider>
    </Provider>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const { Component } = ctx;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const result = await fetchUser(ctx);
  // gives page access to their props and the current authed user(if there is one)
  return { ...result, pageProps };
};

export default withApollo(MyApp);
