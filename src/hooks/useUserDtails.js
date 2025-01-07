import { setActiveModule } from "@/redux/store/apiSlice/reducer/user";
import { useDispatch, useSelector } from "react-redux";


const useUserDetails = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, userDetails, layoutDetails } = useSelector(state => state.user);

    /* User  */
    const userName = userDetails?.firstName ? `${userDetails?.firstName}` : 'User';
    const profileImage = userDetails?.profileImage ? userDetails.profileImage : 'https://ui.shadcn.com/avatars/shadcn.jpg';

    /* Layout */
    const activeModule = layoutDetails?.activeModule;

    const setActiveModuleFn = ({ modlueName }) => {
        dispatch(setActiveModule(modlueName))
    }

    return { isLoggedIn, role: userDetails.role, data: { ...userDetails, userName, profileImage }, activeModule, setActiveModuleFn };
};

export default useUserDetails;
