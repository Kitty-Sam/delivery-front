import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFood } from '~src/redux/slices/foodSlice';

export interface IOrder {
    count: number;
    order: IFood;
}

export interface IBucket {
    orders: IOrder[];
}

const initialState: IBucket = {
    orders: [],
};

export const bucketSlice = createSlice({
    name: 'bucket',
    initialState,
    reducers: {
        addOrder(state, { payload }: PayloadAction<{ orderItem: IOrder }>) {
            const currentOrder = state.orders.find((order) => order.order.name === payload.orderItem.order.name);
            if (currentOrder) {
                currentOrder.count += 1;
            } else {
                state.orders = state.orders.concat(payload.orderItem);
            }
        },
        removeOrder(state, { payload }: PayloadAction<{ orderItem: IOrder }>) {
            const currentOrder = state.orders.find((order) => order.order.name === payload.orderItem.order.name);
            if (currentOrder) {
                currentOrder.count -= 1;
                if (currentOrder.count === 0) {
                    state.orders = state.orders.filter((order) => order.order.name !== payload.orderItem.order.name);
                }
            }
        },
        clearBucket(state) {
            state.orders = [];
        },
    },
});

export default bucketSlice.reducer;
export const { addOrder, removeOrder, clearBucket } = bucketSlice.actions;
