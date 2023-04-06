import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '~src/contants/baseURL';
import { IUser } from '~src/redux/slices/userSlice';

export const foodsApi = createApi({
    reducerPath: 'foodApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/foods`,
        credentials: 'include',
        mode: 'cors',
    }),
    tagTypes: ['Food'],
    endpoints: (builder) => ({
        getAllFoods: builder.query<IUser[], void>({
            query: () => '',
            providesTags: (result) =>
                result ? [...result.map(({ id }) => ({ type: 'Food' as const, id })), 'Food'] : ['Food'],
        }),
    }),
});

export const { useGetAllFoodsQuery } = foodsApi;
