import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

import { BASE_URL_ANDROID, BASE_URL_IOS } from '~src/contants/baseURL';
import { IUser, setCurrentUser } from '~src/redux/slices/userSlice';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: Platform.OS === 'android' ? `${BASE_URL_ANDROID}` : `${BASE_URL_IOS}`,
        credentials: 'include',
        mode: 'cors',
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getAllUsers: builder.query<IUser[], void>({
            query: () => 'users',
            providesTags: (result) =>
                result ? [...result.map(({ id }) => ({ type: 'User' as const, id })), 'User'] : ['User'],
        }),
        getUserById: builder.query<IUser, IUser['id']>({
            query: (id) => ({
                url: `user/${String(id)}`,
            }),
            providesTags: (result) => [
                {
                    type: 'User',
                    id: result?.id,
                },
            ],
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setCurrentUser(data));
            },
        }),
    }),
});

export const { useGetUserByIdQuery } = usersApi;
