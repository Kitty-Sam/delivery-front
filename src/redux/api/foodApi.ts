import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '~src/contants/baseURL';
import { IFood } from '~src/redux/slices/foodSlice';

export const foodsApi = createApi({
    reducerPath: 'foodApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/food/foods`,
        credentials: 'include',
        mode: 'cors',
    }),
    tagTypes: ['Food'],
    endpoints: (builder) => ({
        getAllFoods: builder.query<IFood[], void>({
            query: () => '',
            providesTags: (result) =>
                result ? [...result.map(({ id }) => ({ type: 'Food' as const, id })), 'Food'] : ['Food'],
        }),
    }),
});

export const { useGetAllFoodsQuery } = foodsApi;
