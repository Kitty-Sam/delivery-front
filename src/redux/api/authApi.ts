import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

import { BASE_URL_ANDROID, BASE_URL_IOS } from '~src/contants/baseURL';
import { usersApi } from '~src/redux/api/userApi';
import { IUser, logIn, setCurrentUser } from '~src/redux/slices/userSlice';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: Platform.OS === 'android' ? `${BASE_URL_ANDROID}/auth` : `${BASE_URL_IOS}/auth`,
        credentials: 'include',
        mode: 'cors',
    }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        registerUser: builder.mutation<IUser, { email: string; password: string; name: string }>({
            query(data) {
                return {
                    url: 'register',
                    method: 'POST',
                    body: data,
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: newUser } = await queryFulfilled;
                dispatch(setCurrentUser(newUser));
                dispatch(
                    usersApi.util.updateQueryData('getAllUsers', undefined, (draft) => {
                        draft.push(newUser);
                    }),
                );
            },
        }),
        loginUser: builder.mutation<IUser, { email: string; password: string }>({
            query(data) {
                return {
                    url: 'login',
                    method: 'POST',
                    body: data,
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: newUser } = await queryFulfilled;
                dispatch(setCurrentUser(newUser));
                dispatch(logIn());
            },
        }),
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
