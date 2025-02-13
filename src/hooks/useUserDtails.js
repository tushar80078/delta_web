import { setCartNavigationRoute } from "@/redux/store/apiSlice/reducer/user";
import { useDispatch, useSelector } from "react-redux";


const useUserDetails = () => {

    const { isLoggedIn, userDetails, cartNavigationRoute } = useSelector(state => state.user);
    const dispatch = useDispatch()

    /* User  */
    const userName = userDetails?.firstName ? `${userDetails?.firstName}` : 'User';
    const profileImage = userDetails?.profileImage ? userDetails.profileImage : 'https://ui.shadcn.com/avatars/shadcn.jpg';


    /* Navigation Cache */
    const setCartNavigationRouteFn = ({ route }) => {
        dispatch(setCartNavigationRoute(route))
    }

    return {
        isLoggedIn,
        role: userDetails.role,
        data: { ...userDetails, userName, profileImage },
        cartNavigationRoute,
        setCartNavigationRouteFn
    };
};

export default useUserDetails;
