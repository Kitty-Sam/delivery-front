import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

import { BASE_URL_ANDROID, BASE_URL_IOS } from '~src/contants/baseURL';
import { IOrder } from '~src/redux/slices/bucketSlice';
import { IFood, setFilteredFoods } from '~src/redux/slices/foodSlice';
import { setModalType } from '~src/redux/slices/modalSlice';
import { setFavorites } from '~src/redux/slices/userSlice';

export const foodsApi = createApi({
    reducerPath: 'foodApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: Platform.OS === 'android' ? `${BASE_URL_ANDROID}` : `${BASE_URL_IOS}`,
    }),
    tagTypes: ['Foods'],
    endpoints: (builder) => ({
        getAllFoods: builder.query<IFood[], void>({
            query: () => 'foods',
            providesTags: ['Foods'],
        }),

        // addToFavoriteFood: builder.mutation<IFood, { userId: number; foodId: number }>({
        //     query(data) {
        //         return {
        //             url: 'favorite/food',
        //             method: 'POST',
        //             body: data,
        //         };
        //     },
        //     invalidatesTags: ['Foods'],
        // }),
        //
        // removeFromFavoriteFood: builder.mutation<IFood, { userId: number; foodId: number }>({
        //     query(data) {
        //         return {
        //             url: 'unfavorite/food',
        //             method: 'POST',
        //             body: data,
        //         };
        //     },
        //     invalidatesTags: ['Foods'],
        // }),
        //
        filterFood: builder.mutation<IFood[], { foodName: string }>({
            query(data) {
                return {
                    url: 'filter',
                    method: 'POST',
                    body: data,
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: filteredFoods } = await queryFulfilled;
                if (!filteredFoods.length) {
                    dispatch(setModalType({ type: 'match' }));
                } else {
                    dispatch(setFilteredFoods(filteredFoods));
                }
            },
        }),
        filterFavoriteFood: builder.mutation<any, { userId: number; foodName: string }>({
            query(data) {
                return {
                    url: 'favorite/filter',
                    method: 'POST',
                    body: data,
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                if (!data.favorites.length) {
                    dispatch(setModalType({ type: 'match' }));
                } else {
                    dispatch(setFavorites(data.favorites));
                }
            },
        }),
        createOrder: builder.mutation<
            any,
            {
                userId: number;
                order: IOrder[];
                userName: string;
                userPhone: string;
                userAddress: string;
                comment: string;
                paymentMethod: string;
            }
        >({
            query(data) {
                return {
                    url: 'user/order',
                    method: 'POST',
                    body: data,
                };
            },
        }),

        removeOrder: builder.mutation<any, { id: number }>({
            query(data) {
                return {
                    url: `user/order/${String(data.id)}`,
                    method: 'DELETE',
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
            },
        }),

        getAllCategories: builder.query<{ id: number; title: string }[], void>({
            query: () => ({
                url: 'categories',
            }),
        }),

        filterFoodByCategory: builder.mutation<IFood[], { categoryId: number }>({
            query(data) {
                return {
                    url: 'categories/filter',
                    method: 'POST',
                    body: data,
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: filteredFoods } = await queryFulfilled;
                if (!filteredFoods.length) {
                    dispatch(setModalType({ type: 'match' }));
                } else {
                    dispatch(setFilteredFoods(filteredFoods));
                }
            },
        }),

        // filterFavoriteFoodByCategory: builder.mutation<any, { categoryId: number; userId: number }>({
        //     query(data) {
        //         return {
        //             url: 'categories/favorite/filter',
        //             method: 'POST',
        //             body: data,
        //         };
        //     },
        //     async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        //         const { data } = await queryFulfilled;
        //         if (!data.favorites.length) {
        //             dispatch(setModalType({ type: 'match' }));
        //         } else {
        //             dispatch(set(data.favorites));
        //         }
        //     },
        // }),
    }),
});

export const {
    useGetAllFoodsQuery,
    useFilterFoodMutation,
    useCreateOrderMutation,
    useGetAllCategoriesQuery,
    useFilterFoodByCategoryMutation,
    useRemoveOrderMutation,
} = foodsApi;
