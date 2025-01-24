import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../../pages/public/LandingPage/index";
import LoginPage from "../../pages/public/Login/index";
import SignupPage from "@/pages/public/SignUp/index";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/**-------------  Catch-all for unmatched routes -------------**/}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PublicRoutes;
