import HomepageLayout from "@/layout/homepage";
import { useGetCourseDetailsByIdQuery } from "@/redux/store/apiSlice/common.api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import simple from "../../../assets/images/loginImage.png";
// import AddToCart from "./components/AddToCart.jsx";
import { courseDetailsTab } from "./constant";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Cart from "@/pages/public/CourseInfo/components/Cart";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  // Fetch course data
  const {
    data: courseData,
    isLoading,
    isFetching,
  } = useGetCourseDetailsByIdQuery({ courseId: id }, { skip: !id });

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id, navigate]);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  const ActiveTabComponent = courseDetailsTab[active]?.Component;

  return (
    <HomepageLayout>

      <div className="pt-20 pb-4 px-20 bg-gray-50 relative">
        <div className=" py-3 flex gap-4 items-center  ">
          <span
            className="cursor-pointer text-[17px]"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span>
            <IoIosArrowForward className="cursor-pointer font-bold" />
          </span>
          <span className="cursor-pointer text-[17px]">Categories</span>
          <span>
            <IoIosArrowForward className="cursor-pointer font-bold" />
          </span>
          <span className="text-blue-500 cursor-pointer text-[17px]">
            {courseData?.data?.courseName}
          </span>
        </div>
        <div className="py-5  w-[70%]">
          <h1 className="text-[40px] text-gray-7s00 font-semibold">
            {" "}
            Introduction to {courseData?.data?.courseName}
          </h1>
          <p className="text-gray-700  pr-40  py-3  leading-6 tracking-wide text-[16px]">
            The React Course covers the fundamentals of React.js, including
            components, props, state management, and React Hooks. You`ll learn
            how to build interactive UIs, manage application state efficiently,
            and integrate APIs. The course also includes advanced topics like
            React Router, Redux, and performance optimization.
          </p>

          <div className="flex items-center gap-3">
            <span className="flex items-center text-yellow-500 text-xl gap-1 ">
              4.6 <FaStar size={18} />
              <FaStar size={18} />
              <FaStar size={18} />
              <FaStar size={18} />
              <FaStar size={18} />
            </span>
            <span className="text-gray-500">(2000 rating)</span>
          </div>

          <div className="flex gap-2 items-center py-5">
            <img src={simple} alt="" className="h-12 w-12 rounded-full" />
            <p className="text-gray-700">
              Created by <span className="text-blue-500 ">Ronal Richards</span>
            </p>
          </div>

          <div className="flex gap-2 items-center ml-1">
            <MdLanguage className="text-gray-700" size={25} />
            <span className="text-gray-600 text-base">
              English, Spanish, Italian, German
            </span>
          </div>
        </div>

        <div className="h-[530px] w-[380px]  absolute right-16 top-24">
          <Cart />
        </div>
      </div>

      <div className="  w-[70%] pl-24 mt-5">
        {/* Navigation Tabs */}
        <nav className=" flex gap-10">
          {courseDetailsTab?.map((tab, index) => {
            return (
              <Button
                key={index}
                onClick={() => setActive(index)}
                className={cn(
                  "py-6 bg-white text-gray-600 px-12 text-sm border border-gray-200 shadow-none mt-3 font-medium hover:bg-blue-50",
                  index == active && "bg-blue-100"
                )}
              >
                {tab.name}
              </Button>
            );
          })}
        </nav>
        <div className="px-4 py-3">
          {ActiveTabComponent && <ActiveTabComponent />}
        </div>
      </div>
    </HomepageLayout>
  );
};

export default CourseDetails;
