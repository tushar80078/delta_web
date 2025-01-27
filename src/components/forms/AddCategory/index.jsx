import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateCategorySchema } from "@/lib/form-schema";
import FieldError from "@/molecules/fieldError";
import { useCreateCategoryMutation } from "@/redux/store/apiSlice/category.api";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddCategory = ({ onClose }) => {

  const [createCategoryFn, { isLoading: isCreating }] = useCreateCategoryMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateCategorySchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await createCategoryFn({ category: data.categoryName });

      if (response?.data?.success) {
        toast.success("Category Added Successfully");
        onClose();
      }
    } catch (error) {
      console.error("Error from", error);
    }
  };


  return (
    <div>
      {isCreating && <Loader />}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-2">
          <div className="flex-1">
            <Label isRequired>Category Name</Label>
            <Controller
              control={control}
              name="categoryName"
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

            <FieldError error={errors?.categoryName?.message} />
          </div>
        </div>

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

export default AddCategory;
