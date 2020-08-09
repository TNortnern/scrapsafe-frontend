import React, { useContext } from "react";
import AppContext from "../context/AuthContext";
import UnauthedRoutes from "./UnauthedRoutes";
import AuthedRoutes from "./AuthedRoutes";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const { user, setUser } = useContext(AppContext);
  return (
    <nav className="flex justify-between pl-6 py-2 mx-4 relative z-50">
      <NavLogo />
      <ul className="flex space-x-5">
        {!user ? (
          <UnauthedRoutes />
        ) : (
          <AuthedRoutes setUser={setUser} />
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
