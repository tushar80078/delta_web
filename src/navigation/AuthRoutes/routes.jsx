import Unauthorized from "../../pages/public/Unauthorized";
import Courses from "@/pages/auth/Admin/Courses";
import Category from "@/pages/auth/Admin/Category";
import UserHome from "../../pages/auth/Admin/HomePage";
import CourseDetails from "../../pages/auth/Admin/Courses/CourseInformation/index"

import { BookOpenText, Home, Shapes } from "lucide-react";

const authRoutes = [
  {
    path: "/user-home",
    access: ["Admin"],
    description: "This is for when user login and see first page after login",
    element: <UserHome />,
    isShowOnSidebar: true,
    icon: Home,
    title: "Home",
  },
  {
    path: "/courses",
    access: ["Admin"],
    description: "This is for courses",
    element: <Courses />,
    title: "Courses",
    icon: BookOpenText,
    isShowOnSidebar: true,
  },
  {
    path: "/courses/:courseId",  // Dynamic route for course detail
    access: ["Admin"],
    description: "This is for viewing a specific course",
    element: <CourseDetails />, // A new component for showing individual course details
    title: "Course Detail",
    isShowOnSidebar: false,  // Set to false if you don't want it shown on sidebar
  },
  {
    path: "/category",
    access: ["Admin"],
    description: "This is for Categories",
    element: <Category />,
    title: "Categories",
    icon: Shapes,
    isShowOnSidebar: true,
  },
  {
    path: "/unauthorized",
    access: ["All"],
    description: "If user hit any other Route",
    element: <Unauthorized />,
    isShowOnSidebar: false,
  },
];

export default authRoutes;
