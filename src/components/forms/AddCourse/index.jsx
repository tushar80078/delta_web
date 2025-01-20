import { Button } from "@/components/ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import AddThumbnail from "./AddThumbnail";
import LabelTooltip from "@/molecules/formLabelTooltip";
import MultiSelect from "@/components/multiSelect";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo, useState } from "react";
import { CreateCourseSchema } from "@/lib/form-schema";
import { useCreateCourseMutation } from "@/redux/store/apiSlice/course.api";
import { useGetCategoriesQuery } from "@/redux/store/apiSlice/category.api";
import Loader from "@/components/loader";
import SelectComponent from "@/components/select";
import toast from "react-hot-toast";
import FieldError from "@/molecules/fieldError";
import useLayoutDetails from "@/hooks/useLayoutDetails";

const AddCourse = ({ onClose }) => {
  const { setActiveCourseCategoryFn } = useLayoutDetails();
  const [createCourseFn, { isLoading: isCreating }] = useCreateCourseMutation();
  const { data: categoryData, isLoading: isFetchingCategories } =
    useGetCategoriesQuery();
  const [thumbnailImage, setThumbnailImage] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(CreateCourseSchema),
    defaultValues: {
      isCourseFree: "false",
    },
  });

  const isCourseFree = watch("isCourseFree");

  const categoryOptions = useMemo(() => {
    if (categoryData?.data?.length) {
      return categoryData.data
        .filter((category) => category.category !== "All") // Exclude categories with "All"
        .map((category) => ({
          value: category.category,
          label: category.category,
        }));
    }
    return [];
  }, [categoryData]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("courseName", data.courseName);
      formData.append("courseScore", data.courseScore);
      formData.append(
        "categories",
        JSON.stringify([...data.categories, { value: "All", label: "All" }])
      );
      formData.append("courseDescription", data.courseDescription);
      formData.append("isFree", data.isCourseFree == "true");
      formData.append("courseFees", parseFloat(data.courseFees) || 0.0);

      if (thumbnailImage) {
        formData.append("thumbnailImage", thumbnailImage);
      }

      const response = await createCourseFn(formData);

      if (response?.data?.success) {
        setActiveCourseCategoryFn({ category: "All" });
        toast.success("Course Added Successfully");
        onClose();
      }
    } catch (error) {
      console.error("Error from", error);
    }
  };

  const loading = isCreating || isFetchingCategories;

  return (
    <div>
      {loading && <Loader />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-2">
          <div className="flex-1">
            <Label isRequired>Course Name</Label>
            <Controller
              control={control}
              name="courseName"
              render={({ field: { onChange, value, name } }) => (
                <Input
                  id={name}
                  className="mt-2"
                  placeholder="Next.js"
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            <FieldError error={errors?.courseName?.message} />
          </div>

          <div className="flex-1">
            <Label isRequired>Score</Label>
            <Controller
              control={control}
              name="courseScore"
              render={({ field: { onChange, value, name } }) => (
                <Input
                  id={name}
                  className="mt-2"
                  type="number"
                  placeholder="30"
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            <FieldError error={errors?.courseScore?.message} />
          </div>
        </div>

        <div className="flex justify-between gap-2 mt-4">
          <div className="flex-1">
            <Label isRequired>Is course free?</Label>

            <Controller
              control={control}
              name="isCourseFree"
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <SelectComponent
                  options={[
                    { value: "true", label: "Yes" },
                    { value: "false", label: "No" },
                  ]}
                  className="w-full mt-2"
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            <FieldError error={errors?.isCourseFree?.message} />
          </div>

          <div className="flex-1">
            <Label isRequired>Fees</Label>

            <Controller
              control={control}
              name="courseFees"
              render={({ field: { onChange, value, name } }) => (
                <Input
                  id={name}
                  className="mt-2"
                  type="number"
                  placeholder="30"
                  onChange={onChange}
                  value={value}
                  disabled={isCourseFree === "true"}
                />
              )}
            />

            <FieldError error={errors?.courseFees?.message} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 mt-4">
          <LabelTooltip
            label="Category"
            tooltipText="If the required category is not listed, please visit the Category tab to add the category, and then select it."
          />

          <Controller
            control={control}
            name="categories"
            render={({ field: { onChange, value, name } }) => (
              <MultiSelect
                placeholder="Select category"
                onChange={onChange}
                options={categoryOptions}
                value={value}
                key={name}
              />
            )}
          />

          <FieldError error={errors?.categories?.message} />
        </div>

        <div className="mt-4">
          <Label isRequired>Description</Label>
          <Controller
            control={control}
            name="courseDescription"
            render={({ field: { onChange, value, name } }) => (
              <Textarea
                id={name}
                className="mt-2"
                placeholder="This course is specially designed for..."
                onChange={onChange}
                value={value}
              />
            )}
          />

          <FieldError error={errors?.courseDescription?.message} />
        </div>

        <AddThumbnail
          setThumbnailImage={(file) => {
            setThumbnailImage(file);
          }}
        />

        <div className="mt-4 flex justify-end gap-4">
          <Button type="submit">Add</Button>
          <Button variant="outline" onClick={() => onClose()}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
