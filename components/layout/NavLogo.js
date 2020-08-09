import Router from "next/router";

const NavLogo = () => {
    return (
      <img
        className="cursor-pointer"
        onClick={() => {
          Router.push("/");
        }}
        src="/Logo.png"
        alt="logo"
      />
    );
}

export default NavLogo;