import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { authApi } from '~src/redux/api/authApi';
import { foodsApi } from '~src/redux/api/foodApi';
import { usersApi } from '~src/redux/api/userApi';

import bucketReducer from './slices/bucketSlice';
import foodReducer from './slices/foodSlice';
import modalReducer from './slices/modalSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
    userStore: userReducer,
    foodStore: foodReducer,
    modalStore: modalReducer,
    bucketStore: bucketReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [foodsApi.reducerPath]: foodsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([usersApi.middleware, foodsApi.middleware, authApi.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
