import useLayoutDetails from "@/hooks/useLayoutDetails";
import WithNavbar from "@/layout/admin";
import React, { useEffect } from "react";
import constants from "./Constant";
import { IoIosArrowBack } from "react-icons/io";

import { useNavigate, useParams } from "react-router-dom";
import Heading from "@/molecules/heading";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ChapterContent = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const { setActiveCourseTabFn, activeCourseTab } = useLayoutDetails();

  useEffect(() => {
    if (!courseId && !lessonId) {
      // Redirect if courseId  and lessonid is not present
      navigate("/app/courses");
      return;
    }

    // If there's no active tab set or if the course changes, set to the first tab
    if (
      !activeCourseTab ||
      activeCourseTab === constants.chaperContentTabs[0].name
    ) {
      setActiveCourseTabFn({ tabName: constants?.chaperContentTabs[0]?.name });
    }
  }, [courseId, activeCourseTab, setActiveCourseTabFn, navigate, lessonId]);
  // Extract course name for heading
  const chaptereName = "hooks";

  // Render tab content
  const ActiveTabComponent = constants?.chaperContentTabs.find(
    (tab) => tab.name === activeCourseTab
  )?.Component;

  return (
    <WithNavbar>
      <div>
        {/* Heading */}
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center gap-3  cursor-pointer">
            <IoIosArrowBack
              size={22}
              onClick={() => navigate(`/app/courses/${courseId}`)}
            />

            <Heading title={chaptereName} className="text-lg" />
          </div>
          <div className="flex gap-4">
            <Button className="bg-red-600 py-5 px-5 hover:bg-red-400">
              Delete
            </Button>
            <Button className="text-gray-900 bg-white py-5 px-5 hover:bg-gray-50 border">
              Move to Draft
            </Button>
            <Button className="py-5 px-5">Add Course</Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex mt-5 w-full border-b-2 gap-5 pl-2">
          {constants?.chaperContentTabs?.map((tab, index) => (
            <div
              key={index}
              className={cn(
                "poppins-regular text-[14px] cursor-pointer py-2 transition-all",
                tab.name === activeCourseTab &&
                  "text-blue-500 poppins-semibold border-b-2 border-b-blue-500"
              )}
              onClick={() => setActiveCourseTabFn({ tabName: tab.name })}
            >
              {tab.name}
            </div>
          ))}
        </nav>

        {/* Active Tab Content */}
        <div className="px-4 py-3">
          {ActiveTabComponent && <ActiveTabComponent />}
        </div>
      </div>
    </WithNavbar>
  );
};

export default ChapterContent;
