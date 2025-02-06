import HomepageLayout from "@/layout/homepage";
import { useGetCourseDetailsByIdQuery } from "@/redux/store/apiSlice/common.api";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Card } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import simple from "../../../assets/images/loginImage.png";
import facebook from "../../../assets/images/Facebook_Logo.png";
import Google from "../../../assets/images/google.png";
import Microsoft from "../../../assets/images/google.png";

import { Button } from "@/components/ui/button";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch course data
  const {
    data: courseData,
    isLoading,
    isFetching,
  } = useGetCourseDetailsByIdQuery({ courseId: id }, { skip: !id });

  console.log(courseData);

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id, navigate]);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  const signInMethodsDetails = [
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
          <p className="text-gray-700  pr-40  py-3  leading-6 tracking-wider text-[16px]">
            The React Course covers the fundamentals of React.js, including
            components, props, state management, and React Hooks. You'll learn
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
          <Card className="h-[540px] w-[370px]">
            <div className="h-[230px] p-3 ">
              <img
                src={simple}
                alt=""
                className=" h-full  w-full  rounded-lg"
              />
            </div>

            <div className="p-3 flex gap-4 items-center">
              <span className="text-2xl font-semibold text-gray-800">
                $49.5
              </span>
              <span className="text-xl  text-[#94A3B8] line-through">
                $99.5
              </span>
              <span className="text-xl text-green-600">50% off</span>
            </div>
            <div className="flex flex-col gap-3">
              <Button className=" mx-3 w-[92%] py-6 bg-gray-900 text-white hover:bg-white hover:text-gray-700 border border-gray-700">
                Add To Cart
              </Button>

              <Button className=" mx-3 w-[92%] py-6 bg-white text-gray-700 border border-gray-700 hover:bg-gray-900 hover:text-white">
                {" "}
                Buy Now{" "}
              </Button>
            </div>

            <hr className="text-[#E2E8F0] h-1 mt-6" />

            <div className="mt-3 ml-4">
              <p>Share</p>
              <div className="flex gap-3 my-2">
                {signInMethodsDetails.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="h-12 w-12 border-4 border-gray-100 rounded-full flex justify-center items-center"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="p-1 cursor-pointer"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </HomepageLayout>
  );
};

export default CourseDetails;
