import { createSlice } from '@reduxjs/toolkit'


const initialAdminLayoutDetails = {
    activeModule: 'Home',
    activeCourseCategory: 'All',
    coursePagination: {
        page: 1,
        pageSize: 12
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
            state.admin.coursePagination.page = 1;
            state.admin.activeCourseCategory = action.payload;
        },
        resetLayoutReducer: (state) => {
            state.admin = initialAdminLayoutDetails;
        },
        changePaginationReducer: (state, action) => {
            if (action.payload.page) {
                state.admin.coursePagination.page = action.payload.page
            }

            if (action.payload.pageSize) {
                state.admin.coursePagination.pageSize = action.payload.pageSize
            }
        }
    },
});


export const { setAdminActiveModule, setActiveCourseCategory, resetLayoutReducer, changePaginationReducer } = layoutSlice.actions

export default layoutSlice.reducer