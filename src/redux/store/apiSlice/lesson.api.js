import toast from "react-hot-toast";
import apiSlice from ".";
import { transformResponse } from "@/lib/transferResponse";
import { RTK_TAGS } from ".";

export const lessonApi = apiSlice.injectEndpoints({
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
            invalidatesTags: [RTK_TAGS.GET_CATEGORY, RTK_TAGS.GET_COURSES]
        }),
        getCategories: builder.query({
            query: () => ({
                url: '/category',
                method: "GET",
            }),
            transformErrorResponse: transformResponse,
            providesTags: [RTK_TAGS.GET_CATEGORY]
        })
    })
})

export const {
    useCreateCategoryMutation,
    useGetCategoriesQuery,
    useLazyGetCategoriesQuery
} = lessonApi;
