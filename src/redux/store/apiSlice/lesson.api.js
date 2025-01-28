import apiSlice, { RTK_TAGS } from ".";
import { transformResponse } from "@/lib/transferResponse";


export const lessonApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        createLesson: builder.mutation({
            query: ({ lessonName, courseId }) => ({
                url: "/lessons",
                method: "POST",
                body: { lessonName, courseId },
            }),
            transformErrorResponse: transformResponse,
            invalidatesTags: [RTK_TAGS.GET_CHAPTERS]
        }),

        getLessons: builder.query({
            query: ({ page, pageSize, courseId, pagination = true }) => ({
                url: "/lessons/getLessons",
                method: "POST",
                body: { page, pageSize, courseId, pagination },
            }),
            transformErrorResponse: transformResponse,
            providesTags: [RTK_TAGS.GET_CHAPTERS]
        })
    })

})

export const {
    useCreateLessonMutation,
    useGetLessonsQuery,
    useLazyGetLessonsQuery
} = lessonApi;
