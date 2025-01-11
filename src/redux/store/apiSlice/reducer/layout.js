import { createSlice } from '@reduxjs/toolkit'


const initialAdminLayoutDetails = {
    activeModule: ''
}


let initialState = {
    admin: initialAdminLayoutDetails
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setAdminActiveModule: (state, action) => {
            state.admin.activeModule = action.payload;
        }
    },
});


export const { setAdminActiveModule } = layoutSlice.actions

export default layoutSlice.reducer