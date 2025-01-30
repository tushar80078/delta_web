import Loader from "@/components/loader";
import loginPageImage from "../../../assets/images/loginImage.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useGetCateogryAndCoursesQuery } from "@/redux/store/apiSlice/categoryAndCourses.api";
import React from "react";
import { FaStar } from "react-icons/fa";

const TopCourses = () => {
  const {
    data: allData,
    isLoading,
    isError,
    error,
  } = useGetCateogryAndCoursesQuery();

  if (isLoading) {
    return <div>Loading..... </div>;
  }
  console.log(allData);

  return (
    <div className="mx-20 my-10">
      <div className="flex justify-between ">
        {" "}
        <h1 className="text-[22px] font-semibold text-gray-900 ">
          Top Courses
        </h1>
        <button className="text-[14px] text-[#3B82F6]">See all</button>
      </div>
      <div className="grid grid-cols-4 space-x-4 justify-evenly my-5 ml-4">
        {allData.courseData.length > 0 &&
          allData.courseData
            ?.filter((_, index) => index <= 3)
            .map((item, i) => {
              return (
                <div key={item.id} className="">
                  {" "}
                  <Card className="w-[300px] ">
                    <div className="w-full p-3">
                      <div className="w-[100%] py-2 h-[170px] ">
                        <img
                          src={loginPageImage}
                          alt=""
                          className="h-full w-full rounded object-cover"
                        />
                      </div>

                      <CardHeader className="py-0  px-1 font-semibold text-lg text-gray-700">
                        {item.courseName}
                      </CardHeader>
                      <CardDescription className="px-1">
                        {item.courseDescription}
                      </CardDescription>
                      <CardContent className="py-1 px-1 flex gap-3 items-center">
                        <div className="flex gap-1 text-yellow-500">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <span className="text-sm">(1200 ratings)</span>
                      </CardContent>
                      <CardFooter className="px-1 py-1 ">
                        {" "}
                        <div className="font-semibold text-lg text-gray-700">
                          {" "}
                          $ {item.courseFees}{" "}
                        </div>
                      </CardFooter>
                    </div>
                  </Card>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default TopCourses;
