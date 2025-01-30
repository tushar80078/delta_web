import Loader from "@/components/loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useGetCateogryAndCoursesQuery } from "@/redux/store/apiSlice/categoryAndCourses.api";
import React from "react";

import { FaLayerGroup } from "react-icons/fa"; // All
import { FaCode } from "react-icons/fa"; // Frontend
import { FaDatabase } from "react-icons/fa"; // Backend
import { FaLaptopCode } from "react-icons/fa"; // IT
import { MdCategory } from "react-icons/md";

<MdCategory size={24} className="text-gray-700" />;

const TopCategories = () => {
  const categories = [
    { icon: <FaLayerGroup size={30} /> },
    { icon: <FaDatabase size={30} /> },
    { icon: <FaCode size={30} /> },

    { icon: <FaLaptopCode size={30} /> },
  ];

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
          Top Categories
        </h1>
        <button className="text-[14px] text-[#3B82F6]">See all</button>
      </div>
      <div className="grid grid-cols-4 space-x-4 justify-evenly my-5 ml-4">
        {allData.categoryData.length > 0 &&
          allData.categoryData
            ?.filter((_, index) => index <= 3)
            .map((item, i) => {
              return (
                <div key={item.id} className="">
                  {" "}
                  <Card className="w-[300px] flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center py-4">
                      <div className="w-[100px] h-[100px] rounded-full bg-blue-100 flex justify-center items-center ">
                        {categories[i]?.icon ? (
                          <div className="text-blue-500 font-normal">
                            {" "}
                            {categories[i].icon}
                          </div>
                        ) : (
                          <MdCategory size={40} className="text-blue-600" />
                        )}
                      </div>

                      <CardHeader className="py-0 mt-3 font-semibold text-xl">
                        {item.category}
                      </CardHeader>
                      <CardContent className="py-2">12 Courses</CardContent>
                    </div>
                  </Card>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default TopCategories;
