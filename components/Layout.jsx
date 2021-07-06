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
  const { user, signinWithGoogle } = useAuth();
  return (
    <div className="inline-flex justify-between w-full px-16 py-4 bg-gray-300">
      <span>Twitter</span>
      {user ? (
        <span>{user.email}</span>
      ) : (
        <Button onClick={signinWithGoogle}>Google Sign In</Button>
      )}
    </div>
  );
};
