import React, { FC } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { width } from '~src/contants/dimensions';
import { IFood } from '~src/redux/slices/foodSlice';

export interface IOrderItem {
    food: IFood;
}

export const OrderItem: FC<IOrderItem> = ({ food }) => (
    <TouchableOpacity
        style={{ borderWidth: 1, borderColor: 'red', borderRadius: 10, marginTop: 20, width: width * 0.8, padding: 8 }}
    >
        <Image source={{ uri: food.image }} style={{ width: 50, height: 50 }} />
        <Text>{food.name}</Text>
        <Text>{food.description}</Text>
    </TouchableOpacity>
);
