import { combineReducers } from '@reduxjs/toolkit';

import apiSlice from '@/redux/store/apiSlice/index';

import userReducer from '@/redux/store/apiSlice/reducer/user';
import layoutReducer from './apiSlice/reducer/layout';


const rootReducer = combineReducers({
    user: userReducer,
    layout: layoutReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
