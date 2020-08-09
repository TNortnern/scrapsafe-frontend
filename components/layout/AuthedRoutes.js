import Link from "next/link";
import { remove } from "js-cookie";
import Router from "next/router";

const AuthedRoutes = ({setUser}) => {
    return (
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
    );
}

export default AuthedRoutes;