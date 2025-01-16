export const transformResponse = (response) => {
    const error = response?.data?.err || "Something went wrong";
    return error;
}