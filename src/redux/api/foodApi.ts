import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

import { BASE_URL_ANDROID, BASE_URL_IOS } from '~src/contants/baseURL';
import { IFood } from '~src/redux/slices/foodSlice';

export const foodsApi = createApi({
    reducerPath: 'foodApi',
    baseQuery: fetchBaseQuery({
        baseUrl: Platform.OS === 'android' ? `${BASE_URL_ANDROID}/food/foods` : `${BASE_URL_IOS}/food/foods`,
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
