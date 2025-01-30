import toast from "react-hot-toast";
import apiSlice from ".";
import { transformResponse } from "@/lib/transferResponse";
import { RTK_TAGS } from ".";

export const categoryAndCoursesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        
        getCateogryAndCourses: builder.query({
            query: () => ({
                url: '/category-courses/all',
                method: "GET",
            }),
            transformErrorResponse: transformResponse,
            providesTags: [RTK_TAGS.GET_CATEGORY_COURSES]
        }),
        // getCategoriesWithPagination: builder.query({
        //     query: (data) => ({
        //         url: '/category/getCategories',
        //         method: "POST",
        //         body: data
        //     }),
        //     transformErrorResponse: transformResponse,
        //     providesTags: [RTK_TAGS.GET_CATEGORY_PAGINATION]
        // })
    })
})

export const {
    useGetCateogryAndCoursesQuery,
    useLazyGetCateogryAndCoursesQuery,
    // useGetCategoriesWithPaginationQuery,
    // useLazyGetCategoriesWithPaginationQuery
} = categoryAndCoursesApi;
