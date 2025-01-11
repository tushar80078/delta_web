import { setAdminActiveModule } from "@/redux/store/apiSlice/reducer/layout";
import { useDispatch, useSelector } from "react-redux";


const useLayoutDetails = () => {
    const dispatch = useDispatch();
    const { admin } = useSelector(state => state.layout);

    /*Admin Layout */
    const adminActiveModule = admin?.activeModule;

    const setAdminActiveModuleFn = ({ modlueName }) => {
        dispatch(setAdminActiveModule(modlueName))
    }

    return { adminActiveModule, setAdminActiveModuleFn };
};

export default useLayoutDetails;
