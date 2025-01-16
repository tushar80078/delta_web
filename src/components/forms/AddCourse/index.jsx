import { Button } from "@/components/ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import AddThumbnail from "./AddThumbnail";
import LabelTooltip from "@/molecules/formLabelTooltip";
import MultiSelect from "@/components/multiSelect";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { CreateCourseSchema } from "@/lib/form-schema";
import { useCreateCourseMutation } from "@/redux/store/apiSlice/course.api";
import { useGetCategoriesQuery } from "@/redux/store/apiSlice/category.api";
import Loader from "@/components/loader";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AddCourse = ({ onClose }) => {
    const [createCourseFn, { isLoading: isCreating }] = useCreateCourseMutation();
    const { data: categoryData, isLoading: isFetchingCategories } = useGetCategoriesQuery();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(CreateCourseSchema),
        defaultValues: {
            categories: [{ value: "All", label: "All" }],
        },
    });

    const categoryOptions = useMemo(() => {
        if (categoryData?.data?.length) {
            return [
                { value: "All", label: "All" },
                ...categoryData.data.map((category) => ({
                    value: category.category,
                    label: category.category,
                })),
            ];
        }
        return [{ value: "All", label: "All" }];
    }, [categoryData]);

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("courseName", data.courseName);
            formData.append("courseScore", data.courseScore);
            formData.append("categories", JSON.stringify(data.categories));
            formData.append("courseDescription", data.courseDescription);
            formData.append("isFree", true);

            if (data.thumbnailImage) {
                formData.append("thumbnailImage", data.thumbnailImage);
            }

            const response = await createCourseFn(formData);
            console.log("response", response);
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
                    </div>
                </div>

                <div className="flex justify-between gap-2 mt-4">
                    <div className="flex-1">
                        <Label isRequired>Is course free?</Label>

                        <RadioGroup defaultValue="Yes" className="flex items-center mt-3">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Yes" id="r1" />
                                <Label htmlFor="r1">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="r2" />
                                <Label htmlFor="r2">No</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="flex-1">
                        <Label isRequired>Fees</Label>
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
                                defaultValue={{ value: "All", label: "All" }}
                            />
                        )}
                    />
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
                </div>

                <AddThumbnail />

                <div className="mt-4 flex justify-end gap-4">
                    <Button type="submit">Add</Button>
                    <Button variant="outline" onClick={() => onClose()}>Cancel</Button>
                </div>
            </form>
        </div>
    );
};

export default AddCourse;
