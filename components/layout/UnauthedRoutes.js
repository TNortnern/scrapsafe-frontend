import { useRouter } from "next/router";
import Link from "next/link";

const UnauthedRoutes = () => {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/register" ? (
        <li>
          <Link href="/login">
            <a className="hover:text-green-custom">Login</a>
          </Link>
        </li>
      ) : (
        <li>
          <Link href="/register">
            <a className="hover:text-green-custom">Sign up</a>
          </Link>
        </li>
      )}
    </>
  );
};

export default UnauthedRoutes;
