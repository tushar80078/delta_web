import facebook from "../../../assets/images/Facebook_Logo.png";
import Google from "../../../assets/images/google.png";
import Microsoft from "../../../assets/images/google.png";
import Description from "@/pages/public/CourseInfo/components/Description";
import Instructor from "@/pages/public/CourseInfo/components/Instructor";
import Reviews from "@/pages/public/CourseInfo/components/Reviews";
import Syllabus from "@/pages/public/CourseInfo/components/Syllabus";

export const signInMethodsDetails = [
  {
    id: 1,
    name: "Facebook",
    image: facebook,
    color: "blue",
  },
  {
    id: 2,
    name: "Google",
    image: Google,
    color: "red",
  },
  {
    id: 3,
    name: "Microsoft",
    image: Microsoft,
    color: "black",
  },
];

export const courseDetailsTab = [
  {
    name: "Description",
    Component: Description,
  },
  {
    name: "Instructor",
    Component: Instructor,
  },
  {
    name: "Syllabus",
    Component: Syllabus,
  },
  {
    name: "Reviews",
    Component: Reviews,
  },
];
