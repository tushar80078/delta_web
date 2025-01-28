import toast from "react-hot-toast";
import apiSlice from ".";
import { transformResponse } from "@/lib/transferResponse";
import { RTK_TAGS } from ".";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        createCategory: builder.mutation({
            query: (data) => ({
                url: "/category",
                method: "POST",
                body: data,
            }),

            transformErrorResponse: (response) => {
                const error = response?.data?.err || "Something went wrong";
                toast.error(error);
                return error;
            },
            invalidatesTags: [RTK_TAGS.GET_CATEGORY, RTK_TAGS.GET_CATEGORY_PAGINATION]
        }),
        getCategories: builder.query({
            query: () => ({
                url: '/category',
                method: "GET",
            }),
            transformErrorResponse: transformResponse,
            providesTags: [RTK_TAGS.GET_CATEGORY]
        }),
        getCategoriesWithPagination: builder.query({
            query: (data) => ({
                url: '/category/getCategories',
                method: "POST",
                body: data
            }),
            transformErrorResponse: transformResponse,
            providesTags: [RTK_TAGS.GET_CATEGORY_PAGINATION]
        })
    })
})

export const {
    useCreateCategoryMutation,
    useGetCategoriesQuery,
    useLazyGetCategoriesQuery,
    useGetCategoriesWithPaginationQuery,
    useLazyGetCategoriesWithPaginationQuery
} = categoryApi;
