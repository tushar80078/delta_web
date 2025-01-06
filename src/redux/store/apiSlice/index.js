
import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

export const RTK_TAGS = {

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
