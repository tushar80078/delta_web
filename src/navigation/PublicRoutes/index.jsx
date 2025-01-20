import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../../pages/public/LandingPage";
import SignUpForm from "../../pages/public/SignUp";
import LoginPage from "../../pages/public/Login";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpForm />} />

      {/**-------------  Catch-all for unmatched routes -------------**/}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PublicRoutes;
