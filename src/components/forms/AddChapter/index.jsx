import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateChapterSchema } from "@/lib/form-schema";
import FieldError from "@/molecules/fieldError";
import { useCreateLessonMutation, useLazyGetLessonsQuery } from "@/redux/store/apiSlice/lesson.api";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const AddCategory = ({ onClose }) => {

    const [createLessonFn, { isLoading: isCreating }] = useCreateLessonMutation();
    const [getLessonsFn] = useLazyGetLessonsQuery();
    const { courseId } = useParams();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(CreateChapterSchema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await createLessonFn({ lessonName: data.lessonName, courseId });

            if (response?.data?.success) {
                // getLessonsFn({ page: 1, pageSize: 10, courseId });
                toast.success("Chapter Added Successfully");
                onClose();
            }
        } catch (error) {
            console.error("Error from", error);
        }
    };

    console.log('errors', errors)

    return (
        <div>
            {isCreating && <Loader />}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between gap-2">
                    <div className="flex-1">
                        <Label isRequired>Chapter name</Label>
                        <Controller
                            control={control}
                            name="lessonName"
                            render={({ field: { onChange, value, name } }) => (
                                <Input
                                    id={name}
                                    className="mt-2"
                                    placeholder="Introduction to course."
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />

                        <FieldError error={errors?.lessonName?.message} />
                    </div>
                </div>

                <div className="mt-4 flex justify-end gap-4">
                    <Button type="submit">Add</Button>
                    <Button type="button" variant="outline" onClick={() => onClose()}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddCategory;
