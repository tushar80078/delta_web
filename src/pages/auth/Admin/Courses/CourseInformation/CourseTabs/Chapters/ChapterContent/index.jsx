import useLayoutDetails from "@/hooks/useLayoutDetails";
import WithNavbar from "@/layout/admin";
import { useEffect } from "react";
import constants from "./constants";
import { IoIosArrowBack } from "react-icons/io";

import { useNavigate, useParams } from "react-router-dom";
import Heading from "@/molecules/heading";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useGetLessonByIdQuery } from "@/redux/store/apiSlice/lesson.api";

const ChapterContent = () => {

  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const { setActiveChapterTabFn, activeChapterTab } = useLayoutDetails();

  const { data } = useGetLessonByIdQuery({ lessonId }, { skip: !lessonId });

  console.log('data', data);

  useEffect(() => {
    if (!courseId && !lessonId) {
      navigate("/app/courses");
      return;
    }
    if (!activeChapterTab || activeChapterTab === constants.chaperContentTabs[0].name) {
      setActiveChapterTabFn({ tabName: constants?.chaperContentTabs[0]?.name });
    }
  }, [lessonId]);


  const ActiveTabComponent = constants?.chaperContentTabs.find(
    (tab) => tab.name === activeChapterTab
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

            <Heading title={data?.data?.lessonName || ''} className="text-lg" />
          </div>
          <div className="flex gap-4">
            <Button className="bg-red-600 py-5 px-5 hover:bg-red-400">
              Delete
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex mt-5 w-full border-b-2 gap-5 pl-2">
          {constants?.chaperContentTabs?.map((tab, index) => (
            <div
              key={index}
              className={cn(
                "poppins-regular text-[14px] cursor-pointer py-2 transition-all",
                tab.name === activeChapterTab &&
                "text-blue-500 poppins-semibold border-b-2 border-b-blue-500"
              )}
              onClick={() => setActiveChapterTabFn({ tabName: tab.name })}
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
