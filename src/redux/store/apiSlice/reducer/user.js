import { createSlice } from '@reduxjs/toolkit'

const initialUserData =
{
    "email": "",
    "gender": "",
    "courses": [],
    "createdAt": "",
    "firstName": "",
    "id": "",
    "lastName": "",
    "profileImage": null,
    "role": "",
    "updatedAt": ""
}



let initialState = {
    isLoggedIn: false,
    userDetails: initialUserData,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isLoggedIn = true;
            state.userDetails = action.payload;
        },
        logOutUser: (state) => {
            state.isLoggedIn = false;
            state.userDetails = initialUserData;
            localStorage.removeItem("token");
        },

    },
});


export const { loginUser, logOutUser } = userSlice.actions

export default userSlice.reducer