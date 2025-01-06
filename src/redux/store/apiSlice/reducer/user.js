import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    isLoggedIn: false,
    userDetails: {
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
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isLoggedIn = true;
            state.userDetails = action.payload;
        },
    },
});


export const { loginUser } = userSlice.actions

export default userSlice.reducer