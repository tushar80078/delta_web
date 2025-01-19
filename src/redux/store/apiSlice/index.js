
import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";
import { logOutUser } from "./reducer/user";
import { resetLayoutReducer } from "./reducer/layout";

export const RTK_TAGS = {
    GET_COURSES: "GET_COURSES"
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
    const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
    const baseQuery = fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token") || "";
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
                headers.set("Accept", "*");
            }
            return headers;
        },
    });
    const result = await baseQuery(args, api, extraOptions);

    const isTokenExpired = result.error?.status === 401;

    if (isTokenExpired) {
        localStorage.clear();
        api.dispatch(logOutUser());
        api.dispatch(resetLayoutReducer());
        toast.error("Your session has expired");
    }

    return result;
};

const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    tagTypes: Object.values(RTK_TAGS),
});

export default apiSlice;
