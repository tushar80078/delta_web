import apiSlice from ".";
import { transformResponse } from "@/lib/transferResponse";
import { RTK_TAGS } from ".";

export const categoryAndCoursesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTopCateogryAndCourses: builder.query({
            query: () => ({
                url: '/category-courses/top-category-courses',
                method: "GET",
            }),
            transformErrorResponse: transformResponse,
            providesTags: [RTK_TAGS.GET_CATEGORY_COURSES],
            transformResponse: (response) => {
                return response?.data
            }
        }),
    })
})

export const {
    useGetTopCateogryAndCoursesQuery,
    useLazyGetTopCateogryAndCoursesQuery
} = categoryAndCoursesApi;
