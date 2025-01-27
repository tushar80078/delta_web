import AddCategory from "@/components/forms/AddCategory";
import Loader from "@/components/loader";
import { DialogComponent } from "@/components/modal";
import { Button } from "@/components/ui/button";
import Heading from "@/molecules/heading";
import { useGetCategoriesQuery } from "@/redux/store/apiSlice/category.api";
import { useState } from "react";

const Screen = () => {

  const [modalState, setModalState] = useState(false);

  const { data: categoryData, isLoading: isCategoryLoading } = useGetCategoriesQuery();

  return (
    <div>

      {isCategoryLoading && <Loader />}

      {/* Heading */}
      <div className="flex  justify-between w-[100%] ">
        <Heading title={"Categories"} />

        <Button size="lg" onClick={() => setModalState(true)}>
          Add Category
        </Button>
      </div>


      {/* Caetgories */}
      <div className="h-[75vh] overflow-auto mt-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-6   ">
          {categoryData?.data?.map((ele, index) => {
            return (
              <div key={index}>
                <div className="border rounded-lg px-3 py-3 bg-white text-sm ">
                  <div className="   flex justify-between ">
                    <div className="poppins-medium text-[17px] flex-wrap">
                      {ele.category}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
