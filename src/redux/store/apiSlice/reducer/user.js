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

const initialLayoutDetails = {
    activeModule: ''
}


let initialState = {
    isLoggedIn: false,
    userDetails: initialUserData,
    layoutDetails: initialLayoutDetails,
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
        setActiveModule: (state, action) => {
            state.layoutDetails.activeModule = action.payload;
        }
    },
});


export const { loginUser, logOutUser, setActiveModule } = userSlice.actions

export default userSlice.reducer