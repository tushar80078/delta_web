import { createSlice } from '@reduxjs/toolkit'


const initialAdminLayoutDetails = {
    activeModule: '',
    activeCourseCategory: 'All',
    pagination: {
        page: 1,
        pageSize: 10
    }
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
        },
        setActiveCourseCategory: (state, action) => {
            state.admin.activeCourseCategory = action.payload;
        },
    },
});


export const { setAdminActiveModule, setActiveCourseCategory } = layoutSlice.actions

export default layoutSlice.reducer