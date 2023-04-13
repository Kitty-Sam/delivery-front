import React, { FC, useCallback } from 'react';
import { FlatList } from 'react-native';

import { OrderItem } from '~components/OrderItem';
import { ButtonSquare } from '~components/shared/Button/ButtonSquare';
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
import { getBucketOrders } from '~src/redux/selectors';
import { IOrder } from '~src/redux/slices/bucketSlice';
import { useAppSelector } from '~src/redux/store';

export const OrderScreen: FC<OrderScreenProps> = ({ navigation }) => {
    const orders = useAppSelector(getBucketOrders);

    const ordersNormalized = [...new Set(orders)];

    const onCloseModalPress = () => {
        navigation.navigate(RootStackNavigationName.HOMESTACK);
    };

    const renderOrderItem = useCallback(({ item }: { item: IOrder }) => <OrderItem food={item} />, []);

    const totalPrice = orders.reduce((acc, obj) => acc + Number(obj.order.price) * obj.count, 0);

    return (
        <RootContainer>
            <RowContainer>
                <TitleText>My order</TitleText>
                <TitleText onPress={onCloseModalPress}>x</TitleText>
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
            <ButtonSquare title="Confirm order" onPress={() => {}} />
        </RootContainer>
    );
};
