import WithNavbar from "@/layout/admin";
import Heading from "@/molecules/heading";
import { useGetCourseByIdQuery } from "@/redux/store/apiSlice/course.api";
import { useNavigate, useParams } from "react-router-dom";
import constants from "./constants";
import useLayoutDetails from "@/hooks/useLayoutDetails";
import { cn } from "@/lib/utils";
import { useEffect, } from "react";
import useUserDetails from "@/hooks/useUserDtails";

const CourseInformation = () => {
    const navigate = useNavigate();
    const { courseId } = useParams();
    const { setActiveCourseTabFn, activeCourseTab } = useLayoutDetails();
    const { data: userData } = useUserDetails();

    // Fetch course data
    const { data: courseData } = useGetCourseByIdQuery(
        { courseId: courseId, teacherId: userData?.id },
        { skip: !courseId }
    );

    useEffect(() => {
        if (!courseId) {
            // Redirect if courseId is not present
            navigate("/app/courses");
            return;
        }

        // If there's no active tab set or if the course changes, set to the first tab
        if (!activeCourseTab || activeCourseTab === constants.courseTabs[0].name) {
            setActiveCourseTabFn({ tabName: constants?.courseTabs[0]?.name });
        }
    }, [courseId, activeCourseTab, setActiveCourseTabFn, navigate]);


    // Extract course name for heading
    const courseName = courseData?.data?.courseName || "Loading...";

    // Render tab content
    const ActiveTabComponent = constants?.courseTabs.find(
        (tab) => tab.name === activeCourseTab
    )?.Component;

    return (
        <WithNavbar>
            <div>
                {/* Heading */}
                <div className="mt-2">
                    <Heading title={courseName} />
                </div>

                {/* Navigation Tabs */}
                <nav className="flex mt-5 w-full border-b-2 gap-5 pl-2">
                    {constants?.courseTabs?.map((tab, index) => (
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

export default CourseInformation;
