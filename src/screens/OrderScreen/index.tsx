import React, { FC, useCallback } from 'react';
import { FlatList } from 'react-native';

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
import { useCreateOrderMutation } from '~src/redux/api/foodApi';
import { useGetUserByIdQuery } from '~src/redux/api/userApi';
import { getBucketOrders, getCurrentUser } from '~src/redux/selectors';
import { clearBucket, IOrder } from '~src/redux/slices/bucketSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export const OrderScreen: FC<OrderScreenProps> = ({ navigation }) => {
    const orders = useAppSelector(getBucketOrders);
    const courierId = Math.floor(Math.random() * 3) + 1;

    const currentUser = useAppSelector(getCurrentUser);

    const { refetch } = useGetUserByIdQuery(currentUser!.id);

    const ordersNormalized = [...new Set(orders)];

    const [createOrder] = useCreateOrderMutation();

    const dispatch = useAppDispatch();

    const totalPrice = orders.reduce((acc, obj) => acc + Number(obj.order.price) * obj.count, 0);

    const confirmOrderPress = async () => {
        await createOrder({
            userId: currentUser!.id,
            order: orders,
            courierId,
            total: totalPrice,
        }).unwrap();
        refetch();
        // @ts-ignore
        navigation.navigate(HomeStackNavigationName.NOTIFICATION, { courier: courierId });
        dispatch(clearBucket());
    };

    const onCloseModalPress = () => {
        navigation.navigate(RootStackNavigationName.HOMESTACK);
    };

    const renderOrderItem = useCallback(({ item }: { item: IOrder }) => <OrderItem food={item} />, []);

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
            <ButtonSquare title="Confirm order" onPress={confirmOrderPress} />
        </RootContainer>
    );
};
