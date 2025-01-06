import { useSelector } from "react-redux";


const useUserDetails = () => {
    const { isLoggedIn, userDetails, } = useSelector(state => state.user);

    return { isLoggedIn, role: userDetails.role, data: userDetails };
};

export default useUserDetails;
