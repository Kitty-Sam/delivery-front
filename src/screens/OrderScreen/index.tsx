import React, { FC, useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { CustomModal } from '~components/CustomModal';
import { Address } from '~components/Modals/Address';
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
import { getBucketOrders, getCurrentUser, getModalType } from '~src/redux/selectors';
import { clearBucket, IOrder } from '~src/redux/slices/bucketSlice';
import { setModalType } from '~src/redux/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export const OrderScreen: FC<OrderScreenProps> = ({ navigation }) => {
    const orders = useAppSelector(getBucketOrders);
    const currentUser = useAppSelector(getCurrentUser);
    const modalType = useAppSelector(getModalType);

    const { refetch } = useGetUserByIdQuery(currentUser!.id);

    const [createOrder] = useCreateOrderMutation();

    const ordersNormalized = [...new Set(orders)];
    const totalPrice = orders.reduce((acc, obj) => acc + Number(obj.order.price) * obj.count, 0);
    const courierId = Math.floor(Math.random() * 3) + 1;

    const [address, setAddress] = useState('');

    const dispatch = useAppDispatch();

    const confirmOrderPress = async () => {
        await createOrder({
            userId: currentUser!.id,
            order: orders,
            courierId,
            total: totalPrice,
            address: `${address.slice(0, 10)}...`,
        }).unwrap();
        refetch();
        // @ts-ignore
        navigation.navigate(HomeStackNavigationName.PROFILE, { total: totalPrice });
        dispatch(clearBucket());
    };
    const addAddress = async () => {
        dispatch(setModalType({ type: 'address' }));
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
            <ButtonSquare
                title={address ? 'Confirm order' : 'Add address'}
                onPress={address ? confirmOrderPress : addAddress}
            />

            {modalType === 'address' && (
                <CustomModal>
                    <Address address={address} setAddress={setAddress} />
                </CustomModal>
            )}
        </RootContainer>
    );
};
