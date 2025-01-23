import { Route, Routes, Navigate } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import AuthenticatedRoutes from "./AuthRoutes";
import Unauthorized from "../pages/public/Unauthorized";
import useUserDetails from "@/hooks/useUserDtails";

const Root = () => {
  const { isLoggedIn, role } = useUserDetails();

  return (
    <Routes>
      {isLoggedIn ? (
        <>
          {/**-------------  Authenticated Routes -------------**/}
          <Route
            path="/app/*"
            element={<AuthenticatedRoutes userRole={role} />}
          />
        </>
      ) : (
        <>
          {/**-------------  Public Routes -------------**/}
          <Route path="/*" element={<PublicRoutes />} />
        </>
      )}

      <Route
        path="/"
        element={
          isLoggedIn ? (
            <AuthenticatedRoutes userRole={role} />
          ) : (
            <PublicRoutes />
          )
        }
      />

      {/**-------------  Catch All Unmatched Routes -------------**/}
      <Route path="/*" element={<Unauthorized />} />
      <Route path="/*" element={<Navigate to="/unauthorized" />} />
    </Routes>
  );
};

export default Root;
