import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

import { BASE_URL_ANDROID, BASE_URL_IOS } from '~src/contants/baseURL';
import { IUser } from '~src/redux/slices/userSlice';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: Platform.OS === 'android' ? `${BASE_URL_ANDROID}/users` : `${BASE_URL_IOS}/users`,
        credentials: 'include',
        mode: 'cors',
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getAllUsers: builder.query<IUser[], void>({
            query: () => '',
            providesTags: (result) =>
                result ? [...result.map(({ id }) => ({ type: 'User' as const, id })), 'User'] : ['User'],
        }),
    }),
});

export const { useGetAllUsersQuery } = usersApi;
