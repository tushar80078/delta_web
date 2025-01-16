import apiSlice from ".";
import { transformResponse } from "@/lib/transferResponse";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
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
    useGetCategoriesQuery,
    useLazyGetCategoriesQuery
} = categoryApi;
