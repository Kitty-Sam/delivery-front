import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '~src/contants/baseURL';
import { IUser } from '~src/redux/slices/userSlice';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/users`,
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
