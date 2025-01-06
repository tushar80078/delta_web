import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '@/redux/store/apiSlice/reducer/user';
import apiSlice from '@/redux/store/apiSlice/index';

const rootReducer = combineReducers({
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
