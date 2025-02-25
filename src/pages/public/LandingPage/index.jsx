import { Button } from "@/components/ui/button";
import homepage from "../../../assets/images/homepage.png";
import { Plus } from "lucide-react";
import HomepageLayout from "@/layout/homepage";
import loginPageImage from "../../../assets/images/loginImage.png";
import { useGetTopCateogryAndCoursesQuery } from "@/redux/store/apiSlice/common.api";
import { MdCategory } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { categories, courseRate } from "./constants";
import { FaStar } from "react-icons/fa";
import { CategorySkeleton, CourseSkeleton } from "./components/LoadingSkeleton";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const { data: courseCategoryData, isFetching } = useGetTopCateogryAndCoursesQuery();

  return (
    <>
      <HomepageLayout>
        {/* hero-section */}
        <div className="flex  items-center gap-[6rem] mx-20  pt-16">
          {/* left section */}
          <div className=" px-2 mx-5  w-[620px]  ">
            <h1 className="text-5xl font-semibold ">
              Unlock Your Potential with Delta
            </h1>
            <p className="text-[16px] py-5 text-gray-700 leading-relaxed">
              Welcome to Byway, where learning knows no bounds.
              We believe that education is the key to personal and professional growth,
              and we&apos;re here to guide you on your journey to success. Whether you&apos;re a student,
              professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.
            </p>
            <Button className="border-none py-6 my-3 text-base bg-blue-500 ">
              Start your journey.
            </Button>
          </div>
          {/* right section */}
          <div className=" py-11  ">
            <img src={homepage} alt="" className="" />
          </div>
        </div>

        {/* course rating */}
        <div className="grid grid-cols-4 bg-gray-50 py-10">
          {courseRate.map(({ id, number }) => {
            return (
              <div
                key={id}
                className="flex flex-col justify-center items-center border-r-[3px]"
              >
                <h1 className="flex text-2xl items-center font-semibold">
                  {number} <Plus />
                </h1>
                <p className="text-sm text-gray-600 py-1">
                  Courses by our best mentors
                </p>
              </div>
            );
          })}
        </div>

        {/* top categories */}
        {isFetching && <CategorySkeleton />}
        <div className="mx-20 my-10">
          <div className="flex justify-between ">
            <h1 className="text-[22px] font-semibold text-gray-900 ">
              Top Categories
            </h1>
            <button className="text-[14px] text-[#3B82F6]">See all</button>
          </div>
          <div className="grid grid-cols-4 space-x-4 justify-evenly my-5 ml-4">
            {
              courseCategoryData?.categoryData?.length > 0 &&
              courseCategoryData?.categoryData
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
                })
            }
          </div >
        </div >

        {isFetching && <CourseSkeleton />}
        {/* top courses */}
        <div className="mx-20 my-10">
          <div className="flex justify-between ">
            {" "}
            <h1 className="text-[22px] font-semibold text-gray-900 ">
              Top Courses
            </h1>
            <button className="text-[14px] text-[#3B82F6]">See all</button>
          </div>
          <div className="grid grid-cols-4 space-x-4 justify-evenly my-5 ml-4">
            {
              courseCategoryData?.courseData?.length > 0 &&
              courseCategoryData?.courseData
                ?.filter((_, index) => index <= 3)
                .map((item) => {
                  return (
                    <div
                      key={item.id}
                      className=""
                      onClick={() => navigate(`/course/${item.id}`)}
                    >
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
                })
            }
          </div >
        </div >
      </HomepageLayout >
    </>
  );
};

export default Landing;
