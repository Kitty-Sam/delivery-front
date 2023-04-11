import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFood } from '~src/redux/slices/foodSlice';

export interface IBucket {
    orders: IFood[];
}

const initialState: IBucket = {
    orders: [],
};

export const bucketSlice = createSlice({
    name: 'bucket',
    initialState,
    reducers: {
        addOrder(state, { payload }: PayloadAction<{ order: IFood }>) {
            state.orders = state.orders.concat(payload.order);
        },
        removeOrder(state, { payload }: PayloadAction<{ id: number }>) {
            state.orders = state.orders.filter((item) => item.id !== payload.id);
        },
    },
});

export default bucketSlice.reducer;
export const { addOrder, removeOrder } = bucketSlice.actions;
