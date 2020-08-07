import React, { useState, useEffect } from 'react';
//   const withAuth = () => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//       // alert("happened");
//     }, []);

//     const toRender = () => {
//       if (loading) {
//         return "loading..";
//       } else {
//         if (user) {
//           return 'user';
//         } else {
//           return null;
//         }
//       }
//     };
//     return <>{toRender()}</>;
//   };

// export default withAuth;

// ____________________________________________________________________
import Router from 'next/router';
const login = '/login?redirected=true'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = () => {
  if (true) {
    return { auth: true }; // change null to { isAdmin: true } for test it.
  } else {
    return { auth: null }; // change null to { isAdmin: true } for test it.
  }
};

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async ({ res }) => {
    const userAuth = await checkUserAuthentication();

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

  return hocComponent;
};
