import React, { FC, useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { OrderItem } from '~components/OrderItem';
import { ButtonSquare } from '~components/shared/Button/ButtonSquare';
import { HomeStackNavigationName } from '~navigation/HomeStack/type';
import { OrderScreenProps, RootStackNavigationName } from '~navigation/RootStack/type';
import {
    BillContainer,
    PriceText,
    RootContainer,
    RowBillContainer,
    RowBillContainerWithoutBorder,
    RowContainer,
    TitleText,
} from '~screens/OrderScreen/style';
import { useAppSelector } from '~src/redux/configureStore';
import { getBucketOrders } from '~src/redux/selectors';
import { IOrder } from '~src/redux/slices/bucketSlice';

export const OrderScreen: FC<OrderScreenProps> = ({ navigation }) => {
    const orders = useAppSelector(getBucketOrders);

    const ordersNormalized = [...new Set(orders)];
    const totalPrice = orders.reduce((acc, obj) => acc + Number(obj.order.price) * obj.count, 0);

    const confirmOrderPress = () => {
        // @ts-ignore
        navigation.navigate(HomeStackNavigationName.PROFILE, { total: totalPrice });
    };
    const theme: any = useTheme();

    const onCloseModalPress = () => {
        navigation.navigate(RootStackNavigationName.HOMESTACK);
    };

    const renderOrderItem = useCallback(({ item }: { item: IOrder }) => <OrderItem food={item} />, []);

    return (
        <RootContainer>
            <RowContainer>
                <TitleText>My order</TitleText>
                <Icon name="close" onPress={onCloseModalPress} size={24} color={theme['TEXT_COLOR']} />
            </RowContainer>
            <FlatList data={ordersNormalized} renderItem={renderOrderItem} showsHorizontalScrollIndicator={false} />
            <BillContainer>
                <RowBillContainer>
                    <PriceText>Subtotal</PriceText>
                    <PriceText>{totalPrice}$</PriceText>
                </RowBillContainer>
                <RowBillContainer>
                    <PriceText>Delivery</PriceText>
                    <PriceText>free</PriceText>
                </RowBillContainer>
                <RowBillContainerWithoutBorder>
                    <TitleText>Total</TitleText>
                    <TitleText>{totalPrice}$</TitleText>
                </RowBillContainerWithoutBorder>
            </BillContainer>
            <ButtonSquare title="Confirm order" onPress={confirmOrderPress} />
        </RootContainer>
    );
};
