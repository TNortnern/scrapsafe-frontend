// lib/withApollo.js
import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { isServer, getClientCookie } from '../helpers'

let cookie = !isServer ? getClientCookie('user_token') : ''

export default withApollo(
  (ctx) => {
      cookie = parseCookies(ctx.ctx).user_token;
      console.log('ctx', cookie)

    return new ApolloClient({
      uri: "https://finance-strapi-cms.herokuapp.com/graphql",
      cache: new InMemoryCache().restore(ctx.initialState || {}),
      headers:{
          Authorization: `Bearer ${cookie}` 
      }
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
