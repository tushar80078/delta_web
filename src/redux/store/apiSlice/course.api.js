import toast from "react-hot-toast";
import apiSlice from ".";

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: (data) => ({
                url: "/course",
                method: "POST",
                body: data
            }),
            transformErrorResponse: (response) => {
                const error = response?.data?.err || "Something went wrong";
                toast('Error');
                return error;
            }
        }),
        getCourses: builder.query({
            query: (data) => ({
                url: "/course/getCourses",
                method: "POST",
                body: data
            }),
            transformErrorResponse: (response) => {
                const error = response?.data?.err || "Something went wrong";
                toast('Error');
                return error;
            }
        })
    })
})

export const {
    useCreateCourseMutation,
    useGetCoursesQuery,
    useLazyGetCoursesQuery
} = courseApi;