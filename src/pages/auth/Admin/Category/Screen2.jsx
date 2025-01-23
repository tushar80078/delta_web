import AddCourse from "@/components/forms/AddCourse";
import Loader from "@/components/loader";
import { DialogComponent } from "@/components/modal";
import { PaginationComponent } from "@/components/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useLayoutDetails from "@/hooks/useLayoutDetails";
import { cn } from "@/lib/utils";
import Heading from "@/molecules/heading";
import { useGetCategoriesQuery } from "@/redux/store/apiSlice/category.api";
import { useGetCoursesQuery } from "@/redux/store/apiSlice/course.api";
import { useState } from "react";

const Screen = () => {
  const {
    activeCourseCategory,
    setActiveCourseCategoryFn,
    adminPagination,
    changePaginationFn,
  } = useLayoutDetails();
  const [modalState, setModalState] = useState(false);

  const { data: courseData, isLoading } = useGetCoursesQuery({
    page: adminPagination?.page || 1,
    pageSize: adminPagination?.pageSize || 10,
    category: activeCourseCategory,
  });
  console.log(courseData);

  const { data: categoryData, isLoading: isCategoryLoading } =
    useGetCategoriesQuery({
      page: adminPagination?.page || 1,
      pageSize: adminPagination?.pageSize || 10,
    });
  console.log(categoryData);

  const handlePageChange = (page) => {
    changePaginationFn({ page, pageSize: undefined });
  };

  const loading = isLoading || isCategoryLoading;

  return (
    <div>
      {/* Heading */}
      {loading && <Loader />}
      <div className="flex  justify-between w-[100%] ">
        <Heading title={"Categories"} />

        <Button size="lg" onClick={() => setModalState(true)}>
          Add Category
        </Button>
      </div>

      {/* Categories */}
      {/* <div className="flex w-full overflow-auto py-2 gap-2">
        {categoryData?.data?.map((ele, index) => {
          return (
            <div
              key={index}
              className={cn(
                "border transition-all rounded-sm px-3 cursor-pointer py-1 bg-white text-sm ",
                activeCourseCategory === ele.category &&
                  "bg-primary text-secondary"
              )}
              onClick={() =>
                setActiveCourseCategoryFn({ category: ele.category })
              }
            >
              {ele.category}
            </div>
          );
        })}
      </div> */}

      {/* Courses */}
      <div className="h-[75vh] overflow-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-6   ">
          {categoryData?.data?.map((ele, index) => {
            return (
              <div key={index}>
                <div className="border rounded-sm px-3 py-3 bg-white text-sm ">
                  <div className="mt-2  border-b pb-3 flex justify-between ">
                    <div className="poppins-semibold text-[17px] flex-wrap">
                      {ele.category}
                    </div>
                    {/* <Badge
                      className={cn(
                        "border rounded-sm border-emerald-500 bg-transparent text-emerald-600  shadow-md  poppins-regular hover:bg-emerald-600 hover:text-white cursor-pointer ",
                        !ele.isFree &&
                          "text-rose-500 border-rose-500 hover:bg-red-500 hover:text-white "
                      )}
                    >
                      {ele.isFree ? "Free" : "Paid"}
                    </Badge> */}
                  </div>

                  {/* <div className="mt-2 grid grid-cols-3 gap-1">
                    {/* Price }
                    <div>
                      <div className="poppins-semibold text-[14px]">$50</div>
                      <div className=" text-[12px]">Price</div>
                    </div>

                    // Lessons
                    <div>
                      <div className="poppins-semibold text-[14px]">54</div>
                      <div className=" text-[12px]">Chapters</div>
                    </div>

                    // Students
                    <div>
                      <div className="poppins-semibold text-[14px]">288</div>
                      <div className=" text-[12px]">Students</div>
                    </div>
                 </div>*/}

                  {/* <div className="mt-2 grid grid-cols-3 gap-1">
                    {/* Certifications }
                    <div>
                      <div className="poppins-semibold text-[14px]">54</div>
                      <div className=" text-[12px]">Certificates</div>
                    </div>

                    {/* Lessons }
                    <div>
                      <div className="poppins-semibold text-[14px]">84</div>
                      <div className=" text-[12px]">Reviews</div>
                    </div>

                    {/* Students }
                    <div>
                      <div className="poppins-semibold text-[14px]">500</div>
                      <div className=" text-[12px]">Added To Shelf</div>
                    </div>
                  </div>*/}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-5">
        {categoryData?.meta && (
          <PaginationComponent
            currentPage={categoryData.meta.currentPage}
            totalPages={categoryData.meta.totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      <DialogComponent
        open={modalState}
        onClose={() => setModalState(false)}
        title={"Category Information"}
        description={"Add all required information"}
        modalSize="lg"
      >
        <AddCourse onClose={() => setModalState(false)} />
      </DialogComponent>
    </div>
  );
};

export default Screen;
