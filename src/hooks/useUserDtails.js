import { useSelector } from "react-redux";


const useUserDetails = () => {

    const { isLoggedIn, userDetails } = useSelector(state => state.user);

    /* User  */
    const userName = userDetails?.firstName ? `${userDetails?.firstName}` : 'User';
    const profileImage = userDetails?.profileImage ? userDetails.profileImage : 'https://ui.shadcn.com/avatars/shadcn.jpg';




    return { isLoggedIn, role: userDetails.role, data: { ...userDetails, userName, profileImage } };
};

export default useUserDetails;
