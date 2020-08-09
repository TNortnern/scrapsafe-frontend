// lib/withApollo.js
import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { isServer, getClientCookie } from "../helpers";


export default withApollo(
  (ctx) => {
    const cookie = parseCookies(ctx.ctx).user_token
      ? parseCookies(ctx.ctx).user_token
      : "";
    let headers = {}
    if (cookie) {
        headers.Authorization = `Bearer ${cookie}`;
    }
    return new ApolloClient({
      uri: "https://scrapsafe-be.herokuapp.com/graphql",
      cache: new InMemoryCache().restore(ctx.initialState || {}),
      headers,
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
