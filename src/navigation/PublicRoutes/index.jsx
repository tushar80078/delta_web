import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../../pages/public/LandingPage/index";
import LoginPage from "../../pages/public/Login/index";
import SignupPage from "@/pages/public/SignUp/index";
import CourseDetails from "@/pages/public/CourseInfo/index";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/course/:id" element={<CourseDetails />} />

      {/**-------------  Catch-all for unmatched routes -------------**/}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PublicRoutes;
