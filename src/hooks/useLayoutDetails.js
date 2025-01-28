import { changePaginationReducer, setActiveCourseCategory, setAdminActiveModule, setActiveCourseTab, changeCategoryPaginationReducer, changeChapterPaginationReducer } from "@/redux/store/apiSlice/reducer/layout";
import { useDispatch, useSelector } from "react-redux";


const useLayoutDetails = () => {
    const dispatch = useDispatch();
    const { admin } = useSelector(state => state.layout);

    /*Admin Layout */
    const adminActiveModule = admin?.activeModule;

    const activeCourseCategory = admin?.activeCourseCategory;

    const setAdminActiveModuleFn = ({ modlueName }) => {
        dispatch(setAdminActiveModule(modlueName))
    }

    const setActiveCourseCategoryFn = ({ category }) => {
        dispatch(setActiveCourseCategory(category))
    }

    const changePaginationFn = ({ page, pageSize }) => {
        dispatch(changePaginationReducer({ page, pageSize }))
    }

    /* Course */
    const activeCourseTab = admin?.course?.activeTab;

    const setActiveCourseTabFn = ({ tabName }) => {
        console.log('tabName', tabName)
        dispatch(setActiveCourseTab(tabName))
    }

    /* Category */
    const changeCategoryPaginationFn = ({ page, pageSize }) => {
        dispatch(changeCategoryPaginationReducer({ page, pageSize }))
    }

    const changeChapterPaginationFn = ({ page, pageSize }) => {
        dispatch(changeChapterPaginationReducer({ page, pageSize }))
    }
    return {
        adminActiveModule,
        activeCourseCategory,
        setAdminActiveModuleFn,
        setActiveCourseCategoryFn,
        adminPagination: { ...admin?.coursePagination },
        changePaginationFn,
        setActiveCourseTabFn,
        activeCourseTab,
        changeCategoryPaginationFn,
        categoryPagination: { ...admin?.categoryPagination },
        changeChapterPaginationFn,
        chapterPagination: { ...admin?.chapterPagination }
    };
};

export default useLayoutDetails;
