import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { darkTheme } from '~src/contants/theme';
import { getBucketOrders } from '~src/redux/selectors';
import { addOrder, removeOrder } from '~src/redux/slices/bucketSlice';
import { IFood } from '~src/redux/slices/foodSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export interface ICounter {
    food: IFood;
}

export const Counter: FC<ICounter> = ({ food }) => {
    const orders = useAppSelector(getBucketOrders);

    const dispatch = useAppDispatch();

    const addItem = () => {
        dispatch(addOrder({ order: food }));
    };
    const removeItem = () => {
        dispatch(removeOrder({ id: food.id }));
    };

    return (
        <View
            style={{
                width: 110,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                backgroundColor: darkTheme.COUNTER_COLORED_BUTTON,
                padding: 5,
                borderRadius: 20,
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                onPress={removeItem}
                style={{
                    backgroundColor: darkTheme.COLORED_BUTTON,
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{ fontWeight: '700', fontSize: 18 }}>-</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: '700', fontSize: 18 }}>{orders.length}</Text>
            <TouchableOpacity
                onPress={addItem}
                style={{
                    backgroundColor: darkTheme.COLORED_BUTTON,
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{ fontWeight: '700', fontSize: 18 }}>+</Text>
            </TouchableOpacity>
        </View>
    );
};
