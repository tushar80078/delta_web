import toast from "react-hot-toast";
import apiSlice from ".";

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: (data) => ({
                url: "/course",
                method: "POST",
                body: data,
            }),
            transformErrorResponse: (response) => {
                const error = response?.data?.err || "Something went wrong";
                toast.error(error);
                return error;
            },
        }),
        getCourses: builder.query({
            query: (data) => ({
                url: `/course/getCourses/${data?.teacherId}`,
                method: "POST",
                body: data,
            }),
            transformErrorResponse: (response) => {
                const error = response?.data?.err || "Something went wrong";
                toast.error(error);
                return error;
            },
        }),
        getCourseById: builder.query({
            query: (data) => ({
                url: `/course/${data?.teacherId}/${data?.courseId}`,
                method: "GET",
            }),
            transformErrorResponse: (response) => {
                const error = response?.data?.err || "Something went wrong";
                toast.error(error);
                return error;
            },
        }),
    }),
});

export const {
    useCreateCourseMutation,
    useGetCoursesQuery,
    useLazyGetCoursesQuery,
    useGetCourseByIdQuery,
    useLazyGetCourseByIdQuery
} = courseApi;
