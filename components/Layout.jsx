import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { Button } from "./Button";

export const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      {children}
    </div>
  );
};

const Navbar = () => {
  const { user, signinWithGoogle, signout } = useAuth();
  return (
    <div className="inline-flex items-center justify-between w-full px-16 py-4 bg-gray-300">
      <Link href="/">
        <Button>Twitter</Button>
      </Link>
      {user ? (
        <span className="inline-flex items-center">
          {user.email} |{" "}
          <Button onClick={signout} className="pl-3">
            Déconnexion
          </Button>
        </span>
      ) : (
        <Button onClick={signinWithGoogle}>Google Sign In</Button>
      )}
    </div>
  );
};
