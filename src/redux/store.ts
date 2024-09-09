import { combineReducers } from '@reduxjs/toolkit';

import { authApi } from '~src/redux/api/authApi';
import { foodsApi } from '~src/redux/api/foodApi';
import { usersApi } from '~src/redux/api/userApi';

import bucketReducer from './slices/bucketSlice';
import foodReducer from './slices/foodSlice';
import modalReducer from './slices/modalSlice';
import userReducer from './slices/userSlice';

export const rootReducer = combineReducers({
    userStore: userReducer,
    foodStore: foodReducer,
    modalStore: modalReducer,
    bucketStore: bucketReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [foodsApi.reducerPath]: foodsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
});
