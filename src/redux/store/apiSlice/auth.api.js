import toast from "react-hot-toast";
import apiSlice from ".";
import { loginUser } from "./reducer/user";

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
    }),
});

export const { useLoginMutation } = authApi; 
