import apiSlice from ".";
import { transformResponse } from "@/lib/transferResponse";
import { RTK_TAGS } from ".";
import toast from "react-hot-toast";

export const categoryAndCoursesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTopCateogryAndCourses: builder.query({
            query: () => ({
                url: '/common/top-category-courses',
                method: "GET",
            }),
            transformErrorResponse: transformResponse,
            providesTags: [RTK_TAGS.GET_CATEGORY_COURSES],
            transformResponse: (response) => {
                return response?.data
            }
        }),
        getCourseDetailsById: builder.query({
            query: (data) => ({
                url: `/common/course/${data?.courseId}`,
                method: "GET",
            }),
            transformErrorResponse: (response) => {
                const error = response?.data?.err || "Something went wrong";
                toast.error(error);
                return error;
            },
        }),
    })
})

export const {
    useGetTopCateogryAndCoursesQuery,
    useLazyGetTopCateogryAndCoursesQuery,
    useGetCourseDetailsByIdQuery,
    useLazyGetCourseDetailsByIdQuery
} = categoryAndCoursesApi;
