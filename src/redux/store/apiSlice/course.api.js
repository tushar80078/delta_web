import toast from "react-hot-toast";
import apiSlice, { RTK_TAGS } from ".";

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
            invalidatesTags: [RTK_TAGS.GET_COURSES],
        }),
        getCourses: builder.query({
            query: (data) => ({
                url: "/course/getCourses",
                method: "POST",
                body: data,
            }),
            transformErrorResponse: (response) => {
                const error = response?.data?.err || "Something went wrong";
                toast.error(error);
                return error;
            },
            providesTags: [RTK_TAGS.GET_COURSES],
        }),
    }),
});

export const {
    useCreateCourseMutation,
    useGetCoursesQuery,
    useLazyGetCoursesQuery,
} = courseApi;
