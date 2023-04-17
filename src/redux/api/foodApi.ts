import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

import { BASE_URL_ANDROID, BASE_URL_IOS } from '~src/contants/baseURL';
import { IOrder } from '~src/redux/slices/bucketSlice';
import { IFood, setAllFoods, setFavoriteFilteredFoods, setFilteredFoods } from '~src/redux/slices/foodSlice';
import { setModalType } from '~src/redux/slices/modalSlice';
import { ICourier, IUser, setCurrentUser } from '~src/redux/slices/userSlice';

export const foodsApi = createApi({
    reducerPath: 'foodApi',
    baseQuery: fetchBaseQuery({
        baseUrl: Platform.OS === 'android' ? `${BASE_URL_ANDROID}` : `${BASE_URL_IOS}`,
    }),
    tagTypes: ['Food'],
    endpoints: (builder) => ({
        getAllFoods: builder.query<IFood[], void>({
            query: () => '/foods',
            providesTags: (result) =>
                result ? [...result.map(({ id }) => ({ type: 'Food' as const, id })), 'Food'] : ['Food'],
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setAllFoods(data));
            },
        }),

        addToFavoriteFood: builder.mutation<IFood, { userId: number; foodId: number }>({
            query(data) {
                return {
                    url: 'favorite/food',
                    method: 'POST',
                    body: data,
                };
            },
        }),

        removeFromFavoriteFood: builder.mutation<IFood, { userId: number; foodId: number }>({
            query(data) {
                return {
                    url: 'unfavorite/food',
                    method: 'POST',
                    body: data,
                };
            },
        }),
        filterFood: builder.mutation<IFood[], { foodName: string }>({
            query(data) {
                return {
                    url: '/filter',
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
        filterFavoriteFood: builder.mutation<IUser, { userId: number; foodName: string }>({
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
                    dispatch(setFavoriteFilteredFoods(data.favorites));
                }
            },
        }),
        createOrder: builder.mutation<IUser, { userId: number; order: IOrder[]; courierId: number; total: number }>({
            query(data) {
                return {
                    url: 'user/order',
                    method: 'POST',
                    body: data,
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                console.log('data', data);
            },
        }),

        getAllFavoriteFood: builder.mutation<IUser, { userId: number }>({
            query(data) {
                return {
                    url: 'favorite/foods',
                    method: 'POST',
                    body: data,
                };
            },
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: newUser } = await queryFulfilled;
                dispatch(setCurrentUser(newUser));
            },
        }),

        getCourierById: builder.query<ICourier, ICourier['id']>({
            query: (id) => ({
                url: `courier/${String(id)}`,
            }),
        }),

        getAllCouriers: builder.query<ICourier[], void>({
            query: () => ({
                url: 'couriers',
            }),
        }),

        getAllCategories: builder.query<{ id: number; title: string }[], void>({
            query: () => ({
                url: 'categories',
            }),
        }),

        filterFoodByCategory: builder.mutation<IFood[], { categoryId: number }>({
            query(data) {
                return {
                    url: '/categories/filter',
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
    }),
});

export const {
    useGetAllFoodsQuery,
    useRemoveFromFavoriteFoodMutation,
    useAddToFavoriteFoodMutation,
    useFilterFoodMutation,
    useFilterFavoriteFoodMutation,
    useCreateOrderMutation,
    useGetCourierByIdQuery,
    useGetAllCouriersQuery,
    useGetAllCategoriesQuery,
    useFilterFoodByCategoryMutation,
} = foodsApi;
