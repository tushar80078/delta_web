import { createSlice } from '@reduxjs/toolkit'


const initialAdminLayoutDetails = {
    activeModule: 'Home',
    activeCourseCategory: 'All',
    coursePagination: {
        page: 1,
        pageSize: 12
    },
    categoryPagination: {
        page: 1,
        pageSize: 24
    },
    chapterPagination: {
        page: 1,
        pageSize: 12
    },
    course: {
        activeTab: ''
    },
    chapter: {
        activeTab: ''
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
        },
        changeCategoryPaginationReducer: (state, action) => {
            if (action.payload.page) {
                state.admin.categoryPagination.page = action.payload.page
            }

            if (action.payload.pageSize) {
                state.admin.categoryPagination.pageSize = action.payload.pageSize
            }
        },
        changeChapterPaginationReducer: (state, action) => {
            if (action.payload.page) {
                state.admin.chapterPagination.page = action.payload.page
            }

            if (action.payload.pageSize) {
                state.admin.chapterPagination.pageSize = action.payload.pageSize
            }
        },
        setActiveCourseTab: (state, action) => {
            state.admin.course.activeTab = action.payload;
        },
        setActiveChapterTab: (state, action) => {
            state.admin.chapter.activeTab = action.payload;
        }
    },
});


export const {
    setAdminActiveModule,
    setActiveCourseCategory,
    resetLayoutReducer,
    changePaginationReducer,
    setActiveCourseTab,
    changeCategoryPaginationReducer,
    changeChapterPaginationReducer,
    setActiveChapterTab
} = layoutSlice.actions

export default layoutSlice.reducer