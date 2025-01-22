import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../../pages/public/LandingPage";
import LoginPage from "../../pages/public/Login/LoginPage";
import SignupPage from "@/pages/public/SignUp/SignupPage";

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
