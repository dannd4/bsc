import { Outlet } from "react-router";

interface PrivateRouteProps {
  children?: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  // const user = useUserContext();
  const user = {};

  if (!user) {
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  }

  return children || <Outlet />;
}
