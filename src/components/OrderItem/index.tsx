import React, { FC } from 'react';
import { View } from 'react-native';

import { Counter } from '~components/Counter';
import { FoodImage, OrderItemContainer, TextDescription, TextPrice, TextTitle } from '~components/OrderItem/style';
import { IOrderItem } from '~components/OrderItem/type';

export const OrderItem: FC<IOrderItem> = ({ food }) => {
    const {
        order: { image, price, name, description },
    } = food;

    return (
        <OrderItemContainer>
            <FoodImage source={{ uri: image }} />
            <View>
                <TextTitle>{name}</TextTitle>
                <TextDescription>{description}</TextDescription>
                <TextPrice>{price} $</TextPrice>
            </View>
            <View>
                <Counter food={food} />
            </View>
        </OrderItemContainer>
    );
};
