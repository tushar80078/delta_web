import toast from "react-hot-toast";
import apiSlice from ".";
import { loginUser } from "./reducer/user";
import { transformResponse } from "@/lib/transferResponse";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;

                localStorage.setItem("token", data.data.token);

                dispatch(loginUser(data.data.userData));

                toast.success("Logged In!!");
            },
            transformErrorResponse: (response) => {
                const data = response.data;
                const error = data?.err || "Something went wrong";
                return error;
            }
        }),

        signUp: builder.mutation({
            query: (data) => ({
                url: "/auth/signup",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;

                localStorage.setItem("token", data.data.token);

                dispatch(loginUser(data.data.userData));

                toast.success("Signup and logged in!");
            },
            transformErrorResponse: transformResponse
        }),
    }),
});

export const { useLoginMutation, useSignUpMutation } = authApi; 
