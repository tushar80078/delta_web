import AddCategory from "@/components/forms/AddCategory";
import Loader from "@/components/loader";
import { DialogComponent } from "@/components/modal";
import { PaginationComponent } from "@/components/pagination";
import { Button } from "@/components/ui/button";
import useLayoutDetails from "@/hooks/useLayoutDetails";
import Heading from "@/molecules/heading";
import { useGetCategoriesQuery } from "@/redux/store/apiSlice/category.api";
import { useState } from "react";

const Screen = () => {
  const { adminPagination, changePaginationFn } = useLayoutDetails();
  const [modalState, setModalState] = useState(false);

  const { data: categoryData, isLoading: isCategoryLoading } =
    useGetCategoriesQuery({
      page: adminPagination?.page || 1,
      pageSize: adminPagination?.pageSize || 10,
    });

  const handlePageChange = (page) => {
    changePaginationFn({ page, pageSize: undefined });
  };

  const loading = isCategoryLoading;

  return (
    <div>
      {/* Heading */}
      {loading && <Loader />}
      <div className="flex  justify-between w-[100%]   ">
        <Heading title={"Categories"} />

        <Button size="lg" onClick={() => setModalState(true)}>
          Add Category
        </Button>
      </div>

      {/* Courses */}
      <div className="h-[75vh] overflow-auto mt-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-6   ">
          {categoryData?.data?.map((ele, index) => {
            return (
              <div key={index}>
                <div className="border rounded-sm px-3 py-3 bg-white text-sm ">
                  <div className="mt-2  border-b pb-3 flex justify-between ">
                    <div className="poppins-semibold text-[17px] flex-wrap">
                      {ele.category}
                    </div>
                  </div>
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
        modalSize="sm"
      >
        <AddCategory onClose={() => setModalState(false)} />
      </DialogComponent>
    </div>
  );
};

export default Screen;
