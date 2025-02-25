import apiSlice from ".";
import { transformResponse } from "@/lib/transferResponse";

export const checkoutSessionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postCheckoutSession: builder.query({
            query: (data) => ({
                url: '/checkout/create-checkout-session',
                method: "POST",
                body: data
            }),
            transformErrorResponse: transformResponse,
        }),
    })
})

export const {
    useLazyPostCheckoutSessionQuery,
    usePostCheckoutSessionQuery
} = checkoutSessionApi;
