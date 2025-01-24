import toast from "react-hot-toast";
import apiSlice, { RTK_TAGS } from ".";
import { transformResponse } from "@/lib/transferResponse";

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
            invalidatesTags: [RTK_TAGS.GET_Categories],
        }),
        getCategories: builder.query({
            query: () => ({
                url: '/category',
                method: "GET",
            }),
            transformErrorResponse: transformResponse
        })
    })
})

export const {
    useCreateCategoryMutation,
    useGetCategoriesQuery,
    useLazyGetCategoriesQuery
} = categoryApi;
