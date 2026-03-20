import { Navigate, Outlet } from "react-router";

function ProtectedRoutes() {
  const isAuth = true;
  return (
    <div>
      {isAuth ?
        <Outlet />
      : <Navigate to='/' />}
    </div>
  );
}

export default ProtectedRoutes;
