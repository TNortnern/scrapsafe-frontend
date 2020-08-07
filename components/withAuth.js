import { useState, useEffect } from "react";
  const withAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      // alert("happened");
    }, []);

    const toRender = () => {
      if (loading) {
        return "loading..";
      } else {
        if (user) {
          return 'user';
        } else {
          return null;
        }
      }
    };
    return <>{toRender()}</>;
  };

export default withAuth;
