import apiSlice from ".";
import { transformResponse } from "@/lib/transferResponse";

export const studentAPI = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addCourseToCart: builder.mutation({
            query: (data) => ({
                url: `/students/cart/${data?.courseId}`,
                method: "POST",
                body: data
            }),
            transformErrorResponse: transformResponse,
        }),

        getCartCoursesById: builder.query({
            query: (data) => ({
                url: `/students/cartCourses/${data?.userId}`,
                method: "GET"
            }),
            transformErrorResponse: transformResponse,
        })

    })
})

export const {
    useAddCourseToCartMutation,
    useGetCartCoursesByIdQuery,
    useLazyGetCartCoursesByIdQuery
} = studentAPI;
