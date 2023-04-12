import React, { FC } from 'react';

import { CounterContainer, RoundContainer, TextPrice } from '~components/Counter/style';
import { ICounter } from '~components/Counter/type';
import { addOrder, removeOrder } from '~src/redux/slices/bucketSlice';
import { useAppDispatch } from '~src/redux/store';

export const Counter: FC<ICounter> = ({ food }) => {
    const dispatch = useAppDispatch();

    const addItem = () => {
        dispatch(addOrder({ orderItem: { count: 1, order: food.order } }));
    };
    const removeItem = () => {
        dispatch(removeOrder({ orderItem: { count: 1, order: food.order } }));
    };

    return (
        <CounterContainer>
            <RoundContainer onPress={removeItem}>
                <TextPrice>-</TextPrice>
            </RoundContainer>
            <TextPrice>{food.count}</TextPrice>
            <RoundContainer onPress={addItem}>
                <TextPrice>+</TextPrice>
            </RoundContainer>
        </CounterContainer>
    );
};
